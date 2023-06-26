export interface Option {
  value: string;
  label: string;
  checked: boolean;
}

export interface Filter {
  id: string;
  name: string;
  options?: Option[];
}

export interface ModelOption {
  label: string;
  options: Option[];
}

export interface CarModels {
  id: "model";
  name: "Modelo";
  options: ModelOption[];
}

export const filters: Filter[] = [
  {
    id: "brand",
    name: "Marca",
    options: [
      { value: "Chevrolet", label: "Chevrolet", checked: false },
      { value: "Citroën", label: "Citroën", checked: false },
      { value: "Fiat", label: "Fiat", checked: false },
      { value: "Ford", label: "Ford", checked: false },
      { value: "Honda", label: "Honda", checked: false },
      { value: "Hyundai", label: "Hyundai", checked: false },
      { value: "Nissan", label: "Nissan", checked: false },
      { value: "Peugeot", label: "Peugeot", checked: false },
      { value: "Renault", label: "Renault", checked: false },
      { value: "Toyota", label: "Toyota", checked: false },
      { value: "Volkswagen", label: "Volkswagen", checked: false }
    ]
  },
  {
    id: "model",
    name: "Modelo"
  },
  {
    id: "color",
    name: "Cor",
    options: [
      { value: "azul", label: "Azul", checked: false },
      { value: "vermelho", label: "Vermelho", checked: false },
      { value: "verde", label: "Verde", checked: false },
      { value: "branco", label: "Branco", checked: false },
      { value: "preto", label: "Preto", checked: false },
      { value: "prata", label: "Prata", checked: false },
      { value: "cinza", label: "Cinza", checked: false },
      { value: "amarelo", label: "Amarelo", checked: false },
      { value: "laranja", label: "Laranja", checked: false }
    ]
  },
  {
    id: "year",
    name: "Ano",
    options: [
      { value: "2023", label: "2023", checked: false },
      { value: "2022", label: "2022", checked: false },
      { value: "2021", label: "2021", checked: false },
      { value: "2020", label: "2020", checked: false },
      { value: "2019", label: "2019", checked: false },
      { value: "2018", label: "2018", checked: false }
    ]
  },
  {
    id: "fuel",
    name: "Combustivel",
    options: [
      { value: "gasolina", label: "Gasolina", checked: false },
      { value: "diesel", label: "Diesel", checked: false },
      { value: "etanol", label: "Etanol", checked: false },
      { value: "flex", label: "Flex", checked: false }
    ]
  },
  {
    id: "km",
    name: "KM",
    options: [
      { value: "0-50000", label: "0 - 50,000", checked: false },
      { value: "50000-100000", label: "50,000 - 100,000", checked: false },
      { value: "100000-150000", label: "100,000 - 150,000", checked: false },
      { value: "150000-200000", label: "150,000 - 200,000", checked: false }
    ]
  },
  {
    id: "price",
    name: "Preço",
    options: [
      { value: "0-20000", label: "0 - 20,000", checked: false },
      { value: "20001-40000", label: "20,001 - 40,000", checked: false },
      { value: "40001-60000", label: "40,001 - 60,000", checked: false },
      { value: "60001-80000", label: "60,001 - 80,000", checked: false },
      { value: "80001-100000", label: "80,001 - 100,000", checked: false },
      { value: "100001-150000", label: "100,001 - 150,000", checked: false }
    ]
  }
];

