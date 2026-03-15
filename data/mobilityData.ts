export interface MobilityData {
  rank: string;
  council: string;
  centerNumber: string;
  schoolName: string;
  ownership: string;
  gpaTotal: number;
  gpaRegional: number;
  mobility: number;
  status: "IMEPANDA" | "IMESHUKA";
}

export const mobilityData: MobilityData[] = [
  { rank: "01", council: "MWANZA CC", centerNumber: "S4645", schoolName: "ALLIANCE BOYS", ownership: "BINAFSI", gpaTotal: 3.3710, gpaRegional: 3.2481, mobility: -0.1229, status: "IMEPANDA" },
  { rank: "02", council: "MWANZA CC", centerNumber: "S4836", schoolName: "ALLIANCE GIRLS", ownership: "BINAFSI", gpaTotal: 3.4531, gpaRegional: 3.5313, mobility: 0.0782, status: "IMESHUKA" },
  { rank: "03", council: "ILEMELA MC", centerNumber: "S4811", schoolName: "BIDII", ownership: "BINAFSI", gpaTotal: 3.3126, gpaRegional: 2.8692, mobility: -0.4434, status: "IMEPANDA" },
  { rank: "04", council: "UKEREWE", centerNumber: "S0709", schoolName: "BUKONGO", ownership: "SERIKALI", gpaTotal: 2.1437, gpaRegional: 1.6695, mobility: -0.4742, status: "IMEPANDA" },
  { rank: "05", council: "ILEMELA MC", centerNumber: "S0564", schoolName: "BUSWELU", ownership: "SERIKALI", gpaTotal: 2.0578, gpaRegional: 2.9368, mobility: 0.8790, status: "IMESHUKA" },
  { rank: "06", council: "ILEMELA MC", centerNumber: "S0104", schoolName: "BWIRU BOYS", ownership: "SERIKALI", gpaTotal: 2.1112, gpaRegional: 2.4170, mobility: 0.3058, status: "IMESHUKA" },
  { rank: "07", council: "ILEMELA MC", centerNumber: "S0202", schoolName: "BWIRU GIRLS", ownership: "SERIKALI", gpaTotal: 2.4518, gpaRegional: 2.6583, mobility: 0.2065, status: "IMESHUKA" },
  { rank: "08", council: "MISUNGWI", centerNumber: "S5663", schoolName: "ELPAS", ownership: "BINAFSI", gpaTotal: 3.5437, gpaRegional: 3.6369, mobility: 0.0932, status: "IMESHUKA" },
  { rank: "09", council: "MWANZA CC", centerNumber: "S5268", schoolName: "HOLY FAMILY GIRLS", ownership: "BINAFSI", gpaTotal: 2.4192, gpaRegional: 2.4293, mobility: 0.0101, status: "IMESHUKA" },
  { rank: "10", council: "MWANZA CC", centerNumber: "S2334", schoolName: "ISLAMIYA", ownership: "BINAFSI", gpaTotal: 3.7894, gpaRegional: 3.2963, mobility: -0.4931, status: "IMEPANDA" },
  { rank: "11", council: "MWANZA CC", centerNumber: "S0323", schoolName: "LAKE", ownership: "BINAFSI", gpaTotal: 2.3174, gpaRegional: 2.8796, mobility: 0.5622, status: "IMESHUKA" },
  { rank: "12", council: "ILEMELA MC", centerNumber: "S0249", schoolName: "LORETO GIRLS", ownership: "BINAFSI", gpaTotal: 2.4790, gpaRegional: 2.1791, mobility: -0.2999, status: "IMEPANDA" },
  { rank: "13", council: "MAGU", centerNumber: "S1498", schoolName: "LUGEYE", ownership: "SERIKALI", gpaTotal: 3.2160, gpaRegional: 2.1130, mobility: -1.1030, status: "IMEPANDA" },
  { rank: "14", council: "MAGU", centerNumber: "S0539", schoolName: "MAGU", ownership: "SERIKALI", gpaTotal: 2.1718, gpaRegional: 2.7648, mobility: 0.5930, status: "IMESHUKA" },
  { rank: "15", council: "MWANZA CC", centerNumber: "S4575", schoolName: "MESSA", ownership: "BINAFSI", gpaTotal: 2.9914, gpaRegional: 2.9391, mobility: -0.0523, status: "IMEPANDA" },
  { rank: "16", council: "MISUNGWI", centerNumber: "S1164", schoolName: "MISSUNGWI", ownership: "SERIKALI", gpaTotal: 2.6065, gpaRegional: 2.3256, mobility: -0.2809, status: "IMEPANDA" },
  { rank: "17", council: "MWANZA CC", centerNumber: "S1051", schoolName: "MKOLANI", ownership: "SERIKALI", gpaTotal: 2.2660, gpaRegional: 2.5681, mobility: 0.3021, status: "IMESHUKA" },
  { rank: "18", council: "KWIMBA", centerNumber: "S1107", schoolName: "MWAMASHIMBA", ownership: "SERIKALI", gpaTotal: 2.5186, gpaRegional: 2.5581, mobility: 0.0395, status: "IMESHUKA" },
  { rank: "19", council: "MWANZA CC", centerNumber: "S0333", schoolName: "MWANZA", ownership: "SERIKALI", gpaTotal: 2.1851, gpaRegional: 2.7834, mobility: 0.5983, status: "IMESHUKA" },
  { rank: "20", council: "MAGU", centerNumber: "S7032", schoolName: "MWANZA GIRLS", ownership: "SERIKALI", gpaTotal: 2.7254, gpaRegional: 2.3298, mobility: -0.3956, status: "IMEPANDA" },
  { rank: "21", council: "MWANZA CC", centerNumber: "S0216", schoolName: "NGANZA", ownership: "SERIKALI", gpaTotal: 2.4257, gpaRegional: 2.4321, mobility: 0.0064, status: "IMESHUKA" },
  { rank: "22", council: "MAGU", centerNumber: "S2786", schoolName: "NG'HAYA", ownership: "SERIKALI", gpaTotal: 2.4844, gpaRegional: 2.0719, mobility: -0.4125, status: "IMEPANDA" },
  { rank: "23", council: "KWIMBA", centerNumber: "S0554", schoolName: "NGUDU", ownership: "SERIKALI", gpaTotal: 2.1155, gpaRegional: 2.0773, mobility: -0.0382, status: "IMEPANDA" },
  { rank: "24", council: "MWANZA CC", centerNumber: "S0144", schoolName: "NSUMBA", ownership: "SERIKALI", gpaTotal: 2.4919, gpaRegional: 2.6377, mobility: 0.1458, status: "IMESHUKA" },
  { rank: "25", council: "SENGEREMA", centerNumber: "S1608", schoolName: "NTUNDURU", ownership: "BINAFSI", gpaTotal: 2.8252, gpaRegional: 2.7042, mobility: -0.1210, status: "IMEPANDA" },
  { rank: "26", council: "KWIMBA", centerNumber: "S0173", schoolName: "NYAMILAMA", ownership: "SERIKALI", gpaTotal: 1.8337, gpaRegional: 1.8218, mobility: -0.0119, status: "IMEPANDA" },
  { rank: "27", council: "SENGEREMA", centerNumber: "S0613", schoolName: "NYAMPULUKANO", ownership: "SERIKALI", gpaTotal: 2.5214, gpaRegional: 2.8564, mobility: 0.3350, status: "IMESHUKA" },
  { rank: "28", council: "MWANZA CC", centerNumber: "S0146", schoolName: "NYEGEZI SEMINARY", ownership: "BINAFSI", gpaTotal: 2.0214, gpaRegional: 2.5398, mobility: 0.5184, status: "IMESHUKA" },
  { rank: "29", council: "BUCHOSA", centerNumber: "S1099", schoolName: "NYEHUNGE", ownership: "SERIKALI", gpaTotal: 2.0873, gpaRegional: 2.0126, mobility: -0.0747, status: "IMEPANDA" },
  { rank: "30", council: "MWANZA CC", centerNumber: "S0546", schoolName: "PAMBA", ownership: "SERIKALI", gpaTotal: 2.4650, gpaRegional: 2.4768, mobility: 0.0118, status: "IMESHUKA" },
  { rank: "31", council: "UKEREWE", centerNumber: "S1884", schoolName: "PIUS MSEKWA", ownership: "SERIKALI", gpaTotal: 1.8888, gpaRegional: 1.8313, mobility: -0.0575, status: "IMEPANDA" },
  { rank: "32", council: "ILEMELA MC", centerNumber: "S1609", schoolName: "RORYA", ownership: "BINAFSI", gpaTotal: 3.4202, gpaRegional: 3.2215, mobility: -0.1987, status: "IMEPANDA" },
  { rank: "33", council: "SENGEREMA", centerNumber: "S0151", schoolName: "SENGEREMA", ownership: "SERIKALI", gpaTotal: 2.0611, gpaRegional: 2.1312, mobility: 0.0701, status: "IMESHUKA" },
  { rank: "34", council: "MWANZA CC", centerNumber: "S0240", schoolName: "ST. JOSEPH", ownership: "BINAFSI", gpaTotal: 3.5655, gpaRegional: 4.4048, mobility: 0.8393, status: "IMESHUKA" },
  { rank: "35", council: "KWIMBA", centerNumber: "S0770", schoolName: "SUMVE", ownership: "SERIKALI", gpaTotal: 1.9868, gpaRegional: 1.9044, mobility: -0.0824, status: "IMEPANDA" },
  { rank: "36", council: "KWIMBA", centerNumber: "S0633", schoolName: "TALLO", ownership: "SERIKALI", gpaTotal: 2.6380, gpaRegional: 2.6582, mobility: 0.0202, status: "IMESHUKA" },
  { rank: "37", council: "ILEMELA MC", centerNumber: "S0578", schoolName: "TAQWA SS", ownership: "BINAFSI", gpaTotal: 3.2668, gpaRegional: 3.2531, mobility: -0.0137, status: "IMEPANDA" },
  { rank: "38", council: "MWANZA CC", centerNumber: "S0823", schoolName: "THAQAAFA", ownership: "BINAFSI", gpaTotal: 3.3133, gpaRegional: 3.2230, mobility: -0.0903, status: "IMEPANDA" },
  { rank: "39", council: "MWANZA CC", centerNumber: "S4856", schoolName: "TWIHULUMILE", ownership: "BINAFSI", gpaTotal: 3.5804, gpaRegional: 2.8762, mobility: -0.7042, status: "IMEPANDA" },
  { rank: "40", council: "UKEREWE", centerNumber: "S6426", schoolName: "UKEREWE", ownership: "SERIKALI", gpaTotal: 2.1944, gpaRegional: 1.8846, mobility: -0.3098, status: "IMEPANDA" }
];
