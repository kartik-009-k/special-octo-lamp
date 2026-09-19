// Clearly labelled local DEMO listings. Names intentionally match the supplied Shirwal services.
const service=(id,name,icon,description,logo,website='')=>({id,name,category:name,icon,logo,description,website,rating:4.7,location:'Shirwal, Maharashtra',bookingEnabled:['Doctor','Beauty Parlor','Salon'].includes(name),phone:'919000000000',ownerId:`demo-${id}`,hours:'Mon–Sat · 9 AM – 7 PM'});
export const demoVendors=[
 service('doctor','Doctor','🩺','Consult experienced local doctors. Home visits on request.',''),
 service('beauty','Beauty Parlor','💄','Professional grooming for women. Bridal packages available.','https://shirwal.in/assets/logo-beauty-parlor.svg'),
 service('salon','Salon','✂️','Haircuts, styling, shaving, and grooming for men and kids.','https://shirwal.in/assets/logo-salon.svg'),
 service('electric','Electrical Technician','💡','Wiring, repairs, switches, fans, and fittings.','https://shirwal.in/assets/logo-electrical-technician.svg'),
 service('plumbing','Plumbing Work','🔧','Pipe repairs, tap fitting, drainage and bathroom work.','https://shirwal.in/assets/logo-plumbing-work.svg'),
 service('gas','Gas Mechanic','🔥','Gas stove repair and cylinder connection at your door.','https://shirwal.in/assets/logo-gas-mechanic.svg'),
 service('fridge','Refrigerator Mechanic','🧊','Gas refilling, compressor repair, and cooling fixes.','https://shirwal.in/assets/logo-refrigerator-mechanic.svg'),
 service('tv','TV / LED Mechanic','📺','Smart TV, LED panel, and set-top box repair at home.','https://shirwal.in/assets/logo-tv-led-mechanic.svg'),
 service('computer','Computer / Printer Tech','💻','Laptop, desktop, and printer repair with data recovery.','https://shirwal.in/assets/logo-computer-printer-technician.svg'),
 service('xerox','Xerox & Printing','🖨️','Document printing and xerox at your door. Bulk orders welcome.','https://shirwal.in/assets/logo-xerox-printing-doorstep.svg'),
 service('pest','Pest Control','🛡️','Termite, cockroach, and general pest treatment.','https://shirwal.in/assets/logo-pest-control.svg'),
 service('cleaning','Home Cleaning','🧼','Deep cleaning by professional teams. Move-in/out specials.','https://shirwal.in/assets/logo-home-cleaning.svg'),
 service('shifting','House Shifting','📦','Safe and affordable shifting with packing service.','https://shirwal.in/assets/logo-house-shifting.svg'),
 service('painting','Painting Works','🎨','Interior and exterior painting with quality materials.','https://shirwal.in/assets/logo-painting-works.svg'),
 service('laundry','Laundry','🧺','Wash, dry, fold, and ironing. Pickup and delivery available.','https://shirwal.in/assets/logo-laundry.svg','https://laundry.shirwal.in/'),
 service('tiffin','Tiffin Services','🍱','Fresh home-cooked meals delivered daily. Monthly subscription.','https://shirwal.in/assets/logo-tiffin-services.svg','https://mess.shirwal.in/'),
 service('property','Real Estate & Properties','🏘️','Buy, sell, or rent property in Shirwal. Free consultation.','https://shirwal.in/assets/logo-real-estate-properties.svg','https://property.shirwal.in/'),
 service('rickshaw','Rickshaw','🛺','Local auto-rickshaw for quick, affordable rides around Shirwal.','https://shirwal.in/assets/logo-rickshaw.svg','https://rickshaw.shirwal.in/'),
 service('tours','Tours & Travels','🚐','Sightseeing, outstation trips, and wedding vehicle packages.','https://shirwal.in/assets/logo-tours-and-travels.svg'),
 service('car-service','Car Services','🚗','Polishing, servicing, and minor repairs at your location.','https://shirwal.in/assets/logo-car-services.svg'),
 service('car-wash','Car Wash','🚿','Hand wash, foam wash, and interior cleaning. Doorstep available.','https://shirwal.in/assets/logo-car-wash.svg'),
 service('shop-act','Shop Act License','📋','Get your Shop Act License quickly with expert assistance in Shirwal.','https://shirwal.in/assets/logo-xerox-printing-doorstep.svg','https://shopact.shirwal.in/')
];
export const categories=demoVendors.map(v=>v.category);
export const demoServices=[{id:'haircut',vendorId:'salon',name:'Haircut',price:'₹150 onwards',duration:'30 minutes',bookingEnabled:true},{id:'consult',vendorId:'doctor',name:'General consultation',price:'₹300',duration:'20 minutes',bookingEnabled:true},{id:'tiffin',vendorId:'tiffin',name:'Monthly tiffin plan',price:'₹90/day',duration:'Starts on your date',bookingEnabled:false}];
