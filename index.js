const selectCurrencies1 = document.querySelector('.currencies1')
const selectCurrencies2 = document.querySelector('.currencies2')
const selectSection = document.querySelector('.selects')
const btnGet = document.querySelector('.btn')
const res = document.querySelector('.currency')
const res2 = document.querySelector('.currency2')
const input = document.querySelector('.amount')
const icon = document.querySelector('.icon')
const results = document.querySelector('.results')
const yesterdayMsg = document.querySelector('.yesterday')

let currFrom = ''
let currTo = ''
const currList = {
  ada: 'Cardano',
  aed: 'United Arab Emirates Dirham',
  afn: 'Afghan afghani',
  algo: 'Algorand',
  all: 'Albanian lek',
  amd: 'Armenian dram',
  ang: 'Netherlands Antillean Guilder',
  aoa: 'Angolan kwanza',
  ars: 'Argentine peso',
  atom: 'Atomic Coin',
  aud: 'Australian dollar',
  avax: 'Avalanche',
  awg: 'Aruban florin',
  azn: 'Azerbaijani manat',
  bam: 'Bosnia-Herzegovina Convertible Mark',
  bbd: 'Bajan dollar',
  bch: 'Bitcoin Cash',
  bdt: 'Bangladeshi taka',
  bgn: 'Bulgarian lev',
  bhd: 'Bahraini dinar',
  bif: 'Burundian Franc',
  bmd: 'Bermudan dollar',
  bnb: 'Binance Coin',
  bnd: 'Brunei dollar',
  bob: 'Bolivian boliviano',
  brl: 'Brazilian real',
  bsd: 'Bahamian dollar',
  btc: 'Bitcoin',
  btn: 'Bhutan currency',
  busd: 'Binance USD',
  bwp: 'Botswanan Pula',
  byn: 'New Belarusian Ruble',
  byr: 'Belarusian Ruble',
  bzd: 'Belize dollar',
  cad: 'Canadian dollar',
  cdf: 'Congolese franc',
  chf: 'Swiss franc',
  chz: 'Chiliz',
  clf: 'Chilean Unit of Account (UF)',
  clp: 'Chilean peso',
  cny: 'Chinese Yuan',
  cop: 'Colombian peso',
  crc: 'Costa Rican Colón',
  cro: 'Crypto.com Chain Token',
  cuc: 'Cuban peso',
  cup: 'Cuban Peso',
  cve: 'Cape Verdean escudo',
  czk: 'Czech koruna',
  dai: 'Dai',
  djf: 'Djiboutian franc',
  dkk: 'Danish krone',
  doge: 'Dogecoin',
  dop: 'Dominican peso',
  dot: 'Dotcoin',
  dzd: 'Algerian dinar',
  egld: 'Elrond',
  egp: 'Egyptian pound',
  enj: 'Enjin Coin',
  ern: 'Eritrean nakfa',
  etb: 'Ethiopian birr',
  etc: 'Ethereum Classic',
  eth: 'Ether',
  eur: 'Euro',
  fil: 'FileCoin',
  fjd: 'Fijian dollar',
  fkp: 'Falkland Islands pound',
  ftt: 'FarmaTrust',
  gbp: 'Pound sterling',
  gel: 'Georgian lari',
  ggp: 'GGPro',
  ghs: 'Ghanaian cedi',
  gip: 'Gibraltar pound',
  gmd: 'Gambian dalasi',
  gnf: 'Guinean franc',
  grt: 'Golden Ratio Token',
  gtq: 'Guatemalan quetzal',
  gyd: 'Guyanaese Dollar',
  hkd: 'Hong Kong dollar',
  hnl: 'Honduran lempira',
  hrk: 'Croatian kuna',
  htg: 'Haitian gourde',
  huf: 'Hungarian forint',
  icp: 'Internet Computer',
  idr: 'Indonesian rupiah',
  ils: 'Israeli New Shekel',
  imp: 'CoinIMP',
  inj: 'Injective',
  inr: 'Indian rupee',
  iqd: 'Iraqi dinar',
  irr: 'Iranian rial',
  isk: 'Icelandic króna',
  jep: 'Jersey Pound',
  jmd: 'Jamaican dollar',
  jod: 'Jordanian dinar',
  jpy: 'Japanese yen',
  kes: 'Kenyan shilling',
  kgs: 'Kyrgystani Som',
  khr: 'Cambodian riel',
  kmf: 'Comorian franc',
  kpw: 'North Korean won',
  krw: 'South Korean won',
  ksm: 'Kusama',
  kwd: 'Kuwaiti dinar',
  kyd: 'Cayman Islands dollar',
  kzt: 'Kazakhstani tenge',
  lak: 'Laotian Kip',
  lbp: 'Lebanese pound',
  link: 'ChainLink',
  lkr: 'Sri Lankan rupee',
  lrd: 'Liberian dollar',
  lsl: 'Lesotho loti',
  ltc: 'Litecoin',
  ltl: 'Lithuanian litas',
  luna: 'Luna Coin',
  lvl: 'Latvian lats',
  lyd: 'Libyan dinar',
  mad: 'Moroccan dirham',
  matic: 'Polygon',
  mdl: 'Moldovan leu',
  mga: 'Malagasy ariary',
  mkd: 'Macedonian denar',
  mmk: 'Myanmar Kyat',
  mnt: 'Mongolian tugrik',
  mop: 'Macanese pataca',
  mro: 'Mauritanian ouguiya',
  mur: 'Mauritian rupee',
  mvr: 'Maldivian rufiyaa',
  mwk: 'Malawian kwacha',
  mxn: 'Mexican peso',
  myr: 'Malaysian ringgit',
  mzn: 'Mozambican Metical',
  nad: 'Namibian dollar',
  ngn: 'Nigerian naira',
  nio: 'Nicaraguan córdoba',
  nok: 'Norwegian krone',
  npr: 'Nepalese rupee',
  nzd: 'New Zealand dollar',
  omr: 'Omani rial',
  one: 'Menlo One',
  pab: 'Panamanian balboa',
  pen: 'Sol',
  pgk: 'Papua New Guinean kina',
  php: 'Philippine peso',
  pkr: 'Pakistani rupee',
  pln: 'Poland złoty',
  pyg: 'Paraguayan guarani',
  qar: 'Qatari Rial',
  ron: 'Romanian leu',
  rsd: 'Serbian dinar',
  rub: 'Russian ruble',
  rwf: 'Rwandan Franc',
  sar: 'Saudi riyal',
  sbd: 'Solomon Islands dollar',
  scr: 'Seychellois rupee',
  sdg: 'Sudanese pound',
  sek: 'Swedish krona',
  sgd: 'Singapore dollar',
  shib: 'Shiba Inu',
  shp: 'Saint Helena pound',
  sll: 'Sierra Leonean leone',
  sol: 'Sola',
  sos: 'Somali shilling',
  srd: 'Surinamese dollar',
  std: 'São Tomé and Príncipe Dobra (pre-2018)',
  svc: 'Salvadoran Colón',
  syp: 'Syrian pound',
  szl: 'Swazi lilangeni',
  thb: 'Thai baht',
  theta: 'Theta',
  tjs: 'Tajikistani somoni',
  tmt: 'Turkmenistani manat',
  tnd: 'Tunisian dinar',
  top: 'Tongan Paʻanga',
  trx: 'TRON',
  try: 'Turkish lira',
  ttd: 'Trinidad & Tobago Dollar',
  twd: 'New Taiwan dollar',
  tzs: 'Tanzanian shilling',
  uah: 'Ukrainian hryvnia',
  ugx: 'Ugandan shilling',
  uni: 'Universe',
  usd: 'United States dollar',
  usdc: 'USD Coin',
  usdt: 'Tether',
  uyu: 'Uruguayan peso',
  uzs: 'Uzbekistani som',
  vef: 'Sovereign Bolivar',
  vet: 'Vechain',
  vnd: 'Vietnamese dong',
  vuv: 'Vanuatu vatu',
  wbtc: 'Wrapped Bitcoin',
  wst: 'Samoan tala',
  xaf: 'Central African CFA franc',
  xag: 'Silver Ounce',
  xau: 'XauCoin',
  xcd: 'East Caribbean dollar',
  xdr: 'Special Drawing Rights',
  xlm: 'Stellar',
  xmr: 'Monero',
  xof: 'West African CFA franc',
  xpf: 'CFP franc',
  xrp: 'XRP',
  yer: 'Yemeni rial',
  zar: 'South African rand',
  zmk: 'Zambian kwacha',
  zmw: 'Zambian Kwacha',
  zwl: 'Zimbabwean Dollar',
}
let currShorts = Object.keys(currList)
let currFullNames = Object.values(currList)
const today = new Date()
let yesterday = new Date(today)
yesterday.setDate(yesterday.getDate() - 1)
yesterday = yesterday.toISOString().slice(0, 10)

