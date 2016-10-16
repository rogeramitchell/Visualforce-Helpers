var userDetails; // defines the attributes of the page's current user and their organization
    
// requests the user details from controller, and if successful, sets userDetails
function getUserInfoDetails() {
  Visualforce.remoting.Manager.invokeAction('{!$RemoteAction.HELPER_UserInfo.getUserInfoDetails}',
  function(result, event) {
    if(event.status == 200) {
      userDetails = result;
      userCurrency = userDetails.defaultCurrency;
    } else {
      alert("An error occurred! Here's what we got back from the server: " + event.message);
    }
  });
}

var userCurrency; // defines the currency string from UserInfo
var currencySymbol; // defines the currency symbol or letter to appear
var currencyIsBefore; // defines whether symbol appears before or after the number

// takes the currency string from getUserInfoDetails result, sets the above variables
function handleCurrencyFormat() {
  // UAE DirhamuserCurrency
  if(userCurrency == "AED") { 
    currencySymbol = "د.إ"; 
    currencyIsBefore = false;
  }
  // Afghanistan Afghani (New)
  if(userCurrency == "AFN") { 
    currencySymbol = "؋"; 
    currencyIsBefore = false;
  }
  // Albanian Lek
  if(userCurrency == "ALL") { 
    currencySymbol = "Lek"; 
    currencyIsBefore = true;
  }
  // Armenian Dram - does not have symbol to display as character in browser
  if(userCurrency == "AMD") { 
    currencySymbol = "AMD"; 
    currencyIsBefore = true;
  }
  // Neth Antilles Guilder
  if(userCurrency == "ANG") { 
    currencySymbol = "ƒ"; 
    currencyIsBefore = true;
  }
  // Angola Kwanza
  if(userCurrency == "AOA") { 
    currencySymbol = "Kz"; 
    currencyIsBefore = true;
  }
  // Argentine Peso
  if(userCurrency == "ARS") { 
    currencySymbol = "$"; 
    currencyIsBefore = true;
  }
  // Australian Dollar
  if(userCurrency == "AUD") { 
    currencySymbol = "$"; 
    currencyIsBefore = true;
  }
  // Aruba Florin
  if(userCurrency == "AWG") { 
    currencySymbol = "AWG"; 
    currencyIsBefore = true;
  }
  // Azerbaijanian New Manat
  if(userCurrency == "AZN") { 
    currencySymbol = "ƒ"; 
    currencyIsBefore = true;
  }
  // Convertible Marks
  if(userCurrency == "BAM") { 
    currencySymbol = "KM"; 
    currencyIsBefore = true;
  }
  // Barbados Dollar
  if(userCurrency == "BBD") { 
    currencySymbol = "$"; 
    currencyIsBefore = true;
  }
  // Bangladesh Taka
  if(userCurrency == "BDT") { 
    currencySymbol = "Tk"; 
    currencyIsBefore = true;
  }
  // Bulgaria Lev
  if(userCurrency == "BGN") { 
    currencySymbol = "лв"; 
    currencyIsBefore = true;
  }
  // Bahraini Dinar
  if(userCurrency == "BHD") { 
    currencySymbol = "BD"; 
    currencyIsBefore = true;
  }
  // Burundi Franc
  if(userCurrency == "BIF") { 
    currencySymbol = "BIF"; 
    currencyIsBefore = true;
  }
  // Bermuda Dollar
  if(userCurrency == "BMD") { 
    currencySymbol = "$"; 
    currencyIsBefore = true;
  }
  // Brunei Dollar
  if(userCurrency == "BND") { 
    currencySymbol = "$"; 
    currencyIsBefore = true;
  }
  // Bolivian Boliviano
  if(userCurrency == "BOB") { 
    currencySymbol = "$b"; 
    currencyIsBefore = true;
  }
  // Bolivia Mvdol - not found in www.xe.com
  if(userCurrency == "BOV") { 
    currencySymbol = "BOV"; 
    currencyIsBefore = true;
  }
  // Brazilian Cruzeiro (old) - not found in www.xe.com
  if(userCurrency == "BRB") { 
    currencySymbol = "BRB"; 
    currencyIsBefore = true;
  }
  // Brazilian Real
  if(userCurrency == "BRL") { 
    currencySymbol = "R$"; 
    currencyIsBefore = true;
  }
  // Bahamian Dollar
  if(userCurrency == "BSD") { 
    currencySymbol = "$"; 
    currencyIsBefore = true;
  }
  // Bhutan Ngultrum
  if(userCurrency == "BTN") { 
    currencySymbol = "BTN"; 
    currencyIsBefore = true;
  }
  // Botswana Pula
  if(userCurrency == "BWP") { 
    currencySymbol = "P"; 
    currencyIsBefore = true;
  }
  // Belarussian Ruble
  if(userCurrency == "BYR") { 
    currencySymbol = "p."; 
    currencyIsBefore = true;
  }
  // Belize Dollar
  if(userCurrency == "BZD") { 
    currencySymbol = "BZ$"; 
    currencyIsBefore = true;
  }
  // Canadian Dollar
  if(userCurrency == "CAD") { 
    currencySymbol = "$"; 
    currencyIsBefore = true;
  }
  // Franc Congolais
  if(userCurrency == "CDF") { 
    currencySymbol = "CDF"; 
    currencyIsBefore = true;
  }
  // Swiss Franc
  if(userCurrency == "CHF") { 
    currencySymbol = "CHF"; 
    currencyIsBefore = true;
  }
  // Unidades de fomento - not found in www.xe.com
  if(userCurrency == "CLF") { 
    currencySymbol = "CLF"; 
    currencyIsBefore = true;
  }
  // Chilean Peso
  if(userCurrency == "CLP") { 
    currencySymbol = "$"; 
    currencyIsBefore = true;
  }
  // Chinese Yuan
  if(userCurrency == "CNY") { 
    currencySymbol = "¥"; 
    currencyIsBefore = true;
  }
  // Colombian Peso
  if(userCurrency == "COP") { 
    currencySymbol = "$"; 
    currencyIsBefore = true;
  }
  // Costa Rica Colon
  if(userCurrency == "CRC") { 
    currencySymbol = "₡"; 
    currencyIsBefore = true;
  }
  // Cuban Peso
  if(userCurrency == "CUP") { 
    currencySymbol = "₱"; 
    currencyIsBefore = true;
  }
  // Cape Verde Escudo
  if(userCurrency == "CVE") { 
    currencySymbol = "$"; 
    currencyIsBefore = true;
  }
  // Czech Koruna
  if(userCurrency == "CZK") { 
    currencySymbol = "Kč"; 
    currencyIsBefore = false;
  }
  // Dijibouti Franc
  if(userCurrency == "DJF") { 
    currencySymbol = "DJF"; 
    currencyIsBefore = true;
  }
  // Danish Krone
  if(userCurrency == "DKK") { 
    currencySymbol = "kr"; 
    currencyIsBefore = true;
  }
  // Dominican Peso
  if(userCurrency == "DOP") { 
    currencySymbol = "RD$"; 
    currencyIsBefore = true;
  }
  // Algerian Dinar
  if(userCurrency == "DZD") { 
    currencySymbol = "DZD"; 
    currencyIsBefore = true;
  }
  // Estonian Kroon - not found in www.xe.com
  if(userCurrency == "EEK") { 
    currencySymbol = "EEK"; 
    currencyIsBefore = true;
  }
  // Egyptian Pound
  if(userCurrency == "EGP") { 
    currencySymbol = "£"; 
    currencyIsBefore = true;
  }
  // Eritrea Nakfa
  if(userCurrency == "ERN") { 
    currencySymbol = "ERN"; 
    currencyIsBefore = true;
  }
  // Ethiopian Birr
  if(userCurrency == "ETB") { 
    currencySymbol = "Br"; 
    currencyIsBefore = true;
  }
  // Euro
  if(userCurrency == "EUR") { 
    currencySymbol = "€"; 
    currencyIsBefore = true;
  }
  // Fiji Dollar
  if(userCurrency == "FJD") { 
    currencySymbol = "$"; 
    currencyIsBefore = true;
  }
  // Falkland Islands Pound
  if(userCurrency == "FKP") { 
    currencySymbol = "£"; 
    currencyIsBefore = true;
  }
  // British Pound
  if(userCurrency == "GBP") { 
    currencySymbol = "£"; 
    currencyIsBefore = true;
  }
  // Georgia Lari
  if(userCurrency == "GEL") { 
    currencySymbol = "GEL"; 
    currencyIsBefore = true;
  }
  // Ghanian Cedi
  if(userCurrency == "GHS") { 
    currencySymbol = "GH¢"; 
    currencyIsBefore = true;
  }
  // Gibraltar Pound
  if(userCurrency == "GIP") { 
    currencySymbol = "£"; 
    currencyIsBefore = true;
  }
  // Gambian Dalasi
  if(userCurrency == "GMD") { 
    currencySymbol = "GMD"; 
    currencyIsBefore = true;
  }
  // Guinea Franc
  if(userCurrency == "GNF") { 
    currencySymbol = "GNF"; 
    currencyIsBefore = true;
  }
  // Guatemala Quetzal
  if(userCurrency == "GTQ") { 
    currencySymbol = "Q"; 
    currencyIsBefore = true;
  }
  // Guyana Dollar
  if(userCurrency == "GYD") { 
    currencySymbol = "$"; 
    currencyIsBefore = true;
  }
  // Hong Kong Dollar
  if(userCurrency == "HKD") { 
    currencySymbol = "HK$"; 
    currencyIsBefore = true;
  }
  // Honduras Lempira
  if(userCurrency == "HNL") { 
    currencySymbol = "L"; 
    currencyIsBefore = true;
  }
  // Croatian Kuna
  if(userCurrency == "HRK") { 
    currencySymbol = "kn"; 
    currencyIsBefore = true;
  }
  // Haiti Gourde
  if(userCurrency == "HTG") { 
    currencySymbol = "G"; 
    currencyIsBefore = true;
  }
  // Hungarian Forint
  if(userCurrency == "HUF") { 
    currencySymbol = "Ft"; 
    currencyIsBefore = true;
  }
  // Indonesian Rupiah
  if(userCurrency == "IDR") { 
    currencySymbol = "Rp"; 
    currencyIsBefore = true;
  }
  // Israeli Shekel
  if(userCurrency == "ILS") { 
    currencySymbol = "₪"; 
    currencyIsBefore = true;
  }
  // Indian Rupee
  if(userCurrency == "INR") { 
    currencySymbol = "₹"; 
    currencyIsBefore = true;
  }
  // Iraqi Dinar
  if(userCurrency == "IQD") { 
    currencySymbol = "د.ع"; 
    currencyIsBefore = false;
  }
  // Iranian Rial
  if(userCurrency == "IRR") { 
    currencySymbol = "﷼"; 
    currencyIsBefore = false;
  }
  // Iceland Krona
  if(userCurrency == "ISK") { 
    currencySymbol = "kr"; 
    currencyIsBefore = true;
  }
  // Jamaican Dollar
  if(userCurrency == "JMD") { 
    currencySymbol = "J$"; 
    currencyIsBefore = true;
  }
  // Jordanian Dinar
  if(userCurrency == "JOD") { 
    currencySymbol = "JOD"; 
    currencyIsBefore = true;
  }
  // Japanese Yen
  if(userCurrency == "JPY") { 
    currencySymbol = "¥"; 
    currencyIsBefore = true;
  }
  // Kenyan Shilling
  if(userCurrency == "KES") { 
    currencySymbol = "KSh"; 
    currencyIsBefore = true;
  }
  // Kyrgyzstan Som
  if(userCurrency == "KGS") { 
    currencySymbol = "лв"; 
    currencyIsBefore = true;
  }
  // Cambodia Riel
  if(userCurrency == "KHR") { 
    currencySymbol = "៛"; 
    currencyIsBefore = true;
  }
  // Comoros Franc
  if(userCurrency == "KMF") { 
    currencySymbol = "KMF"; 
    currencyIsBefore = true;
  }
  // North Korean Won
  if(userCurrency == "KPW") { 
    currencySymbol = "₩"; 
    currencyIsBefore = true;
  }
  // Korean Won
  if(userCurrency == "KRW") { 
    currencySymbol = "₩"; 
    currencyIsBefore = true;
  }
  // Kuwaiti Dinar
  if(userCurrency == "KWD") { 
    currencySymbol = "ك"; 
    currencyIsBefore = false;
  }
  // Cayman Islands Dollar
  if(userCurrency == "KYD") { 
    currencySymbol = "$"; 
    currencyIsBefore = true;
  }
  // Kazakhstan Tenge
  if(userCurrency == "KZT") { 
    currencySymbol = "KZT"; 
    currencyIsBefore = true;
  }
  // Lao Kip
  if(userCurrency == "LAK") { 
    currencySymbol = "₭"; 
    currencyIsBefore = true;
  }
  // Lebanese Pound
  if(userCurrency == "LBP") { 
    currencySymbol = "ل.ل"; 
    currencyIsBefore = false;
  }
  // Sri Lanka Rupee
  if(userCurrency == "LKR") { 
    currencySymbol = "₨"; 
    currencyIsBefore = true;
  }
  // Liberian Dollar
  if(userCurrency == "LRD") { 
    currencySymbol = "$"; 
    currencyIsBefore = true;
  }
  // Lesotho Loti
  if(userCurrency == "LSL") { 
    currencySymbol = "LSL"; 
    currencyIsBefore = true;
  }
  // Libyan Dinar
  if(userCurrency == "LYD") { 
    currencySymbol = "LD"; 
    currencyIsBefore = true;
  }
  // Moroccan Dirham
  if(userCurrency == "MAD") { 
    currencySymbol = "MAD"; 
    currencyIsBefore = true;
  }
  // Moldovan Leu
  if(userCurrency == "MDL") { 
    currencySymbol = "MDL"; 
    currencyIsBefore = true;
  }
  // Malagasy Ariary
  if(userCurrency == "MGA") { 
    currencySymbol = "Ar"; 
    currencyIsBefore = true;
  }
  // Macedonian Denar
  if(userCurrency == "MKD") { 
    currencySymbol = "ден"; 
    currencyIsBefore = true;
  }
  // Myanmar Kyat
  if(userCurrency == "MMK") { 
    currencySymbol = "K"; 
    currencyIsBefore = true;
  }
  // Mongolian Tugrik
  if(userCurrency == "MNT") { 
    currencySymbol = "₮"; 
    currencyIsBefore = true;
  }
  // Macau Pataca
  if(userCurrency == "MOP") { 
    currencySymbol = "MOP$"; 
    currencyIsBefore = true;
  }
  // Mauritania Ougulya
  if(userCurrency == "MRO") { 
    currencySymbol = "MRO"; 
    currencyIsBefore = true;
  }
  // Mauritius Rupee - TODO: pickup here
  if(userCurrency == "MUR") { 
    currencySymbol = "MUR"; 
    currencyIsBefore = true;
  }
  // Maldives Rufiyaa
  if(userCurrency == "MVR") { 
    currencySymbol = "MVR"; 
    currencyIsBefore = true;
  }
  // Malawi Kwacha
  if(userCurrency == "MWK") { 
    currencySymbol = "MWK"; 
    currencyIsBefore = true;
  }
  // Mexican Peso
  if(userCurrency == "MXN") { 
    currencySymbol = "MXN"; 
    currencyIsBefore = true;
  }
  // Mexican Unidad de Inversion (UDI)
  if(userCurrency == "MXV") { 
    currencySymbol = "MXV"; 
    currencyIsBefore = true;
  }
  // Malaysian Ringgit
  if(userCurrency == "MYR") { 
    currencySymbol = "MYR"; 
    currencyIsBefore = true;
  }
  // Mozambique New Metical
  if(userCurrency == "MZN") { 
    currencySymbol = "MZN"; 
    currencyIsBefore = true;
  }
  // Namibian Dollar
  if(userCurrency == "NAD") { 
    currencySymbol = "NAD"; 
    currencyIsBefore = true;
  }
  // Nigerian Naira
  if(userCurrency == "NGN") { 
    currencySymbol = "NGN"; 
    currencyIsBefore = true;
  }
  // Nicaragua Cordoba
  if(userCurrency == "NIO") { 
    currencySymbol = "NIO"; 
    currencyIsBefore = true;
  }
  // Norwegian Krone
  if(userCurrency == "NOK") { 
    currencySymbol = "NOK"; 
    currencyIsBefore = true;
  }
  // Nepalese Rupee
  if(userCurrency == "NPR") { 
    currencySymbol = "NPR"; 
    currencyIsBefore = true;
  }
  // New Zealand Dollar
  if(userCurrency == "NZD") { 
    currencySymbol = "NZD"; 
    currencyIsBefore = true;
  }
  // Omani Rial
  if(userCurrency == "OMR") { 
    currencySymbol = "OMR"; 
    currencyIsBefore = true;
  }
  // Panama Balboa
  if(userCurrency == "PAB") { 
    currencySymbol = "PAB"; 
    currencyIsBefore = true;
  }
  // Peruvian Nuevo Sol
  if(userCurrency == "PEN") { 
    currencySymbol = "PEN"; 
    currencyIsBefore = true;
  }
  // Papua New Guinea Kina
  if(userCurrency == "PGK") { 
    currencySymbol = "PGK"; 
    currencyIsBefore = true;
  }
  // Philippine Peso
  if(userCurrency == "PHP") { 
    currencySymbol = "PHP"; 
    currencyIsBefore = true;
  }
  // Pakistani Rupee
  if(userCurrency == "PKR") { 
    currencySymbol = "PKR"; 
    currencyIsBefore = true;
  }
  // Polish Zloty
  if(userCurrency == "PLN") { 
    currencySymbol = "PLN"; 
    currencyIsBefore = true;
  }
  // Paraguayan Guarani
  if(userCurrency == "PYG") { 
    currencySymbol = "PYG"; 
    currencyIsBefore = true;
  }
  // Qatar Rial
  if(userCurrency == "QAR") { 
    currencySymbol = "QAR"; 
    currencyIsBefore = true;
  }
  // Romanian Leu (New)
  if(userCurrency == "RON") { 
    currencySymbol = "RON"; 
    currencyIsBefore = true;
  }
  // Serbian Dinar
  if(userCurrency == "RSD") { 
    currencySymbol = "RSD"; 
    currencyIsBefore = true;
  }
  // Russian Rouble
  if(userCurrency == "RUB") { 
    currencySymbol = "RUB"; 
    currencyIsBefore = true;
  }
  // Rwanda Franc
  if(userCurrency == "RWF") { 
    currencySymbol = "RWF"; 
    currencyIsBefore = true;
  }
  // Saudi Arabian Riyal
  if(userCurrency == "SAR") { 
    currencySymbol = "SAR"; 
    currencyIsBefore = true;
  }
  // Solomon Islands Dollar
  if(userCurrency == "SBD") { 
    currencySymbol = "SBD"; 
    currencyIsBefore = true;
  }
  // Seychelles Rupee
  if(userCurrency == "SCR") { 
    currencySymbol = "SCR"; 
    currencyIsBefore = true;
  }
  // Sudanese Pound
  if(userCurrency == "SDG") { 
    currencySymbol = "SDG"; 
    currencyIsBefore = true;
  }
  // Swedish Krona
  if(userCurrency == "SEK") { 
    currencySymbol = "SEK"; 
    currencyIsBefore = true;
  }
  // Singapore Dollar
  if(userCurrency == "SGD") { 
    currencySymbol = "SGD"; 
    currencyIsBefore = true;
  }
  // St Helena Pound
  if(userCurrency == "SHP") { 
    currencySymbol = "SHP"; 
    currencyIsBefore = true;
  }
  // Sierra Leone Leone
  if(userCurrency == "SLL") { 
    currencySymbol = "SLL"; 
    currencyIsBefore = true;
  }
  // Somali Shilling
  if(userCurrency == "SOS") { 
    currencySymbol = "SOS"; 
    currencyIsBefore = true;
  }
  // Surinam Dollar
  if(userCurrency == "SRD") { 
    currencySymbol = "SRD"; 
    currencyIsBefore = true;
  }
  // South Sudan Pound
  if(userCurrency == "SSP") { 
    currencySymbol = "SSP"; 
    currencyIsBefore = true;
  }
  // Sao Tome Dobra
  if(userCurrency == "STD") { 
    currencySymbol = "STD"; 
    currencyIsBefore = true;
  }
  // Syrian Pound
  if(userCurrency == "SYP") { 
    currencySymbol = "SYP"; 
    currencyIsBefore = true;
  }
  // Swaziland Lilageni
  if(userCurrency == "SZL") { 
    currencySymbol = "SZL"; 
    currencyIsBefore = true;
  }
  // Thai Baht
  if(userCurrency == "THB") { 
    currencySymbol = "THB"; 
    currencyIsBefore = true;
  }
  // Tajik Somoni
  if(userCurrency == "TJS") { 
    currencySymbol = "TJS"; 
    currencyIsBefore = true;
  }
  // Turkmenistan New Manat
  if(userCurrency == "TMT") { 
    currencySymbol = "TMT"; 
    currencyIsBefore = true;
  }
  // Tunisian Dinar
  if(userCurrency == "TND") { 
    currencySymbol = "TND"; 
    currencyIsBefore = true;
  }
  // Tonga Pa'anga
  if(userCurrency == "TOP") { 
    currencySymbol = "TOP"; 
    currencyIsBefore = true;
  }
  // Turkish Lira (New)
  if(userCurrency == "TRY") { 
    currencySymbol = "TRY"; 
    currencyIsBefore = true;
  }
  // Trinidad&Tobago Dollar
  if(userCurrency == "TTD") { 
    currencySymbol = "TTD"; 
    currencyIsBefore = true;
  }
  // Taiwan Dollar
  if(userCurrency == "TWD") { 
    currencySymbol = "TWD"; 
    currencyIsBefore = true;
  }
  // Tanzanian Shilling
  if(userCurrency == "TZS") { 
    currencySymbol = "TZS"; 
    currencyIsBefore = true;
  }
  // Ukraine Hryvnia
  if(userCurrency == "UAH") { 
    currencySymbol = "UAH"; 
    currencyIsBefore = true;
  }
  // Ugandan Shilling
  if(userCurrency == "UGX") { 
    currencySymbol = "UGX"; 
    currencyIsBefore = true;
  }
  // U.S. Dollar
  if(userCurrency == "USD") { 
    currencySymbol = "USD"; 
    currencyIsBefore = true;
  }
  // Uruguayan New Peso
  if(userCurrency == "UYU") { 
    currencySymbol = "UYU"; 
    currencyIsBefore = true;
  }
  // Uzbekistan Sum
  if(userCurrency == "UZS") { 
    currencySymbol = "UZS"; 
    currencyIsBefore = true;
  }
  // Venezuelan Bolivar Fuerte
  if(userCurrency == "VEF") { 
    currencySymbol = "VEF"; 
    currencyIsBefore = true;
  }
  // Vietnam Dong
  if(userCurrency == "VND") { 
    currencySymbol = "VND"; 
    currencyIsBefore = true;
  }
  // Vanuatu Vatu
  if(userCurrency == "VUV") { 
    currencySymbol = "VUV"; 
    currencyIsBefore = true;
  }
  // Samoa Tala
  if(userCurrency == "WST") { 
    currencySymbol = "WST"; 
    currencyIsBefore = true;
  }
  // CFA Franc (BEAC)
  if(userCurrency == "XAF") { 
    currencySymbol = "XAF"; 
    currencyIsBefore = true;
  }
  // East Caribbean Dollar
  if(userCurrency == "XCD") { 
    currencySymbol = "XCD"; 
    currencyIsBefore = true;
  }
  // CFA Franc (BCEAO)
  if(userCurrency == "XOF") { 
    currencySymbol = "XOF"; 
    currencyIsBefore = true;
  }
  // Pacific Franc
  if(userCurrency == "XPF") { 
    currencySymbol = "XPF"; 
    currencyIsBefore = true;
  }
  // Yemen Riyal
  if(userCurrency == "YER") { 
    currencySymbol = "YER"; 
    currencyIsBefore = true;
  }
  // South African Rand
  if(userCurrency == "ZAR") { 
    currencySymbol = "ZAR"; 
    currencyIsBefore = true;
  }
  // Zambian Kwacha (New)
  if(userCurrency == "ZMK") { 
    currencySymbol = "ZMK"; 
    currencyIsBefore = true;
  }
  // Zimbabwe Dollar
  if(userCurrency == "ZWL") { 
    currencySymbol = "ZWL"; 
    currencyIsBefore = true;
  }
}

module.exports = {
  userDetails: userDetails,
  getUserInfoDetails: getUserInfoDetails,
  userCurrency: userCurrency,
  currencySymbol: currencySymbol,
  currencyIsBefore: currencyIsBefore,
  handleCurrencyFormat: handleCurrencyFormat
};
