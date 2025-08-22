import smtplib
import os
import time
from email.message import EmailMessage
from datetime import datetime
from fpdf import FPDF
import tempfile

class AidApplicationPDF(FPDF):
    def header(self):
        # Logo
        self.image('https://via.placeholder.com/150x50/4b778d/ffffff?text=KFT+Aid+Application', 10, 8, 33)
        self.set_font('Arial', 'B', 15)
        # Move to the right
        self.cell(80)
        # Title
        self.cell(30, 10, 'Aid Application Form', 0, 0, 'C')
        # Line break
        self.ln(20)
    
    def footer(self):
        # Position at 1.5 cm from bottom
        self.set_y(-15)
        self.set_font('Arial', 'I', 8)
        # Page number
        self.cell(0, 10, 'Page ' + str(self.page_no()) + '/{nb}', 0, 0, 'C')
    
    def section_title(self, title):
        self.set_font('Arial', 'B', 14)
        self.set_fill_color(75, 119, 141)  # Dark blue color
        self.set_text_color(255, 255, 255)  # White text
        self.cell(0, 10, title, 0, 1, 'L', 1)
        self.ln(5)
        self.set_text_color(0, 0, 0)  # Reset text color to black
    
    def field_title(self, title):
        self.set_font('Arial', 'B', 12)
        self.cell(0, 8, title, 0, 1)
    
    def field_value(self, value):
        self.set_font('Arial', '', 12)
        self.multi_cell(0, 8, value)
        self.ln(3)

def create_aid_pdf(form_data):
    pdf = AidApplicationPDF()
    pdf.alias_nb_pages()
    pdf.add_page()
    
    # Add application date
    pdf.set_font('Arial', 'I', 10)
    pdf.cell(0, 10, f'Application Date: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}', 0, 1)
    pdf.ln(10)
    
    # Personal Information Section
    pdf.section_title('Personal Information')
    
    pdf.field_title('Full Name:')
    pdf.field_value(form_data['full_name'])
    
    pdf.field_title('CNIC Number:')
    pdf.field_value(form_data['cnic_number'])
    
    pdf.field_title('Phone Number:')
    pdf.field_value(form_data['phone_number'])
    
    pdf.field_title('Email Address:')
    pdf.field_value(form_data['email'] if form_data['email'] else 'Not provided')
    
    pdf.field_title('Complete Address:')
    pdf.field_value(form_data['full_address'])
    
    pdf.field_title('City:')
    pdf.field_value(form_data['city'])
    
    # Aid Request Details Section
    pdf.section_title('Aid Request Details')
    
    pdf.field_title('Type of Aid Requested:')
    pdf.field_value(form_data['aid_type'])
    
    pdf.field_title('Monthly Family Income (PKR):')
    pdf.field_value(form_data['monthly_income'])
    
    pdf.field_title('Number of Family Members:')
    pdf.field_value(form_data['family_members'])
    
    pdf.field_title('Urgency Level:')
    pdf.field_value(form_data['urgency_level'])
    
    pdf.field_title('Detailed Reason for Aid Request:')
    pdf.field_value(form_data['reason'])
    
    # Additional Information Section
    pdf.section_title('Additional Information')
    
    pdf.field_title('Applied for aid from KFT before:')
    pdf.field_value(form_data['applied_before'])
    
    pdf.field_title('Terms and Conditions:')
    pdf.field_value('Applicant agrees to the terms and conditions and confirms that all information provided is accurate.')
    
    # Supporting Documents note
    if form_data.get('document_path'):
        pdf.field_title('Supporting Documents:')
        pdf.field_value("Supporting documents have been attached with this application.")
    
    # Create temporary file
    temp_file = tempfile.NamedTemporaryFile(delete=False, suffix='.pdf')
    pdf_path = temp_file.name
    temp_file.close()
    
    # Output PDF
    pdf.output(pdf_path, 'F')
    return pdf_path