currFullNames.forEach((curr) => {
  let option = document.createElement('option')
  option.innerHTML = curr
  selectCurrencies1.insertAdjacentElement('beforeend', option)
})

currFullNames.forEach((curr) => {
  let option = document.createElement('option')
  option.innerHTML = curr
  selectCurrencies2.insertAdjacentElement('beforeend', option)
})

selectSection.addEventListener('change', function (e) {
  if (e.target.classList.contains('currencies1')) {
    currFrom = currFullNames.indexOf(e.target.value)
    console.log(currShorts[currFrom])
  }
  if (e.target.classList.contains('currencies2')) {
    currTo = currFullNames.indexOf(e.target.value)
    console.log(currShorts[currTo])
  }
})

btnGet.addEventListener('click', function (e) {
  fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currShorts[currFrom]}/${currShorts[currTo]}.json`
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      res.textContent = (input.value * data[currShorts[currTo]]).toFixed(2)
      res2.textContent = `1 ${currShorts[currFrom]} = ${
        data[currShorts[currTo]]
      } ${currShorts[currTo]}`
    })
  results.classList.remove('hidden')

  fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${yesterday}/currencies/${currShorts[currFrom]}/${currShorts[currTo]}.json`
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      let arrow = ''
      if (
        +res2.textContent.split('').slice(8, -4).join('') -
          data[currShorts[currTo]] >
        0
      ) {
        res2.classList.add('green')
        res2.classList.remove('red')
      } else {
        res2.classList.add('red')
        res2.classList.remove('green')
      }

      console.log(
        `Yesterday 1 ${currFullNames[currFrom]} costed ${
          data[currShorts[currTo]]
        } ${currFullNames[currTo]}`
      )
    })
})

icon.addEventListener('click', function (e) {
  let selected1 = selectCurrencies1.value
  selectCurrencies1.value = selectCurrencies2.value
  currFrom = currFullNames.indexOf(selectCurrencies2.value)
  selectCurrencies2.value = selected1
  currTo = currFullNames.indexOf(selected1)
})
