

var xml = {
  "name": "FinalizeRewardsRequest",
  "attrs": {},
  "nodes": [
    {
      "name": "RequestHeader",
      "attrs": {},
      "nodes": [
        {
          "name": "POSLoyaltyInterfaceVersion",
          "value": "1.0.6.1"
        },
        {
          "name": "VendorName",
          "value": "ESI"
        },
        {
          "name": "VendorModelVersion",
          "value": "BULPOS"
        },
        {
          "name": "POSSequenceID",
          "value": "BULOSV10"
        },
        {
          "name": "LoyaltySequenceID",
          "value": "YL2b1L0STTtKFPb83B9I9fnMeifdvJI4-1415205669832"
        },
        {
          "name": "StoreLocationID",
          "value": "303200"
        },
        {
          "name": "LoyaltyOfflineFlag",
          "value": "No"
        },
        {
          "name": "Extension",
          "attrs": {},
          "nodes": [
            {
              "name": "LoyaltyIDGroup",
              "attrs": {},
              "nodes": [
                {
                  "name": "LoyaltyID",
                  "attrs": {
                    "entryMethod": "swipe"
                  },
                  "value": "123123123"
                },
                {
                  "name": "LoyaltyID",
                  "attrs": {
                    "entryMethod": "swipe"
                  },
                  "value": "3455345345"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "LoyaltyID",
      "attrs": {
        "entryMethod": "swipe"
      },
      "value": "123123123",
      "attributes": " entryMethod=\"swipe\""
    },
    {
      "name": "TransactionData",
      "attrs": {},
      "nodes": [
        {
          "name": "TransactionHeader",
          "attrs": {},
          "nodes": [
            {
              "name": "OutsideSalesFlag",
              "value": "yes"
            },
            {
              "name": "FuelPositionID",
              "value": "3"
            },
            {
              "name": "CashierID",
              "value": "Station Manager"
            },
            {
              "name": "TillID",
              "value": "1"
            },
            {
              "name": "POSTransactionID",
              "value": "001068"
            },
            {
              "name": "BusinessPeriod",
              "attrs": {},
              "nodes": [
                {
                  "name": "BusinessDate",
                  "value": "4014-09-02"
                },
                {
                  "name": "PrimaryReportPeriod",
                  "value": "cashier"
                },
                {
                  "name": "BeginDate",
                  "value": "4014-09-02"
                },
                {
                  "name": "BeginTime",
                  "value": "00:00:00"
                },
                {
                  "name": "EndDate",
                  "value": "2100-09-02"
                },
                {
                  "name": "EndTime",
                  "value": "00:00:00"
                }
              ]
            },
            {
              "name": "EventStartTime",
              "value": "14:22:48"
            },
            {
              "name": "EventStartDate",
              "value": "2014-10-27"
            }
          ]
        },
        {
          "name": "TransactionDetailGroup",
          "attrs": {},
          "nodes": [
            {
              "name": "TransactionLine",
              "attrs": {
                "status": "normal"
              },
              "nodes": [
                {
                  "name": "LineNumber",
                  "value": "1"
                },
                {
                  "name": "ItemLine",
                  "attrs": {},
                  "nodes": [
                    {
                      "name": "ItemCode",
                      "attrs": {},
                      "nodes": [
                        {
                          "name": "POSCodeFormat",
                          "value": "plu"
                        },
                        {
                          "name": "POSCode",
                          "value": "0000000000001"
                        },
                        {
                          "name": "POSCodeModifier",
                          "value": "0"
                        }
                      ]
                    },
                    {
                      "name": "MerchandiseCode",
                      "value": "25-03-00"
                    },
                    {
                      "name": "Description",
                      "value": "Regular Wash"
                    },
                    {
                      "name": "ActualSalesPrice",
                      "value": "8.99"
                    },
                    {
                      "name": "RegularSellPrice",
                      "value": "8.99"
                    },
                    {
                      "name": "SellingUnits",
                      "value": "1"
                    },
                    {
                      "name": "SalesQuantity",
                      "value": "1"
                    },
                    {
                      "name": "SalesAmount",
                      "value": "8.99"
                    },
                    {
                      "name": "SalesUOM",
                      "value": "each"
                    },
                    {
                      "name": "ItemTax",
                      "attrs": {},
                      "nodes": [
                        {
                          "name": "TaxLevelID",
                          "value": "PST"
                        },
                        {
                          "name": "TaxableSalesAmount",
                          "value": "0.63"
                        },
                        {
                          "name": "TaxCollectedAmount",
                          "value": "0.63"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "TransactionLine",
              "attrs": {
                "status": "normal"
              },
              "nodes": [
                {
                  "name": "LineNumber",
                  "value": "2"
                },
                {
                  "name": "FuelLine",
                  "attrs": {
                    "fuelPrepay": "no"
                  },
                  "nodes": [
                    {
                      "name": "FuelGradeID",
                      "value": "032"
                    },
                    {
                      "name": "FuelPositionID",
                      "value": "3"
                    },
                    {
                      "name": "ServiceLevelCode",
                      "value": "self"
                    },
                    {
                      "name": "Description",
                      "value": "Regular"
                    },
                    {
                      "name": "ActualSalesPrice",
                      "value": "115.6"
                    },
                    {
                      "name": "RegularSalesPrice",
                      "value": "115.6"
                    },
                    {
                      "name": "SalesQuantity",
                      "value": "10"
                    },
                    {
                      "name": "SalesAmount",
                      "value": "11.56"
                    },
                    {
                      "name": "SalesUOM",
                      "value": "liter"
                    },
                    {
                      "name": "ItemTax",
                      "attrs": {},
                      "nodes": [
                        {
                          "name": "TaxLevelID",
                          "value": "GST"
                        },
                        {
                          "name": "TaxCollectedAmount",
                          "value": "0.81"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "TransactionLine",
              "attrs": {
                "status": "normal"
              },
              "nodes": [
                {
                  "name": "TenderInfo",
                  "attrs": {},
                  "nodes": [
                    {
                      "name": "TenderCode",
                      "value": "creditCards"
                    },
                    {
                      "name": "TenderSubCode",
                      "value": "V"
                    },
                    {
                      "name": "ISOPrefix",
                      "value": "450553"
                    },
                    {
                      "name": "TenderAmount",
                      "value": "150"
                    },
                    {
                      "name": "ChangeFlag",
                      "value": "no"
                    }
                  ]
                }
              ]
            },
            {
              "name": "TransactionLine",
              "attrs": {
                "status": "normal"
              },
              "nodes": [
                {
                  "name": "TenderInfo",
                  "attrs": {},
                  "nodes": [
                    {
                      "name": "TenderCode",
                      "value": "LoyaltyOffer"
                    },
                    {
                      "name": "TenderSubCode",
                      "value": "proprietary"
                    },
                    {
                      "name": "LoyaltyID",
                      "value": "7042310000000184267"
                    },
                    {
                      "name": "LoyaltyRewardID",
                      "value": "CARWASHBONUSCPL"
                    },
                    {
                      "name": "ISOPrefix",
                      "value": "704231"
                    },
                    {
                      "name": "TenderAmount",
                      "value": "0.05"
                    },
                    {
                      "name": "ChangeFlag",
                      "value": "no"
                    }
                  ]
                }
              ]
            },
            {
              "name": "TransactionLine",
              "attrs": {
                "status": "normal"
              },
              "nodes": [
                {
                  "name": "TenderInfo",
                  "attrs": {},
                  "nodes": [
                    {
                      "name": "TenderCode",
                      "value": "LoyaltyOffer"
                    },
                    {
                      "name": "TenderSubCode",
                      "value": "proprietary"
                    },
                    {
                      "name": "LoyaltyID",
                      "value": "7042310000000184267"
                    },
                    {
                      "name": "LoyaltyRewardID",
                      "value": "CARWASHCARD"
                    },
                    {
                      "name": "ISOPrefix",
                      "value": "704231"
                    },
                    {
                      "name": "TenderAmount",
                      "value": "1"
                    },
                    {
                      "name": "ChangeFlag",
                      "value": "no"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