def send_aid_application(full_name, cnic_number, phone_number, email, full_address, 
                         city, aid_type, monthly_income, family_members, urgency_level, 
                         reason, applied_before, document_path=None):
    # Get current hour from system time
    hour = time.localtime().tm_hour
    
    # Decide greeting based on the time
    if 5 <= hour < 12:
        greeting = "Good Morning"
    elif 12 <= hour < 17:
        greeting = "Good Afternoon"
    elif 17 <= hour < 21:
        greeting = "Good Evening"
    else:
        greeting = "Good Night"
    
    # Email credentials
    EMAIL_ADDRESS = 'mykjcs2023@gmail.com'
    EMAIL_PASSWORD = 'qbim qsck hnkw ekgr'
    RECIPIENT_EMAIL = 'khegarha.falahi.tanzeem@gmail.com'
    
    # Create PDF
    form_data = {
        'full_name': full_name,
        'cnic_number': cnic_number,
        'phone_number': phone_number,
        'email': email,
        'full_address': full_address,
        'city': city,
        'aid_type': aid_type,
        'monthly_income': monthly_income,
        'family_members': family_members,
        'urgency_level': urgency_level,
        'reason': reason,
        'applied_before': applied_before,
        'document_path': document_path
    }
    
    pdf_path = create_aid_pdf(form_data)
    
    # Create the email message
    msg = EmailMessage()
    msg['Subject'] = f'New Aid Application: {full_name} from {city}'
    msg['From'] = EMAIL_ADDRESS
    msg['To'] = RECIPIENT_EMAIL
    
    # Format email content
    email_content = f"""
    {greeting},
    
    A new aid application has been submitted through the KFT website.
    
    APPLICATION SUMMARY:
    - Name: {full_name}
    - CNIC: {cnic_number}
    - Phone: {phone_number}
    - City: {city}
    - Aid Type: {aid_type}
    - Monthly Income: {monthly_income} PKR
    - Family Members: {family_members}
    - Urgency: {urgency_level}
    - Applied before: {applied_before}
    
    The detailed application is attached as a PDF.
    
    ---
    Application submitted on {datetime.now().strftime('%Y-%m-%d at %H:%M:%S')}
    """
    
    msg.set_content(email_content)
    
    # Attach PDF
    with open(pdf_path, 'rb') as f:
        file_data = f.read()
        file_name = f"KFT_Aid_Application_{full_name.replace(' ', '_')}.pdf"
    msg.add_attachment(file_data, maintype='application', subtype='pdf', filename=file_name)
    
    # Attach supporting documents if provided
    if document_path:
        # Handle single file or list of files
        if isinstance(document_path, list):
            for doc_path in document_path:
                if os.path.exists(doc_path):
                    with open(doc_path, 'rb') as f:
                        doc_data = f.read()
                        doc_name = os.path.basename(doc_path)
                    msg.add_attachment(doc_data, maintype='application', subtype='octet-stream', filename=doc_name)
        elif os.path.exists(document_path):
            with open(document_path, 'rb') as f:
                doc_data = f.read()
                doc_name = os.path.basename(document_path)
            msg.add_attachment(doc_data, maintype='application', subtype='octet-stream', filename=doc_name)
    
    # Send the email
    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            smtp.send_message(msg)
            
            # Clean up temporary PDF file
            os.unlink(pdf_path)
            
            return True, "✅ Application submitted successfully! PDF has been sent to the administrator."
    except smtplib.SMTPAuthenticationError:
        return False, "❌ Login failed. Check credentials or enable App Passwords."
    except smtplib.SMTPException as e:
        return False, f"❌ SMTP error: {e}"
    except Exception as e:
        return False, f"❌ Unexpected error: {e}"

# Example usage
if __name__ == "__main__":
    # Simulate form data
    form_data = {
        'full_name': 'Ahmed Khan',
        'cnic_number': '12345-6789012-3',
        'phone_number': '+92-300-1234567',
        'email': 'ahmed.khan@example.com',
        'full_address': 'House 123, Street 45, Sector G-10/4, Islamabad',
        'city': 'Islamabad',
        'aid_type': 'Financial Assistance',
        'monthly_income': '25000',
        'family_members': '5',
        'urgency_level': 'High',
        'reason': 'Lost my job due to company downsizing. Have three school-going children and elderly parents to support. Need assistance for basic necessities including food, rent, and school fees.',
        'applied_before': 'No',
        'document_path': None  # Replace with actual file path(s) if available
    }
    
    success, message = send_aid_application(**form_data)
    print(message)
