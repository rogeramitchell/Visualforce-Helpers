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
    currencySymbol = "AED"; 
    currencyIsBefore = true;
  }
  // Afghanistan Afghani (New)
  if(userCurrency == "AFN") { 
    currencySymbol = "AFN"; 
    currencyIsBefore = true;
  }
  // Albanian Lek
  if(userCurrency == "ALL") { 
    currencySymbol = "ALL"; 
    currencyIsBefore = true;
  }
  // Armenian Dram
  if(userCurrency == "AMD") { 
    currencySymbol = "AMD"; 
    currencyIsBefore = true;
  }
  // Neth Antilles Guilder
  if(userCurrency == "ANG") { 
    currencySymbol = "ANG"; 
    currencyIsBefore = true;
  }
  // Angola Kwanza
  if(userCurrency == "AOA") { 
    currencySymbol = "AOA"; 
    currencyIsBefore = true;
  }
  // Argentine Peso
  if(userCurrency == "ARS") { 
    currencySymbol = "ARS"; 
    currencyIsBefore = true;
  }
  // Australian Dollar
  if(userCurrency == "AUD") { 
    currencySymbol = "AUD"; 
    currencyIsBefore = true;
  }
  // Aruba Florin
  if(userCurrency == "AWG") { 
    currencySymbol = "AWG"; 
    currencyIsBefore = true;
  }
  // Azerbaijanian New Manat
  if(userCurrency == "AZN") { 
    currencySymbol = "AZN"; 
    currencyIsBefore = true;
  }
  // Convertible Marks
  if(userCurrency == "BAM") { 
    currencySymbol = "BAM"; 
    currencyIsBefore = true;
  }
  // Barbados Dollar
  if(userCurrency == "BBD") { 
    currencySymbol = "BBD"; 
    currencyIsBefore = true;
  }
  // Bangladesh Taka
  if(userCurrency == "BDT") { 
    currencySymbol = "BDT"; 
    currencyIsBefore = true;
  }
  // Bulgaria Lev
  if(userCurrency == "BGN") { 
    currencySymbol = "BGN"; 
    currencyIsBefore = true;
  }
  // Bahraini Dinar
  if(userCurrency == "BHD") { 
    currencySymbol = "BHD"; 
    currencyIsBefore = true;
  }
  // Burundi Franc
  if(userCurrency == "BIF") { 
    currencySymbol = "BIF"; 
    currencyIsBefore = true;
  }
  // Bermuda Dollar
  if(userCurrency == "BMD") { 
    currencySymbol = "BMD"; 
    currencyIsBefore = true;
  }
  // Brunei Dollar
  if(userCurrency == "BND") { 
    currencySymbol = "BND"; 
    currencyIsBefore = true;
  }
  // Bolivian Boliviano
  if(userCurrency == "BOB") { 
    currencySymbol = "BOB"; 
    currencyIsBefore = true;
  }
  // Bolivia Mvdol
  if(userCurrency == "BOV") { 
    currencySymbol = "BOV"; 
    currencyIsBefore = true;
  }
  // Brazilian Cruzeiro (old)
  if(userCurrency == "BRB") { 
    currencySymbol = "BRB"; 
    currencyIsBefore = true;
  }
  // Brazilian Real
  if(userCurrency == "BRL") { 
    currencySymbol = "BRL"; 
    currencyIsBefore = true;
  }
  // Bahamian Dollar
  if(userCurrency == "BSD") { 
    currencySymbol = "BSD"; 
    currencyIsBefore = true;
  }
  // Bhutan Ngultrum
  if(userCurrency == "BTN") { 
    currencySymbol = "BTN"; 
    currencyIsBefore = true;
  }
  // Botswana Pula
  if(userCurrency == "BWP") { 
    currencySymbol = "BWP"; 
    currencyIsBefore = true;
  }
  // Belarussian Ruble
  if(userCurrency == "BYR") { 
    currencySymbol = "BYR"; 
    currencyIsBefore = true;
  }
  // Belize Dollar
  if(userCurrency == "BZD") { 
    currencySymbol = "BZD"; 
    currencyIsBefore = true;
  }
  // Canadian Dollar
  if(userCurrency == "CAD") { 
    currencySymbol = "CAD"; 
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
  // Unidades de fomento
  if(userCurrency == "CLF") { 
    currencySymbol = "CLF"; 
    currencyIsBefore = true;
  }
  // Chilean Peso
  if(userCurrency == "CLP") { 
    currencySymbol = "CLP"; 
    currencyIsBefore = true;
  }
  // Chinese Yuan
  if(userCurrency == "CNY") { 
    currencySymbol = "CNY"; 
    currencyIsBefore = true;
  }
  // Colombian Peso
  if(userCurrency == "COP") { 
    currencySymbol = "COP"; 
    currencyIsBefore = true;
  }
  // Costa Rica Colon
  if(userCurrency == "CRC") { 
    currencySymbol = "CRC"; 
    currencyIsBefore = true;
  }
  // Cuban Peso
  if(userCurrency == "CUP") { 
    currencySymbol = "CUP"; 
    currencyIsBefore = true;
  }
  // Cape Verde Escudo
  if(userCurrency == "CVE") { 
    currencySymbol = "CVE"; 
    currencyIsBefore = true;
  }
  // Czech Koruna
  if(userCurrency == "CZK") { 
    currencySymbol = "CZK"; 
    currencyIsBefore = true;
  }
  // Dijibouti Franc
  if(userCurrency == "DJF") { 
    currencySymbol = "DJF"; 
    currencyIsBefore = true;
  }
  // Danish Krone
  if(userCurrency == "DKK") { 
    currencySymbol = "DKK"; 
    currencyIsBefore = true;
  }
  // Dominican Peso
  if(userCurrency == "DOP") { 
    currencySymbol = "DOP"; 
    currencyIsBefore = true;
  }
  // Algerian Dinar
  if(userCurrency == "DZD") { 
    currencySymbol = "DZD"; 
    currencyIsBefore = true;
  }
  // Estonian Kroon
  if(userCurrency == "EEK") { 
    currencySymbol = "EEK"; 
    currencyIsBefore = true;
  }
  // Egyptian Pound
  if(userCurrency == "EGP") { 
    currencySymbol = "EGP"; 
    currencyIsBefore = true;
  }
  // Eritrea Nakfa
  if(userCurrency == "ERN") { 
    currencySymbol = "ERN"; 
    currencyIsBefore = true;
  }
  // Ethiopian Birr
  if(userCurrency == "ETB") { 
    currencySymbol = "ETB"; 
    currencyIsBefore = true;
  }
  // Euro
  if(userCurrency == "EUR") { 
    currencySymbol = "EUR"; 
    currencyIsBefore = true;
  }
  // Fiji Dollar
  if(userCurrency == "FJD") { 
    currencySymbol = "FJD"; 
    currencyIsBefore = true;
  }
  // Falkland Islands Pound
  if(userCurrency == "FKP") { 
    currencySymbol = "FKP"; 
    currencyIsBefore = true;
  }
  // British Pound
  if(userCurrency == "GBP") { 
    currencySymbol = "GBP"; 
    currencyIsBefore = true;
  }
  // Georgia Lari
  if(userCurrency == "GEL") { 
    currencySymbol = "GEL"; 
    currencyIsBefore = true;
  }
  // Ghanian Cedi
  if(userCurrency == "GHS") { 
    currencySymbol = "GHS"; 
    currencyIsBefore = true;
  }
  // Gibraltar Pound
  if(userCurrency == "GIP") { 
    currencySymbol = "GIP"; 
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
    currencySymbol = "GTQ"; 
    currencyIsBefore = true;
  }
  // Guyana Dollar
  if(userCurrency == "GYD") { 
    currencySymbol = "GYD"; 
    currencyIsBefore = true;
  }
  // Hong Kong Dollar
  if(userCurrency == "HKD") { 
    currencySymbol = "HKD"; 
    currencyIsBefore = true;
  }
  // Honduras Lempira
  if(userCurrency == "HNL") { 
    currencySymbol = "HNL"; 
    currencyIsBefore = true;
  }
  // Croatian Kuna
  if(userCurrency == "HRK") { 
    currencySymbol = "HRK"; 
    currencyIsBefore = true;
  }
  // Haiti Gourde
  if(userCurrency == "HTG") { 
    currencySymbol = "HTG"; 
    currencyIsBefore = true;
  }
  // Hungarian Forint
  if(userCurrency == "HUF") { 
    currencySymbol = "HUF"; 
    currencyIsBefore = true;
  }
  // Indonesian Rupiah
  if(userCurrency == "IDR") { 
    currencySymbol = "IDR"; 
    currencyIsBefore = true;
  }
  // Israeli Shekel
  if(userCurrency == "ILS") { 
    currencySymbol = "ILS"; 
    currencyIsBefore = true;
  }
  // Indian Rupee
  if(userCurrency == "INR") { 
    currencySymbol = "INR"; 
    currencyIsBefore = true;
  }
  // Iraqi Dinar
  if(userCurrency == "IQD") { 
    currencySymbol = "IQD"; 
    currencyIsBefore = true;
  }
  // Iranian Rial
  if(userCurrency == "IRR") { 
    currencySymbol = "IRR"; 
    currencyIsBefore = true;
  }
  // Iceland Krona
  if(userCurrency == "ISK") { 
    currencySymbol = "ISK"; 
    currencyIsBefore = true;
  }
  // Jamaican Dollar
  if(userCurrency == "JMD") { 
    currencySymbol = "JMD"; 
    currencyIsBefore = true;
  }
  // Jordanian Dinar
  if(userCurrency == "JOD") { 
    currencySymbol = "JOD"; 
    currencyIsBefore = true;
  }
  // Japanese Yen
  if(userCurrency == "JPY") { 
    currencySymbol = "JPY"; 
    currencyIsBefore = true;
  }
  // Kenyan Shilling
  if(userCurrency == "KES") { 
    currencySymbol = "KES"; 
    currencyIsBefore = true;
  }
  // Kyrgyzstan Som
  if(userCurrency == "KGS") { 
    currencySymbol = "KGS"; 
    currencyIsBefore = true;
  }
  // Cambodia Riel
  if(userCurrency == "KHR") { 
    currencySymbol = "KHR"; 
    currencyIsBefore = true;
  }
  // Comoros Franc
  if(userCurrency == "KMF") { 
    currencySymbol = "KMF"; 
    currencyIsBefore = true;
  }
  // North Korean Won
  if(userCurrency == "KPW") { 
    currencySymbol = "KPW"; 
    currencyIsBefore = true;
  }
  // Korean Won
  if(userCurrency == "KRW") { 
    currencySymbol = "KRW"; 
    currencyIsBefore = true;
  }
  // Kuwaiti Dinar
  if(userCurrency == "KWD") { 
    currencySymbol = "KWD"; 
    currencyIsBefore = true;
  }
  // Cayman Islands Dollar
  if(userCurrency == "KYD") { 
    currencySymbol = "KYD"; 
    currencyIsBefore = true;
  }
  // Kazakhstan Tenge
  if(userCurrency == "KZT") { 
    currencySymbol = "KZT"; 
    currencyIsBefore = true;
  }
  // Lao Kip
  if(userCurrency == "LAK") { 
    currencySymbol = "LAK"; 
    currencyIsBefore = true;
  }
  // Lebanese Pound
  if(userCurrency == "LBP") { 
    currencySymbol = "LBP"; 
    currencyIsBefore = true;
  }
  // Sri Lanka Rupee
  if(userCurrency == "LKR") { 
    currencySymbol = "LKR"; 
    currencyIsBefore = true;
  }
  // Liberian Dollar
  if(userCurrency == "LRD") { 
    currencySymbol = "LRD"; 
    currencyIsBefore = true;
  }
  // Lesotho Loti
  if(userCurrency == "LSL") { 
    currencySymbol = "LSL"; 
    currencyIsBefore = true;
  }
  // Libyan Dinar
  if(userCurrency == "LYD") { 
    currencySymbol = "LYD"; 
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
    currencySymbol = "MGA"; 
    currencyIsBefore = true;
  }
  // Macedonian Denar
  if(userCurrency == "MKD") { 
    currencySymbol = "MKD"; 
    currencyIsBefore = true;
  }
  // Myanmar Kyat
  if(userCurrency == "MMK") { 
    currencySymbol = "MMK"; 
    currencyIsBefore = true;
  }
  // Mongolian Tugrik
  if(userCurrency == "MNT") { 
    currencySymbol = "MNT"; 
    currencyIsBefore = true;
  }
  // Macau Pataca
  if(userCurrency == "MOP") { 
    currencySymbol = "MOP"; 
    currencyIsBefore = true;
  }
  // Mauritania Ougulya
  if(userCurrency == "MRO") { 
    currencySymbol = "MRO"; 
    currencyIsBefore = true;
  }
  // Mauritius Rupee
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