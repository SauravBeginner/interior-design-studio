// Verified Unsplash photo IDs — every ID here was visually checked in the browser
// against its intended subject before being committed. Do not add new IDs without
// verifying them first.

export function unsplash(id: string, opts: { w?: number; q?: number } = {}) {
  const { w = 1600, q = 80 } = opts;
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const img = {
  livingRoomWarm: "1618221195710-dd6b41faaea6",
  livingRoomGallery: "1600210492486-724fe5c67fb0",
  livingRoomBlueSofa: "1493809842364-78817add7ffb",
  livingRoomCozyKnit: "1583847268964-b28dc8f51f92",
  livingRoomSunroom: "1560448204-e02f11c3d0e2",
  livingRoomMirrors: "1631679706909-1844bbd07221",

  kitchenWhiteRed: "1556909212-d5b604d0c90d",
  kitchenWoodOpenPlan: "1600607687939-ce8a6c25118c",
  kitchenGreenCabinets: "1600489000022-c2086d79f9d4",
  kitchenIslandPendant: "1556912167-f556f1f39fdf",
  kitchenMarbleIsland: "1541123437800-1bb1317badc2",
  kitchenBrightBar: "1600585152220-90363fe7e115",

  bedroomMoody: "1616594039964-ae9021a400a0",
  bedroomBrightGlassDoors: "1616486029423-aaa4789e8c9a",
  bedroomNightstand: "1522771739844-6a9f6d5f14af",
  bedroomTuftedBench: "1505693416388-ac5ce068fe85",
  bedroomHotelStyle: "1631049307264-da0ec9d70304",

  officeOpenWood: "1497366216548-37526070297c",
  officeDeskPlant: "1497215728101-856f4ea42174",
  officeArchedHall: "1524230572899-a752b3835840",
  officeLoungeWood: "1604328698692-f76ea9498e76",
  officeDeskCityView: "1497215842964-222b430dc094",

  bathroomDarkModern: "1600566752355-35792bedcfea",
  exteriorModernHouse: "1600047509807-ba8f99d2cdde",
  livingRoomJewelTone: "1618219944342-824e40a13285",

  heroFarmhouseBeams: "1600210491892-03d54c0aaf87",
  heroStaircaseDining: "1600607687920-4e2a09cf159d",
  heroOpenPlanDog: "1600566753086-00f18fb6b3ea",
  heroBohoLiving: "1615529182904-14819c35db37",

  textileStripe: "1616627561950-9f746e330187",

  portraitWomanOrange: "1573496359142-b8d87734a5a2",
  portraitManGlasses: "1560250097-0b93528c311a",
  portraitManDarkSuit: "1519085360753-af0119f7cbe7",
};
