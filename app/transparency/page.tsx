import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, PieChart, TrendingUp } from "lucide-react"

export default function TransparencyPage() {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
            Transparency & Financial Reports
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in complete transparency. Here you can find detailed information about our finances, fund usage,
            and impact reports.
          </p>
        </div>

        {/* Financial Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-green-600">
                <TrendingUp className="mr-2 h-6 w-6" />
                Total Donations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-600">₨2,500,000</p>
              <p className="text-gray-600">This year</p>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-600">
                <PieChart className="mr-2 h-6 w-6" />
                Funds Distributed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-600">₨2,200,000</p>
              <p className="text-gray-600">88% of donations</p>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-600">
                <FileText className="mr-2 h-6 w-6" />
                Administrative
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-purple-600">₨300,000</p>
              <p className="text-gray-600">12% operational costs</p>
            </CardContent>
          </Card>
        </div>

        {/* Reports Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Annual Reports</CardTitle>
              <CardDescription>Comprehensive yearly financial and impact reports</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">Annual Report 2023</h3>
                  <p className="text-sm text-gray-600">Complete financial and impact summary</p>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">Annual Report 2022</h3>
                  <p className="text-sm text-gray-600">Previous year's comprehensive report</p>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Monthly Reports</CardTitle>
              <CardDescription>Regular updates on our activities and finances</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">December 2023</h3>
                  <p className="text-sm text-gray-600">Monthly financial statement</p>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">November 2023</h3>
                  <p className="text-sm text-gray-600">Monthly financial statement</p>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
