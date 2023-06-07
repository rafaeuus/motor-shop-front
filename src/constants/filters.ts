export interface Option {
  value: string;
  label: string;
  checked: boolean;
}

export interface Filter {
  id: string;
  name: string;
  options: Option[];
}

export interface ModelOption {
  label: string;
  options: Option[];
}

export interface CarBrand {
  id: "model";
  name: "Modelo";
  options: ModelOption[];
}

export const filters: Filter[] = [
  {
    id: "brand",
    name: "Marca",
    options: [
      { value: "Mercedes", label: "Mercedes", checked: false },
      { value: "BMW", label: "BMW", checked: false },
      { value: "Audi", label: "Audi", checked: false },
      { value: "Volvo", label: "Volvo", checked: false },
      { value: "Fiat", label: "Fiat", checked: false },
      { value: "Ford", label: "Ford", checked: false },
      { value: "Renault", label: "Renault", checked: false },
      { value: "Chevrolet", label: "Chevrolet", checked: false },
      { value: "Peugeot", label: "Peugeot", checked: false },
      { value: "Honda", label: "Honda", checked: false },
      { value: "Hyundai", label: "Hyundai", checked: false },
      { value: "Kia", label: "Kia", checked: false },
      { value: "Nissan", label: "Nissan", checked: false },
      { value: "Toyota", label: "Toyota", checked: false },
      { value: "Volkswagen", label: "Volkswagen", checked: false },
      { value: "Mazda", label: "Mazda", checked: false },
      { value: "Mitsubishi", label: "Mitsubishi", checked: false },
      { value: "Suzuki", label: "Suzuki", checked: false },
      { value: "Ferrari", label: "Ferrari", checked: false }
    ]
  },
  {
    id: "model",
    name: "Modelo",
    options: [
      { value: "Mercedes", label: "Mercedes", checked: false },
      { value: "BMW", label: "BMW", checked: false }
    ]
  },
  {
    id: "color",
    name: "Cor",
    options: [
      { value: "azul", label: "Azul", checked: false },
      { value: "vermelho", label: "Vermelho", checked: false },
      { value: "verde", label: "Verde", checked: false }
    ]
  },
  {
    id: "year",
    name: "Ano",
    options: [
      { value: "ano1", label: "Ano1", checked: false },
      { value: "ano2", label: "Ano2", checked: false }
    ]
  },
  {
    id: "fuel",
    name: "Combustivel",
    options: [
      { value: "gasolina", label: "Gasolina", checked: false },
      { value: "diesel", label: "Diesel", checked: false },
      { value: "eletrico", label: "Eletrico", checked: false },
      { value: "hibrido", label: "Hibrido", checked: false }
    ]
  },
  {
    id: "km",
    name: "Kilometraje",
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

export const models: CarBrand = {
  id: "model",
  name: "Modelo",
  options: [
    {
      label: "Mercedes",
      options: [
        { value: "Clase C", label: "Clase C", checked: false },
        { value: "Clase E", label: "Clase E", checked: false },
        { value: "GLC", label: "GLC", checked: false },
        { value: "Clase A", label: "Clase A", checked: false },
        { value: "GLA", label: "GLA", checked: false },
        { value: "GLB", label: "GLB", checked: false }
      ]
    },
    {
      label: "BMW",
      options: [
        { value: "Serie 3", label: "Serie 3", checked: false },
        { value: "Serie 5", label: "Serie 5", checked: false },
        { value: "X3", label: "X3", checked: false },
        { value: "Serie 1", label: "Serie 1", checked: false },
        { value: "X5", label: "X5", checked: false },
        { value: "X1", label: "X1", checked: false }
      ]
    },
    {
      label: "Audi",
      options: [
        { value: "A4", label: "A4", checked: false },
        { value: "A3", label: "A3", checked: false },
        { value: "Q5", label: "Q5", checked: false },
        { value: "A1", label: "A1", checked: false },
        { value: "Q3", label: "Q3", checked: false },
        { value: "A5", label: "A5", checked: false }
      ]
    },
    {
      label: "Volvo",
      options: [
        { value: "XC90", label: "XC90", checked: false },
        { value: "XC60", label: "XC60", checked: false },
        { value: "S60", label: "S60", checked: false },
        { value: "V60", label: "V60", checked: false },
        { value: "XC40", label: "XC40", checked: false },
        { value: "S90", label: "S90", checked: false }
      ]
    },
    {
      label: "Fiat",
      options: [
        { value: "Uno", label: "Uno", checked: false },
        { value: "Mobi", label: "Mobi", checked: false },
        { value: "Argo", label: "Argo", checked: false },
        { value: "Toro", label: "Toro", checked: false },
        { value: "Cronos", label: "Cronos", checked: false },
        { value: "Palio", label: "Palio", checked: false }
      ]
    },
    {
      label: "Ford",
      options: [
        { value: "Mustang", label: "Mustang", checked: false },
        { value: "Focus", label: "Focus", checked: false },
        { value: "EcoSport", label: "EcoSport", checked: false },
        { value: "Ranger", label: "Ranger", checked: false },
        { value: "Fusion", label: "Fusion", checked: false },
        { value: "Ka", label: "Ka", checked: false }
      ]
    },
    {
      label: "Renault",
      options: [
        { value: "Clio", label: "Clio", checked: false },
        { value: "Sandero", label: "Sandero", checked: false },
        { value: "Kwid", label: "Kwid", checked: false },
        { value: "Duster", label: "Duster", checked: false },
        { value: "Logan", label: "Logan", checked: false },
        { value: "Captur", label: "Captur", checked: false }
      ]
    },
    {
      label: "Chevrolet",
      options: [
        { value: "Onix", label: "Onix", checked: false },
        { value: "Prisma", label: "Prisma", checked: false },
        { value: "Tracker", label: "Tracker", checked: false },
        { value: "Cruze", label: "Cruze", checked: false },
        { value: "S10", label: "S10", checked: false },
        { value: "Spin", label: "Spin", checked: false }
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
        { value: "i30", label: "i30", checked: false },
        { value: "Veloster", label: "Veloster", checked: false }
      ]
    },
    {
      label: "Kia",
      options: [
        { value: "Sportage", label: "Sportage", checked: false },
        { value: "Cerato", label: "Cerato", checked: false },
        { value: "Soul", label: "Soul", checked: false },
        { value: "Picanto", label: "Picanto", checked: false },
        { value: "Sorento", label: "Sorento", checked: false },
        { value: "Stinger", label: "Stinger", checked: false }
      ]
    },
    {
      label: "Nissan",
      options: [
        { value: "March", label: "March", checked: false },
        { value: "Versa", label: "Versa", checked: false },
        { value: "Sentra", label: "Sentra", checked: false },
        { value: "Kicks", label: "Kicks", checked: false },
        { value: "X-Trail", label: "X-Trail", checked: false },
        { value: "Frontier", label: "Frontier", checked: false }
      ]
    },
    {
      label: "Toyota",
      options: [
        { value: "Corolla", label: "Corolla", checked: false },
        { value: "Etios", label: "Etios", checked: false },
        { value: "Hilux", label: "Hilux", checked: false },
        { value: "Rav4", label: "Rav4", checked: false },
        { value: "Yaris", label: "Yaris", checked: false },
        { value: "SW4", label: "SW4", checked: false }
      ]
    },
    {
      label: "Volkswagen",
      options: [
        { value: "Gol", label: "Gol", checked: false },
        { value: "Voyage", label: "Voyage", checked: false },
        { value: "Polo", label: "Polo", checked: false },
        { value: "T-Cross", label: "T-Cross", checked: false },
        { value: "Amarok", label: "Amarok", checked: false },
        { value: "Golf", label: "Golf", checked: false }
      ]
    },
    {
      label: "Mazda",
      options: [
        { value: "Mazda3", label: "Mazda3", checked: false },
        { value: "CX-5", label: "CX-5", checked: false },
        { value: "Mazda6", label: "Mazda6", checked: false },
        { value: "MX-5", label: "MX-5", checked: false },
        { value: "CX-3", label: "CX-3", checked: false },
        { value: "CX-9", label: "CX-9", checked: false }
      ]
    },
    {
      label: "Mitsubishi",
      options: [
        { value: "L200", label: "L200", checked: false },
        { value: "Outlander", label: "Outlander", checked: false },
        { value: "ASX", label: "ASX", checked: false },
        { value: "Eclipse Cross", label: "Eclipse Cross", checked: false },
        { value: "Pajero Sport", label: "Pajero Sport", checked: false },
        { value: "Mirage", label: "Mirage", checked: false }
      ]
    },
    {
      label: "Suzuki",
      options: [
        { value: "Swift", label: "Swift", checked: false },
        { value: "Vitara", label: "Vitara", checked: false },
        { value: "Jimny", label: "Jimny", checked: false },
        { value: "S-Cross", label: "S-Cross", checked: false },
        { value: "Celerio", label: "Celerio", checked: false },
        { value: "Baleno", label: "Baleno", checked: false }
      ]
    }
  ]
};
