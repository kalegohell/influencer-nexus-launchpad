
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, TrendingUp, DollarSign, Zap } from 'lucide-react';

const ROICalculator = () => {
  const [budget, setBudget] = useState('');
  const [industry, setIndustry] = useState('');
  const [currentROI, setCurrentROI] = useState('');
  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const budgetNum = parseFloat(budget) || 0;
    const currentROINum = parseFloat(currentROI) || 2;
    
    // InfluenceX average multiplier based on industry
    const multipliers = {
      'fashion': 15,
      'tech': 12,
      'food': 18,
      'fitness': 14,
      'travel': 16,
      'default': 12
    };

    const multiplier = multipliers[industry] || multipliers.default;
    const newROI = currentROINum * (multiplier / 2);
    const additionalRevenue = budgetNum * (newROI - currentROINum);
    const yearlyGains = additionalRevenue * 12;

    setResults({
      currentROI: currentROINum,
      newROI: newROI.toFixed(1),
      additionalRevenue: additionalRevenue.toFixed(0),
      yearlyGains: yearlyGains.toFixed(0),
      improvement: ((newROI - currentROINum) / currentROINum * 100).toFixed(0)
    });
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Anticipate Your Success with Our 
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              {" "}ROI Calculator
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exactly how much more revenue you could generate with InfluenceX. 
            Based on real data from 5,000+ successful campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <Card className="bg-white border border-gray-200 shadow-xl rounded-2xl">
            <CardHeader className="text-center pb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl mb-4 mx-auto">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Calculate Your Potential ROI
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-gray-700 font-medium">
                  Monthly Marketing Budget ($)
                </Label>
                <Input
                  id="budget"
                  type="number"
                  placeholder="e.g., 10000"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="h-12 text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry" className="text-gray-700 font-medium">
                  Your Industry
                </Label>
                <Select value={industry} onValueChange={setIndustry}>
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fashion">Fashion & Beauty</SelectItem>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="food">Food & Beverage</SelectItem>
                    <SelectItem value="fitness">Health & Fitness</SelectItem>
                    <SelectItem value="travel">Travel & Lifestyle</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="current-roi" className="text-gray-700 font-medium">
                  Current ROI (e.g., 2 for 2:1 return)
                </Label>
                <Input
                  id="current-roi"
                  type="number"
                  placeholder="e.g., 2"
                  value={currentROI}
                  onChange={(e) => setCurrentROI(e.target.value)}
                  className="h-12 text-lg"
                />
              </div>

              <Button 
                onClick={calculateROI}
                disabled={!budget || !industry}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold"
              >
                Calculate My ROI Potential
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {results ? (
              <>
                <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 shadow-xl rounded-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-2xl mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Projected Results</h3>
                    <p className="text-gray-600 mb-6">With InfluenceX optimization</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-xl">
                        <div className="text-2xl font-bold text-green-600">{results.newROI}:1</div>
                        <div className="text-sm text-gray-600">New ROI</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600">+{results.improvement}%</div>
                        <div className="text-sm text-gray-600">Improvement</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200 shadow-lg rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <DollarSign className="w-6 h-6 text-green-600" />
                      <h4 className="text-lg font-semibold text-gray-900">Revenue Impact</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Additional Monthly Revenue:</span>
                        <span className="font-bold text-gray-900">${parseInt(results.additionalRevenue).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Yearly Revenue Gains:</span>
                        <span className="font-bold text-green-600">${parseInt(results.yearlyGains).toLocaleString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 shadow-lg rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                    <Zap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Average InfluenceX Results
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white p-4 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">12x</div>
                      <div className="text-sm text-gray-600">Average ROI</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">300%</div>
                      <div className="text-sm text-gray-600">Revenue Increase</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600">80%</div>
                      <div className="text-sm text-gray-600">Time Savings</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