export const models: CarModels = {
  id: "model",
  name: "Modelo",
  options: [
    {
      label: "Fiat",
      options: [
        { value: "500e", label: "500e", checked: false },
        { value: "Cronos", label: "Cronos", checked: false },
        { value: "Argo", label: "Argo", checked: false },
        { value: "Doblo", label: "Doblo", checked: false },
        { value: "Fiorino", label: "Fiorino", checked: false },
        { value: "Grand Siena", label: "Grand Siena", checked: false },
        { value: "Palio", label: "Palio", checked: false },
        { value: "Strada", label: "Strada", checked: false },
        { value: "Mobi", label: "Mobi", checked: false },
        { value: "Pulse", label: "Pulse", checked: false },
        { value: "Toro", label: "Toro", checked: false },
        { value: "Uno", label: "Uno", checked: false }
      ]
    },
    {
      label: "Ford",
      options: [
        { value: "Bronco", label: "Bronco", checked: false },
        { value: "EcoSport", label: "EcoSport", checked: false },
        { value: "Edge", label: "Edge", checked: false },
        { value: "Fiesta", label: "Fiesta", checked: false },
        { value: "Focus", label: "Focus", checked: false },
        { value: "Fusion", label: "Fusion", checked: false },
        { value: "Ka", label: "Ka", checked: false },
        { value: "Mustang", label: "Mustang", checked: false },
        { value: "Territory", label: "Territory", checked: false },
        { value: "Ranger", label: "Ranger", checked: false },
        { value: "Maverick", label: "Maverick", checked: false }
      ]
    },
    {
      label: "Renault",
      options: [
        { value: "Zoe", label: "Zoe", checked: false },
        { value: "Stepway", label: "Stepway", checked: false },
        { value: "Sandero", label: "Sandero", checked: false },
        { value: "Kwid", label: "Kwid", checked: false },
        { value: "Oroch", label: "Oroch", checked: false },
        { value: "Duster", label: "Duster", checked: false },
        { value: "Logan", label: "Logan", checked: false },
        { value: "Captur", label: "Captur", checked: false }
      ]
    },
    {
      label: "Chevrolet",
      options: [
        { value: "Bolt", label: "Bolt", checked: false },
        { value: "Camaro", label: "Camaro", checked: false },
        { value: "Cobalt", label: "Cobalt", checked: false },
        { value: "Cruze", label: "Cruze", checked: false }
      ]
    },
    {
      label: "Peugeot",
      options: [
        { value: "208", label: "208", checked: false },
        { value: "2008", label: "2008", checked: false },
        { value: "308", label: "308", checked: false },
        { value: "3008", label: "3008", checked: false },
        { value: "408", label: "408", checked: false },
        { value: "5008", label: "5008", checked: false },
        { value: "Partner", label: "Partner", checked: false }
      ]
    },
    {
      label: "Honda",
      options: [
        { value: "Civic", label: "Civic", checked: false },
        { value: "HR-V", label: "HR-V", checked: false },
        { value: "Fit", label: "Fit", checked: false },
        { value: "CR-V", label: "CR-V", checked: false },
        { value: "WR-V", label: "WR-V", checked: false },
        { value: "City", label: "City", checked: false },
        { value: "Accord", label: "Accord", checked: false }
      ]
    },
    {
      label: "Hyundai",
      options: [
        { value: "HB20", label: "HB20", checked: false },
        { value: "Creta", label: "Creta", checked: false },
        { value: "Tucson", label: "Tucson", checked: false },
        { value: "Santa Fe", label: "Santa Fe", checked: false },
        { value: "Ix35", label: "Ix35", checked: false },
        { value: "Azera", label: "Azera", checked: false }
      ]
    },
    {
      label: "Nissan",
      options: [
        { value: "March", label: "March", checked: false },
        { value: "Versa", label: "Versa", checked: false },
        { value: "Sentra", label: "Sentra", checked: false },
        { value: "Kicks", label: "Kicks", checked: false },
        { value: "Leaf", label: "Leaf", checked: false },
        { value: "Gt-r", label: "Gt-r", checked: false }
      ]
    },
    {
      label: "Toyota",
      options: [
        { value: "Camry", label: "Camry", checked: false },
        { value: "Corolla", label: "Corolla", checked: false },
        { value: "Etios", label: "Etios", checked: false },
        { value: "Hilux", label: "Hilux", checked: false },
        { value: "Rav4", label: "Rav4", checked: false },
        { value: "Yaris", label: "Yaris", checked: false },
        { value: "Prius", label: "Prius", checked: false }
      ]
    },
    {
      label: "Volkswagen",
      options: [
        { value: "Fox", label: "Fox", checked: false },
        { value: "Gol", label: "Gol", checked: false },
        { value: "Golf", label: "Golf", checked: false },
        { value: "Jetta", label: "Jetta", checked: false },
        { value: "Nivus", label: "Nivus", checked: false },
        { value: "Passat", label: "Passat", checked: false },
        { value: "Polo", label: "Polo", checked: false },
        { value: "Saveiro", label: "Saveiro", checked: false },
        { value: "Taos", label: "Taos", checked: false },
        { value: "Voyage", label: "Voyage", checked: false },
        { value: "T-Cross", label: "T-Cross", checked: false },
        { value: "Tiguan", label: "Tiguan", checked: false },
        { value: "Up", label: "Up", checked: false },
        { value: "Virtus", label: "Virtus", checked: false },
        { value: "Voyage", label: "Voyage", checked: false }
      ]
    },
    {
      label: "Citroën",
      options: [
        { value: "Aircross", label: "Aircross", checked: false },
        { value: "Berlingo", label: "Berlingo", checked: false },
        { value: "C3", label: "C3", checked: false },
        { value: "C4", label: "C4", checked: false },
        { value: "Celerio", label: "Celerio", checked: false },
        { value: "Baleno", label: "Baleno", checked: false }
      ]
    }
  ]
};
