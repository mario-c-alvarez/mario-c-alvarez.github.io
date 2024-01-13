import logo from './logo.svg';
import './App.css';

function App() {
  const apponclick= () => {
    window.digitalData={
      "versionDL": "20230830_4.2",
              "application": {
                      "application": {
                      "name": "",
                      "type": ""
                      },
                      "customFields": "",
                      "earnings": "",
                      "errorType": "",
                      "expenses": "",
                      "fulfillmentModel": "",
                      "globalApplication": "",
                      "interactionLevel": "",
                      "isQualifiedVisits": "",
                      "offer": "",
                      "operationNumber": "",
                      "process": "",
                      "programTypeHired": "",
                      "state": "",
                      "step": "",
                      "transactionID": "",
                      "typology": ""
              },
              "internalCampaign": {
                      "attributes": [],
                      "event": {
                      "eventInfo": {
                              "eventName": "",
                              "siteActionName": ""
                      }
                      }
              },
              "optimization": {
                      "attributes": [{
                      "idOptimization": "",
                      "experience": "",
                      "place": "",
                      "collection": "",
                      "collectionID": "",
                      "collectionPosition": "",
                      "collectionStatus": "",
                      "collectionStatusTimeChange": "",
                      "item": "",
                      "itemID": "",
                      "itemPosition": "",
                      "itemCategory": "",
                      "itemStatus": "",
                      "itemStatusTimeChange": "",
                      "contractID": "",
                      "type": "",
                      "executor": "",
                      "audience": ""

                      }],
                      "event": {
                      "eventName": "",
                      "optimizationEvent": ""
                      }
              },
              "page": {
                      "pageActivity": {
                      "loginType": "",
                      "audio": {
                              "nameOfPodcastDisplayed": "",
                              "duration": "",
                              "id": "",
                              "player": "",
                              "quality": "",
                              "url": ""
                      },
                      "link": {
                              "aux1": "",
                              "aux2": "",
                              "aux3": "",
                              "ext": "",
                              "name": "",
                              "url": ""
                      },
                      "search": {
                              "onSiteSearchEnterTerm": "",
                              "onSiteSearchResults": "",
                              "onSiteSearchTerm": ""
                      },
                      "video": {
                              "nameOfVideoDisplayed": "",
                              "duration": "",
                              "id": "",
                              "player": "",
                              "quality": "",
                              "url": ""
                      }
                      },
                      "pageInfo": {
                      "area": "publica",
                      "businessUnit": "[Por definir]",
                      "channel": "online",
                      "errorPage": "",
                      "geoRegion": "",
                      "language": "ES",
                      "level1": "landing",
                      "level10": "",
                      "level2": "",
                      "level3": "",
                      "level4": "",
                      "level5": "",
                      "level6": "",
                      "level7": "",
                      "level8": "",
                      "level9": "",
                      "pageIntent": "",
                      "pageName": "escritorio:publica:test",
                      "pageSegment": "publica",
                      "projectName": "[Por definir]",
                      "server": "window.location.hostname",
                      "siteAppName": "[Por definir]",
                      "sysEnv": "escritorio",
                      "version": "[Versión del paquete de deployment]"
                      }


              },
              "pageInstanceID": "dev",
              "products": {
                      "attributes": [{
                      "primaryCategory": "prestamos",
                      "productSubtype": "",
                      "productName": "credito auto",
                      "productCode": "",
                      "contractID": "",
                      "quantity": "250000",
                      "amount": "175000",
                      "paymentAmount": "2916",
                      "numberOfPayments": "60",
                      "paymentDate": "",
                      "paymentType": "mensual",
                      "serviceCharge": "0",
                      "currency": "MXN",
                      "numberOfHolders": "",
                      "term": "1800",
                      "group": "",
                      "state": "",
                      "interestRate": {
                              "tin": "",
                              "tae": "13.8",
                              "rate": "12.99",
                      },
                      }],
                      "productPortfolio": []
              },
              "user": {
                      "device": {
                      "root": "",
                      "mobile": "",
                      "userAgent": "",
                      "mode": "",
                      "IP": "",
                      "advertisingID": "",
                      "usabilityMethod": "",
                      "push": {
                              "agreement": "",
                              "deactivationPlace": ""
                      },
                      "biometry": {
                              "agreement": "",
                              "deactivationPlace": ""
                      }
                      },
                      "consent": {
                      "advertising": "",
                      "analytics": "",
                      "optimization": "",
                      "version": "",
                      "technique": ""
                      },
                      "IDs": [{
                      "platformCode": "google",
                      "prospectID": "",
                      "profileID": "VVVV44444",
                      "userID": ""
                      }],
                      "segment": {
                      "profile": "",
                      "global": "",
                      "collectiveID": "",
                      "digitalizationLevel": ""
                      },
                      "userScoring": "",
                      "e": "",
                      "p": "",
                      "gClientID": "",
                      "previousSessionID": "",
                      "age": "",
                      "civilStatus": "",
                      "country": "",
                      "educationLevel": "",
                      "gender": "",
                      "jobType": "",
                      "state": "",
                      "userState": "no logado"
              },
              "activationTools": {
                      "adobeAnalytics": "",
                      "googleAnalytics": "",
                      "meta": "",
                      "googleAds": "",
                      "adServer": "",
                      "mobileAttribution": "",
                      "feedback": ""
              },
              "moduloAutos": {
                      "userInfo": {
                      "userID": "", //eVar
                      "isBuyer": "",
                      "isSeller": "", //eVarX: isBuyer/isSeller/ambos (valores booleanos cerrados: si/no)
                      },
                      "vehicle:": { //solo se informa uno por carga de pagina -> s.product
                      "id": "",
                      "sku": "",
                      "brand": "",
                      "model": "",
                      "version": "",
                      "year": "",
                      "color": "",
                      "owners": "",
                      "price": "",
                      "showroom": "",
                      "location": "",
                      "transmission": "",
                      "type": "",
                      "passengers": "",
                      "engineSize": "",
                      "hp": "",
                      "traction": "",
                      "cylinders": "",
                      "turbo": "",
                      "rimSize": "",
                      "seatType": "",
                      "sellerID": "",
                      "km": ""
                      },
                      "productList": {
                      "searchResults": [{ //eventos mapeados como merchant event
                              "id": "",
                              "sku": "",
                              "brand": "",
                              "model": "",
                              "version": "",
                              "year": "",
                              "color": "",
                              "owners": "",
                              "price": "",
                              "showroom": "",
                              "location": "",
                              "km": "",
                              "transmission": "",
                              "verified": "",
                              "reserved": "",
                              "type": "",
                              "passengers": "",
                              "engineSize": "",
                              "hp": "",
                              "traction": "",
                              "cylinders": "",
                              "turbo": "",
                              "rimSize": "",
                              "seatType": "",
                              "sellerID": ""
                              },
                              {
                              "id": "",
                              "sku": "",
                              "brand": "",
                              "model": "",
                              "version": "",
                              "year": "",
                              "color": "",
                              "owners": "",
                              "price": "",
                              "showroom": "",
                              "location": "",
                              "km": "",
                              "transmission": "",
                              "verified": "",
                              "reserved": "",
                              "type": "",
                              "passengers": "",
                              "engineSize": "",
                              "hp": "",
                              "traction": "",
                              "cylinders": "",
                              "turbo": "",
                              "rimSize": "",
                              "seatType": "",
                              "sellerID": ""
                              }
                      ],
                      "favorites": [{
                              "id": "",
                              "sku": "",
                              "brand": "",
                              "model": "",
                              "version": "",
                              "year": "",
                              "color": "",
                              "owners": "",
                              "price": "",
                              "showroom": "",
                              "location": "",
                              "km": "",
                              "transmission": "",
                              "verified": "",
                              "reserved": "",
                              "type": "",
                              "passengers": "",
                              "engineSize": "",
                              "hp": "",
                              "traction": "",
                              "cylinders": "",
                              "turbo": "",
                              "rimSize": "",
                              "seatType": "",
                              "sellerID": ""
                              },
                              {
                              "id": "",
                              "sku": "",
                              "brand": "",
                              "model": "",
                              "version": "",
                              "year": "",
                              "color": "",
                              "owners": "",
                              "price": "",
                              "showroom": "",
                              "location": "",
                              "km": "",
                              "transmission": "",
                              "verified": "",
                              "reserved": "",
                              "type": "",
                              "passengers": "",
                              "engineSize": "",
                              "hp": "",
                              "traction": "",
                              "cylinders": "",
                              "turbo": "",
                              "rimSize": "",
                              "seatType": "",
                              "sellerID": ""
                              }
                      ],
                      "mostVisited": [{
                              "id": "",
                              "sku": "",
                              "brand": "",
                              "model": "",
                              "version": "",
                              "year": "",
                              "color": "",
                              "owners": "",
                              "price": "",
                              "showroom": "",
                              "location": "",
                              "km": "",
                              "transmission": "",
                              "verified": "",
                              "reserved": "",
                              "type": "",
                              "passengers": "",
                              "engineSize": "",
                              "hp": "",
                              "traction": "",
                              "cylinders": "",
                              "turbo": "",
                              "rimSize": "",
                              "seatType": "",
                              "sellerID": ""
                              },
                              {
                              "id": "",
                              "sku": "",
                              "brand": "",
                              "model": "",
                              "version": "",
                              "year": "",
                              "color": "",
                              "owners": "",
                              "price": "",
                              "showroom": "",
                              "location": "",
                              "km": "",
                              "transmission": "",
                              "verified": "",
                              "reserved": "",
                              "type": "",
                              "passengers": "",
                              "engineSize": "",
                              "hp": "",
                              "traction": "",
                              "cylinders": "",
                              "turbo": "",
                              "rimSize": "",
                              "seatType": "",
                              "sellerID": ""
                              }
                      ],
                      "recentlyAdded": [{
                              "id": "",
                              "sku": "", //eVar
                              "brand": "",
                              "model": "",
                              "version": "",
                              "year": "",
                              "color": "",
                              "owners": "",
                              "price": "",
                              "showroom": "",
                              "location": "",
                              "km": "",
                              "transmission": "",
                              "verified": "",
                              "reserved": "",
                              "type": "",
                              "passengers": "",
                              "engineSize": "",
                              "hp": "",
                              "traction": "",
                              "cylinders": "",
                              "turbo": "",
                              "rimSize": "",
                              "seatType": "",
                              "sellerID": ""
                              },
                              {
                              "id": "",
                              "sku": "",
                              "brand": "",
                              "model": "",
                              "version": "",
                              "year": "",
                              "color": "",
                              "owners": "",
                              "price": "",
                              "showroom": "",
                              "location": "",
                              "km": "",
                              "transmission": "",
                              "verified": "",
                              "reserved": "",
                              "type": "",
                              "passengers": "",
                              "engineSize": "",
                              "hp": "",
                              "traction": "",
                              "cylinders": "",
                              "turbo": "",
                              "rimSize": "",
                              "seatType": "",
                              "sellerID": ""
                              }
                      ]
                      },
                      "pageActivity": {
                      "origin": {
                              "listID": "", // evar y prop
                              "position": "" // eVar y prop
                      },
                      "searchAdvanced": {
                              "brand": {}, // list prop
                              "model": {}, // list prop
                              "year": {}, // list prop
                              "color": {}, // list prop
                              "frontKm": "", // prop
                              "frontPrice": "", // prop
                              "transmission": {}, // list prop
                              "location": {}, // list prop
                              "verified": "", // prop
                              "reserved": "", // prop
                              "owners": {}, // list prop
                              "type": {}, // list prop
                              "passengers": {}, //list prop
                              "toKm": "", // prop
                              "toPrice": "", // prop
                              "order": "", // prop
                              "pagination": "", // prop
                              "showroom": {} // list prop
                      }
                      }
              }
    };

    window.digitalLink('App On Click Start', window.digitalData);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola sitio en React para probar el Data Layer
        </p>
        

        <button onClick={apponclick}>App On Click Start</button>

      </header>
     
    </div>
    
  );
}

export default App;
