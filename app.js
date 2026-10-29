var fo="velora-life-v2";var kd="095919b93b351efe30b5c606864699f598b29bbc43e6dedabd109407dc5f35ce";var Bd=[[200,0],[2e3,.12],[2e4,.22],[2e5,.3],[1/0,.38]],uo=6,tu=12,jl=1.35,ho=4,zd=.75,an={budget:{label:"Budget",revenue:.88,beta:.55,cost:-.04,note:"Lower prices and cheaper supplies. Customers keep coming in a recession."},standard:{label:"Standard",revenue:1,beta:1,cost:0,note:"Balanced prices for a normal market."},premium:{label:"Premium",revenue:1.15,beta:1.45,cost:.06,note:"Higher prices and better supplies. Great in a boom, painful in a recession, and customers expect good condition."}},yn={low:{label:"Low",wages:.85,morale:35,note:"Saves 15% on wages, but morale sinks and people quit often."},market:{label:"Market",wages:1,morale:68,note:"Normal wages. Staff are content and occasionally leave."},generous:{label:"Generous",wages:1.2,morale:92,note:"Costs 20% more. A loyal, happy team that rarely quits and serves customers better."}},Ql=i=>.018*Math.pow(Math.max(0,100-i)/50,2),wt=(i,e,t)=>Math.min(t,Math.max(e,i)),at=i=>Math.round(i*100)/100,Hd=i=>String(i??"").trim().replace(/\s+/g," ").toLowerCase(),Gr=i=>{let e=Hd(i);return e==="elango"||e.startsWith("elango ")};function nu(i){let e=unescape(encodeURIComponent(String(i))),t=(c,l)=>c>>>l|c<<32-l,n=[],s=[];for(let c=2,l=0;l<64;c++){let u=!0;for(let h=2;h*h<=c;h++)if(c%h===0){u=!1;break}u&&(l<8&&(n[l]=Math.pow(c,1/2)*4294967296|0),s[l++]=Math.pow(c,1/3)*4294967296|0)}let r=[],a=e.length*8,o=e+"\x80";for(;o.length%64-56;)o+="\0";for(let c=0;c<o.length;c++)r[c>>2]|=o.charCodeAt(c)<<(3-c)%4*8;r[r.length]=a/4294967296|0,r[r.length]=a|0;for(let c=0;c<r.length;c+=16){let l=r.slice(c,c+16),u=n.slice(0,8);for(let h=0;h<64;h++){let f=l[h-15],p=l[h-2],[y,,,,x]=n,m=n[7]+(t(x,6)^t(x,11)^t(x,25))+(x&n[5]^~x&n[6])+s[h]+(l[h]=h<16?l[h]|0:l[h-16]+(t(f,7)^t(f,18)^f>>>3)+l[h-7]+(t(p,17)^t(p,19)^p>>>10)|0)|0,d=(t(y,2)^t(y,13)^t(y,22))+(y&n[1]^y&n[2]^n[1]&n[2])|0;n.unshift(m+d|0),n[4]=n[4]+m|0,n.length=8}for(let h=0;h<8;h++)n[h]=n[h]+u[h]|0}return n.map(c=>(c>>>0).toString(16).padStart(8,"0")).join("")}var Vd=i=>nu("velora-owner:"+String(i??"").trim())===kd,Gd={cd90cf79e2dd87e168685a7805aedcccdbb725fa6d45b9e8ee13c6c2f3b3cfef:{label:"+$1,000,000,000 cash",apply:i=>{i.state.cash=at(i.state.cash+1e9)}},"8f56413a4666a5bc1508da0e3b2bd05eb683e71b55904500946f1006258e3262":{label:"+$1,000,000 cash",apply:i=>{i.state.cash=at(i.state.cash+1e6)}},"4eb0e31ada443e58966584ca874c532c85d6ae156bffb9d3c1fd800eae552e8a":{label:"energy and happiness refilled",apply:i=>{i.state.energy=100,i.state.happiness=100}},cfbd93f4b5b85f6dd58968e80b2e68adf0452b427f9649ddc94a0dbea36fe6e1:{label:"every qualification earned and credit score 850",apply:i=>{let e=i.state.education;for(let t of wn)e.completed.includes(t.id)||e.completed.push(t.id);e.enrolled=null,e.sessionsDone=0,i.state.credit=850}},c2ba54049f8d3da2d20ada48aa2ce6430aa2f64d1438fe4bbfa7f055b7841333:{label:"every business repaired, fully staffed and happy",apply:i=>{for(let e of Object.keys(i.state.businesses))Object.assign(i.state.businessState[e],{condition:100,closedDays:0,shortDays:0,morale:100})}}},iu=i=>String(i??"").toUpperCase().replace(/[^A-Z0-9]/g,""),su=i=>{let e=iu(i);return e.length>=4&&e.length<=24&&Gd[nu("velora-cheat:"+e)]||null};function ru(i){let e=iu(i).slice(-24);for(let t=4;t<=e.length;t++){let n=e.slice(-t);if(su(n))return n}return null}var bt=[{id:"cafe",name:"Corner Caf\xE9",district:"Old Town",tag:"Food & drink",price:8e3,revenue:270,staff:70,costRate:.36,volatility:.1,beta:.6,decay:1.8,requires:{},description:"Good coffee. Loyal regulars. Thin margins, early mornings, and the start of something.",color:"#f39578"},{id:"studio",name:"Creative Studio",district:"Arts Quarter",tag:"Creative services",price:3e4,revenue:860,staff:240,costRate:.34,volatility:.14,beta:.9,decay:1.4,requires:{},description:"Win client contracts and keep a talented team busy. Revenue swings with the economy.",color:"#b9a6e8"},{id:"restaurant",name:"The Greenhouse",district:"Garden District",tag:"Fine dining",price:9e4,revenue:2600,staff:650,costRate:.4,volatility:.12,beta:.8,decay:1.9,requires:{levelUp:!0},description:"A neighborhood favorite. Busy kitchens wear out fast and inspectors visit often.",color:"#9dbd7d"},{id:"market",name:"Northside Grocer",district:"North District",tag:"Retail",price:18e4,revenue:6e3,staff:1100,costRate:.55,volatility:.06,beta:.3,decay:1.6,requires:{credit:620},description:"People always need groceries. Low margins, steady demand, recession resistant.",color:"#c9b37e"},{id:"hotel",name:"Harbor Hotel",district:"Waterfront",tag:"Hospitality",price:42e4,revenue:1e4,staff:2600,costRate:.38,volatility:.13,beta:1.1,decay:1.7,requires:{course:"vocational",owned:3},description:"Turn the city\u2019s best views into a destination. Tourism booms and busts with the market.",color:"#e6c181"},{id:"logistics",name:"Velo Logistics",district:"North District",tag:"Transport",price:9e5,revenue:24e3,staff:5200,costRate:.48,volatility:.1,beta:1,decay:2,requires:{course:"business"},description:"A fleet of trucks moving the city\u2019s goods. Heavy wear, heavy wages, reliable contracts.",color:"#a4b59a"},{id:"apartments",name:"Parkview Residences",district:"North District",tag:"Rental property",price:22e5,revenue:24500,staff:3e3,costRate:.25,volatility:.04,beta:.4,decay:1.2,requires:{credit:680,owned:4},description:"Tenants pay rent in good times and bad. Slow returns, low risk.",color:"#d5c3a6"},{id:"tower",name:"Velora Tower",district:"Downtown",tag:"Commercial property",price:6e6,revenue:68500,staff:9e3,costRate:.3,volatility:.07,beta:.9,decay:1.1,requires:{course:"business",credit:700},description:"Own a piece of the skyline. Office leases follow the business cycle.",color:"#8bbfc6"},{id:"marina",name:"Azure Marina",district:"Waterfront",tag:"Luxury leisure",price:15e6,revenue:185e3,staff:3e4,costRate:.35,volatility:.15,beta:1.4,decay:1.5,requires:{course:"finance",owned:6},description:"A world-class harbor. The rich spend big in a boom and vanish in a recession.",color:"#7caecf"},{id:"tech",name:"Velora Labs",district:"North District",tag:"Technology",price:4e7,revenue:6e5,staff:12e4,costRate:.3,volatility:.22,beta:1.3,decay:1.3,requires:{course:"technology",credit:720},description:"A software company with huge upside and wild swings. Not for the faint-hearted.",color:"#93a9c9"},{id:"skyline",name:"Skyline Exchange",district:"North District",tag:"Finance",price:12e7,revenue:1415e3,staff:26e4,costRate:.35,volatility:.12,beta:1.2,decay:1,requires:{course:"finance",credit:760,netWorth:5e7},description:"The city\u2019s trading floor. Only established, creditworthy founders get a seat.",color:"#7f9cad"}],jt=[{id:"scooter",name:"City Scooter",category:"Cars",price:3500,happiness:6,upkeep:8,depreciation:.003,description:"Your own little escape. Every street is a shortcut.",color:"#c1de9b"},{id:"loft",name:"Garden Loft",category:"Homes",price:45e3,happiness:14,upkeep:22,appreciation:15e-5,home:!0,description:"Sunlit windows and a place to call your own. No more rent.",color:"#d7bfa2"},{id:"roadster",name:"Coastal Roadster",category:"Cars",price:85e3,happiness:18,upkeep:90,depreciation:.0025,description:"Top down. Sea breeze. Loses value the moment you drive it home.",color:"#f09c82"},{id:"penthouse",name:"Skyline Penthouse",category:"Homes",price:65e4,happiness:26,upkeep:400,appreciation:2e-4,home:!0,description:"A private terrace, a rooftop pool, and the city at your feet.",color:"#b1c3cc"},{id:"supercar",name:"Veloce GT",category:"Cars",price:78e4,happiness:28,upkeep:900,depreciation:.003,description:"A sculpted supercar with a supercar insurance bill.",color:"#d2b5df"},{id:"yacht",name:"Azure Yacht",category:"Experiences",price:45e5,happiness:34,upkeep:6e3,depreciation:.0015,description:"Crew, fuel, berth and insurance. Worth it at sunset.",color:"#91ccce"},{id:"villa",name:"Oceanfront Estate",category:"Homes",price:8e6,happiness:38,upkeep:7500,appreciation:25e-5,home:!0,description:"Private gardens, ocean sunsets, and a staff to keep it all running.",color:"#d3c299"},{id:"jet",name:"Private Jet",category:"Experiences",price:25e6,happiness:45,upkeep:22e3,depreciation:.0012,description:"The whole world, on your schedule. Pilots and hangars not included.",color:"#9cb6d0"},{id:"island",name:"Private Island",category:"Homes",price:18e7,happiness:55,upkeep:9e4,appreciation:2e-4,home:!0,description:"A billionaire\u2019s hideaway with its own villa, beach and jetty.",color:"#a9d2b8"}],zr=[{id:"rest",name:"Take a break",cost:0,energy:30,happiness:3,perDay:1,description:"A quiet moment in the park. Once a day."},{id:"meal",name:"Enjoy a good meal",cost:45,energy:20,happiness:8,perDay:2,description:"Refuel at your favorite local spot."},{id:"socialize",name:"Meet your friends",cost:120,energy:-6,happiness:22,perDay:1,description:"Good company makes the city feel like home."}],ui=[{id:"starter",name:"Fresh Start Loan",principal:15e3,interestRate:.09,termDays:30,minCredit:580,description:"A small fixed-cost loan for tuition, a first upgrade, or a deposit."},{id:"growth",name:"Business Growth Loan",principal:6e4,interestRate:.12,termDays:40,minCredit:640,description:"Finance an expansion. Make sure daily cash flow covers the repayments."},{id:"enterprise",name:"Enterprise Loan",principal:25e4,interestRate:.15,termDays:60,minCredit:700,description:"A serious commitment for an established founder with good credit."},{id:"capital",name:"Capital Markets Facility",principal:2e6,interestRate:.18,termDays:90,minCredit:760,description:"Institutional money for institutional ambitions. Expensive if things go wrong."}],wn=[{id:"vocational",name:"Management Certificate",field:"Vocational training",tuition:2500,sessions:4,energyPerSession:14,careerId:"manager",description:"Practical leadership skills. Required to run a hotel."},{id:"business",name:"Business Administration",field:"Business school",tuition:9e3,sessions:5,energyPerSession:16,careerId:"consultant",description:"Strategy and operations. Required for logistics and commercial property."},{id:"design",name:"Design & Visual Arts",field:"Arts college",tuition:12e3,sessions:6,energyPerSession:15,careerId:"designer",description:"Develop your creative voice and a portfolio clients remember."},{id:"technology",name:"Software Engineering",field:"Technology institute",tuition:28e3,sessions:7,energyPerSession:18,careerId:"developer",description:"Master software systems. Required to run a tech company."},{id:"finance",name:"Finance & Economics",field:"University",tuition:55e3,sessions:9,energyPerSession:20,careerId:"analyst",description:"Markets and investment analysis. Required for the marina and the exchange."},{id:"medicine",name:"Medical Degree",field:"Medical school",tuition:12e4,sessions:12,energyPerSession:22,careerId:"physician",description:"Years of hard study for a demanding, well-paid career."}],Xn=[{id:"freelancer",name:"Freelancer",courseId:null,shiftPay:280,salaryPerDay:0,description:"Flexible gigs. No salary, no boss."},{id:"manager",name:"Operations Manager",courseId:"vocational",shiftPay:380,salaryPerDay:120,description:"Keep a busy team on track for a steady salary."},{id:"consultant",name:"Business Consultant",courseId:"business",shiftPay:560,salaryPerDay:260,description:"Help companies solve practical business problems."},{id:"designer",name:"Creative Director",courseId:"design",shiftPay:650,salaryPerDay:300,description:"Turn creative briefs into thoughtful visual work."},{id:"developer",name:"Software Engineer",courseId:"technology",shiftPay:1100,salaryPerDay:600,description:"Design and build the products people use every day."},{id:"analyst",name:"Financial Analyst",courseId:"finance",shiftPay:1900,salaryPerDay:1100,description:"Research companies and help clients plan for the future."},{id:"physician",name:"Physician",courseId:"medicine",shiftPay:3e3,salaryPerDay:1800,description:"Care for patients and lead a medical team."}],Js=[{id:"maya",name:"Maya Chen",age:28,job:"Architect",personality:"Thoughtful & adventurous",interests:["Architecture","Hiking","Coffee"],color:"#99b9a6",householdIncome:420,description:"Maya sketches buildings in her notebook and dreams of designing a greener city. She values curiosity and making time for each other."},{id:"alex",name:"Alex Rivera",age:30,job:"Chef",personality:"Warm & ambitious",interests:["Cooking","Music","Travel"],color:"#d5a88a",householdIncome:360,description:"Alex loves long dinners and bold ideas. A great conversation matters more than an expensive restaurant."},{id:"sofia",name:"Sofia Laurent",age:27,job:"Photographer",personality:"Creative & independent",interests:["Art","Photography","Cycling"],color:"#b6a3c7",householdIncome:320,description:"Sofia notices the stories everyone else walks past. She wants room for both shared adventures and individual dreams."},{id:"noah",name:"Noah Brooks",age:31,job:"Marine Biologist",personality:"Patient & outdoorsy",interests:["Sailing","Nature","Reading"],color:"#94b9c5",householdIncome:400,description:"Noah protects the coast by day and sails at sunset. He appreciates kindness, honesty, and a calm conversation."},{id:"aria",name:"Aria Patel",age:29,job:"Software Engineer",personality:"Playful & curious",interests:["Games","Technology","Live music"],color:"#c2b77f",householdIncome:460,description:"Aria is always learning something new. Her ideal evening mixes a clever game, good food, and someone who makes her laugh."},{id:"leo",name:"Leo Okafor",age:32,job:"Community Organizer",personality:"Generous & grounded",interests:["Volunteering","Fitness","Gardening"],color:"#ae947c",householdIncome:300,description:"Leo knows everyone in the neighborhood and always shows up for his friends. He is looking for a true teammate in life."}],au={chat:0,date:250,propose:4e3,marry:25e3,quality:200},Wd={chat:3,date:8,propose:0,marry:0,quality:6},Fr={chat:6,date:12,propose:5,marry:8,quality:10},$d={chat:3,date:9,propose:15,marry:25,quality:12},Li=au,eu=[{id:"client",title:"Your first big referral",description:"A local shop needs help launching its new brand. Taking the project will use some energy, but it could be a useful first connection.",choices:[{id:"accept",label:"Take the project",description:"Earn $1,200 \xB7 use 15 energy",cost:0,reward:1200,energy:-15,happiness:2},{id:"rest",label:"Protect your free time",description:"Recover 8 energy \xB7 gain 6 happiness",cost:0,reward:0,energy:8,happiness:6}]},{id:"festival",title:"The waterfront festival",description:"The city is hosting a weekend market. You can run a pop-up stall or take the afternoon off with friends.",choices:[{id:"stall",label:"Run a pop-up stall",description:"$900 supplies \xB7 $1,500 sales \xB7 use 12 energy",cost:900,reward:1500,energy:-12,happiness:4},{id:"visit",label:"Enjoy the festival",description:"Spend $120 \xB7 gain 18 happiness",cost:120,reward:0,energy:-3,happiness:18},{id:"skip",label:"Stay home and recharge",description:"Recover 12 energy",cost:0,reward:0,energy:12,happiness:0}]},{id:"audit",title:"A letter from the tax office",description:"Your books have been selected for review. A good accountant costs money now, but mistakes cost more later.",choices:[{id:"accountant",label:"Hire an accountant",description:"Spend $1,500 \xB7 no surprises",cost:1500,reward:0,energy:0,happiness:2},{id:"diy",label:"Handle it yourself",description:"Use 18 energy \xB7 lose 6 happiness",cost:0,reward:0,energy:-18,happiness:-6}]},{id:"tuition",title:"A city learning grant",description:"Velora is encouraging residents to develop new skills. Attend a short workshop to receive a learning grant.",choices:[{id:"attend",label:"Attend the workshop",description:"Receive $650 \xB7 use 10 energy",cost:0,reward:650,energy:-10,happiness:5},{id:"decline",label:"Leave it for someone else",description:"Gain 3 happiness",cost:0,reward:0,energy:0,happiness:3}]},{id:"weather",title:"Rain changes the plan",description:"Heavy rain has disrupted your schedule. Reschedule your work or spend the afternoon taking care of yourself.",choices:[{id:"reschedule",label:"Arrange a new appointment",description:"Spend $180 \xB7 recover 5 energy",cost:180,reward:0,energy:5,happiness:3},{id:"remote",label:"Finish the project remotely",description:"Earn $800 \xB7 use 16 energy",cost:0,reward:800,energy:-16,happiness:-5},{id:"pause",label:"Make it a quiet day",description:"Recover 18 energy \xB7 gain 4 happiness",cost:0,reward:0,energy:18,happiness:4}]},{id:"supplier",title:"Your supplier raises prices",description:"A key supplier wants a bigger cut. Negotiating takes energy; paying keeps the peace.",choices:[{id:"pay",label:"Pay the increase this month",description:"Spend $2,000",cost:2e3,reward:0,energy:0,happiness:0},{id:"negotiate",label:"Negotiate hard",description:"Use 20 energy \xB7 lose 4 happiness",cost:0,reward:0,energy:-20,happiness:-4}]},{id:"community",title:"A neighborhood in bloom",description:"Your neighbors are restoring the community garden. Your contribution can be money, time, or encouragement.",choices:[{id:"sponsor",label:"Sponsor the garden",description:"Spend $1,200 \xB7 gain 22 happiness",cost:1200,reward:0,energy:0,happiness:22},{id:"volunteer",label:"Spend a day volunteering",description:"Use 12 energy \xB7 gain 16 happiness",cost:0,reward:0,energy:-12,happiness:16},{id:"encourage",label:"Send a kind message",description:"Gain 3 happiness",cost:0,reward:0,energy:0,happiness:3}]},{id:"contract",title:"A promising opportunity",description:"An established client offers a rush contract. It pays well, but you will need to give it your full attention.",choices:[{id:"rush",label:"Deliver the rush contract",description:"Earn $2,400 \xB7 use 24 energy \xB7 lose 6 happiness",cost:0,reward:2400,energy:-24,happiness:-6},{id:"refer",label:"Refer a trusted colleague",description:"Receive $300 \xB7 gain 8 happiness",cost:0,reward:300,energy:0,happiness:8}]}],ou=[{id:"upgrade",title:"A little ambition",description:"Upgrade your first business",reward:800,metric:i=>Object.values(i.state.businesses).some(e=>e>1)?1:0,target:1},{id:"expand",title:"Think bigger",description:"Own 2 businesses",reward:2500,metric:i=>Object.keys(i.state.businesses).length,target:2},{id:"luxury",title:"Treat yourself",description:"Buy your first lifestyle item",reward:500,metric:i=>i.state.assets.length,target:1},{id:"graduate",title:"Back to school",description:"Earn any qualification",reward:1e3,metric:i=>i.state.education.completed.length,target:1},{id:"wealth",title:"Six-figure life",description:"Reach a net worth of $100,000",reward:5e3,metric:i=>i.netWorth,target:1e5,wealth:!0},{id:"homeowner",title:"A place of your own",description:"Own a home and stop paying rent",reward:3e3,metric:i=>i.ownsHome?1:0,target:1},{id:"empire",title:"Empire builder",description:"Own 5 businesses",reward:4e4,metric:i=>Object.keys(i.state.businesses).length,target:5},{id:"millionaire",title:"Millionaire",description:"Reach a net worth of $1,000,000",reward:25e3,metric:i=>i.netWorth,target:1e6,wealth:!0},{id:"tenmillion",title:"Eight figures",description:"Reach a net worth of $10,000,000",reward:15e4,metric:i=>i.netWorth,target:1e7,wealth:!0},{id:"tycoon",title:"City tycoon",description:"Own every business in Velora",reward:2e6,metric:i=>Object.keys(i.state.businesses).length,target:bt.length},{id:"hundredmillion",title:"Nine figures",description:"Reach a net worth of $100,000,000",reward:1e6,metric:i=>i.netWorth,target:1e8},{id:"billionaire",title:"Billionaire",description:"Reach a net worth of $1,000,000,000",reward:5e6,metric:i=>i.netWorth,target:1e9}],Xd=ou.map(i=>i.id);function rt(i,e=!1){let t=Number.isFinite(i)?i:0;return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0,...e?{notation:"compact",maximumFractionDigits:1}:{}}).format(t)}function qd(i){let e=0,t=0;for(let[n,s]of Bd){if(i<=t)break;e+=(Math.min(i,n)-t)*s,t=n}return e}function lo(i){return()=>{i.seed=i.seed+1831565813>>>0;let e=i.seed;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function kr(){return{condition:100,insured:!1,noise:1,closedDays:0,boostDays:0,boost:1,pricing:"standard",pay:"market",morale:68,shortDays:0,campaignDays:0,campaignCooldown:0}}function Hr(i){return{day:Math.floor(i),meals:0,social:0,rest:0,study:0,date:0,chats:[]}}function Br(i){return{version:2,seed:(Number.isInteger(i)?i:Math.floor(Math.random()*4294967295))>>>0,cash:15e3,playerName:"",account:null,ownerMode:!1,day:1,speed:1,energy:86,happiness:88,businesses:{cafe:1},businessState:{cafe:kr()},assets:[],assetValues:{},market:{index:1,target:1,regime:"stable",regimeDays:18},settings:{autoService:!1},totalEarned:0,taxesPaid:0,goalsClaimed:[],workCount:0,cheatsUsed:0,nextWorkDay:1,today:Hr(1),overdraftDays:0,credit:650,loans:[],loanSequence:0,education:{enrolled:null,sessionsDone:0,completed:[],careerId:"freelancer"},relationships:{},spouseId:null,eventIndex:0,nextEventDay:1,history:[{text:"Welcome to Velora. Your Corner Caf\xE9 is open, and the rent is due every day.",day:1,kind:"welcome"}]}}function ct(i,e,t=-1e15,n=1e15){return typeof i=="number"&&Number.isFinite(i)?wt(i,t,n):e}function Yd(i,e){let t=Br(e);if(!i||typeof i!="object"||i.version!==2)return t;let n=ct(i.day,1,1,1e8),s={},r={};for(let d of bt){let M=Number.isInteger(i.businesses?.[d.id])?wt(i.businesses[d.id],0,5):0;if(!M)continue;s[d.id]=M;let b=i.businessState?.[d.id]||{};r[d.id]={condition:ct(b.condition,100,0,100),insured:!!b.insured,noise:ct(b.noise,1,.4,1.8),closedDays:Math.floor(ct(b.closedDays,0,0,10)),boostDays:Math.floor(ct(b.boostDays,0,0,10)),boost:ct(b.boost,1,.5,1.6),pricing:Object.hasOwn(an,b.pricing)?b.pricing:"standard",pay:Object.hasOwn(yn,b.pay)?b.pay:"market",morale:ct(b.morale,68,0,100),shortDays:Math.floor(ct(b.shortDays,0,0,ho)),campaignDays:Math.floor(ct(b.campaignDays,0,0,uo)),campaignCooldown:Math.floor(ct(b.campaignCooldown,0,0,tu))}}let a=[...new Set(Array.isArray(i.assets)?i.assets.filter(d=>jt.some(M=>M.id===d)):[])],o={};for(let d of a){let M=jt.find(b=>b.id===d);o[d]=ct(i.assetValues?.[d],M.price,M.price*.3,M.price*4)}let c=[...new Set(Array.isArray(i.education?.completed)?i.education.completed.filter(d=>wn.some(M=>M.id===d)):[])],l=wn.find(d=>d.id===i.education?.enrolled&&!c.includes(d.id)),u=Xn.find(d=>d.id===i.education?.careerId&&(!d.courseId||c.includes(d.courseId))),h=Js.some(d=>d.id===i.spouseId)?i.spouseId:null,f={};for(let d of Js){let M=i.relationships?.[d.id]||{},b=ct(M.bond,0,0,100),g=Math.floor(ct(M.dates,0,0,1e6));f[d.id]={bond:b,dates:g,status:d.id===h?"married":!h&&M.status==="engaged"&&g>=3?"engaged":g>0?"dating":b>=15?"friends":"acquaintance"}}let p=[],y=new Set;for(let d of Array.isArray(i.loans)?i.loans:[]){let M=ui.find(_=>_.id===d?.productId);if(!M||y.has(M.id))continue;let b=at(M.principal*(1+M.interestRate)),g=at(ct(d.outstanding,b,0,b));if(!g)continue;y.add(M.id);let k=ct(d.issuedDay,n,1,n);p.push({id:typeof d.id=="string"&&/^loan-[1-9]\d{0,11}$/.test(d.id)&&!p.some(_=>_.id===d.id)?d.id:"loan-"+(p.length+1),productId:M.id,principal:M.principal,interestRate:M.interestRate,termDays:M.termDays,totalRepayment:b,outstanding:g,dailyRepayment:at(b/M.termDays),issuedDay:k,nextDueDay:ct(d.nextDueDay,n+1,n,n+1),dueDay:k+M.termDays,arrears:at(ct(d.arrears,0,0,g))})}let x=["boom","stable","recession"],m=i.today&&Math.floor(ct(i.today.day,-1))===Math.floor(n)?{day:Math.floor(n),meals:Math.floor(ct(i.today.meals,0,0,9)),social:Math.floor(ct(i.today.social,0,0,9)),rest:Math.floor(ct(i.today.rest,0,0,9)),study:Math.floor(ct(i.today.study,0,0,9)),date:Math.floor(ct(i.today.date,0,0,9)),chats:Array.isArray(i.today.chats)?i.today.chats.filter(d=>Js.some(M=>M.id===d)):[]}:Hr(n);return{...t,seed:Number.isInteger(i.seed)?i.seed>>>0:t.seed,cash:ct(i.cash,t.cash,-1e13,1e15),day:n,playerName:typeof i.playerName=="string"?i.playerName.trim().slice(0,40):"",account:i.account&&typeof i.account=="object"&&typeof i.account.id=="string"?{id:i.account.id.slice(0,80),provider:String(i.account.provider||"guest").slice(0,20),name:String(i.account.name||"").slice(0,60),picture:/^https:\/\//.test(i.account.picture||"")?String(i.account.picture).slice(0,400):""}:null,ownerMode:!!i.ownerMode,speed:[0,1,3].includes(i.speed)?i.speed:1,energy:ct(i.energy,t.energy,0,100),happiness:ct(i.happiness,t.happiness,0,100),businesses:s,businessState:r,assets:a,assetValues:o,market:{index:ct(i.market?.index,1,.55,1.4),target:ct(i.market?.target,1,.55,1.4),regime:x.includes(i.market?.regime)?i.market.regime:"stable",regimeDays:Math.floor(ct(i.market?.regimeDays,18,0,60))},settings:{autoService:!!i.settings?.autoService},totalEarned:ct(i.totalEarned,0,0),taxesPaid:ct(i.taxesPaid,0,0),goalsClaimed:[...new Set(Array.isArray(i.goalsClaimed)?i.goalsClaimed.filter(d=>Xd.includes(d)):[])],workCount:Math.floor(ct(i.workCount,0,0)),cheatsUsed:Math.floor(ct(i.cheatsUsed,0,0,1e9)),nextWorkDay:ct(i.nextWorkDay,n,1,n+1),today:m,overdraftDays:Math.floor(ct(i.overdraftDays,0,0,60)),credit:Math.round(ct(i.credit,650,300,850)),loans:p,loanSequence:Math.max(Math.floor(ct(i.loanSequence,0,0,1e12)),...p.map(d=>Number(d.id.slice(5))),0),education:{enrolled:l?.id||null,sessionsDone:l?Math.floor(ct(i.education?.sessionsDone,0,0,l.sessions-1)):0,completed:c,careerId:u?.id||"freelancer"},relationships:f,spouseId:h,eventIndex:Math.floor(ct(i.eventIndex,0,0,1e8)),nextEventDay:ct(i.nextEventDay,1,1,n+3),history:Array.isArray(i.history)?i.history.filter(d=>d&&typeof d.text=="string").slice(0,30).map(d=>({text:d.text.slice(0,200),day:ct(d.day,1,1,1e8),kind:typeof d.kind=="string"?d.kind.slice(0,20):"event"})):t.history}}var Vr=class{constructor(e={}){this.listeners=new Set,this.alerts=[],this.options=e;try{this.storage=e.storage===void 0?globalThis.localStorage:e.storage}catch{this.storage=null}this.saveKey=e.saveKey||`${fo}:guest`,this.state=Br(e.seed),this.random=lo(this.state),this.saveElapsed=0,this.storageAvailable=!!this.storage,this.load()}load(e=this.saveKey){if(this.saveKey=e,this.state=Br(this.options.seed),this.storage)try{let t=this.storage.getItem(this.saveKey);t&&(this.state=Yd(JSON.parse(t),this.options.seed)),this.storageAvailable=!0}catch{this.storageAvailable=!1}return this.random=lo(this.state),this.alerts=[],this.state}switchSave(e){this.save(),this.load(e),this.emit()}subscribe(e){return typeof e!="function"?()=>{}:(this.listeners.add(e),e(this.state),()=>this.listeners.delete(e))}emit(){for(let e of this.listeners)e(this.state)}save(){if(!this.storage)return!1;try{return this.storage.setItem(this.saveKey,JSON.stringify(this.state)),this.storageAvailable=!0,!0}catch{return this.storageAvailable=!1,!1}}note(e,t="event",n=!1){this.state.history.unshift({text:e,day:this.state.day,kind:t}),this.state.history=this.state.history.slice(0,30),n&&this.alerts.push({text:e,kind:t})}drainAlerts(){let e=this.alerts;return this.alerts=[],e}result(e,t){return e&&(this.save(),this.emit()),{ok:e,message:t}}get today(){return this.state.today.day!==Math.floor(this.state.day)&&(this.state.today=Hr(this.state.day)),this.state.today}upgradeCostAt(e,t){return Math.round(e.price*.75*Math.pow(1.85,t-1))}invested(e){let t=bt.find(r=>r.id===e),n=this.state.businesses[e]||0;if(!t||!n)return 0;let s=t.price;for(let r=1;r<n;r++)s+=this.upgradeCostAt(t,r);return s}businessValue(e){let t=bt.find(s=>s.id===e),n=this.state.businessState[e];return!t||!n?0:Math.round(this.invested(e)*(.75+.25*n.condition/100)*(1+.5*t.beta*(this.state.market.index-1)))}assetValue(e){return this.state.assets.includes(e)?Math.round(this.state.assetValues[e]??jt.find(t=>t.id===e)?.price??0):0}get ownsHome(){return this.state.assets.some(e=>jt.find(t=>t.id===e)?.home)}get netWorth(){let e=this.state.cash;for(let t of Object.keys(this.state.businesses))e+=this.businessValue(t);for(let t of this.state.assets)e+=this.assetValue(t);return Math.round(e-this.finance.debt)}get rates(){var m,d;let e=this.state,t=e.happiness<25?.9:1,n={},s=0,r=0,a=0,o=0;for(let M of bt){let b=e.businesses[M.id]||0;if(!b)continue;let g=(m=e.businessState)[d=M.id]||(m[d]=kr()),k=g.closedDays>0,_=an[g.pricing]||an.standard,A=yn[g.pay]||yn.market,D=Math.max(.2,1+M.beta*_.beta*(e.market.index-1)),S=(g.condition>=70?1:.5+.5*g.condition/70)*(g.pricing==="premium"&&g.condition<70?.9:1),v=g.boostDays>0?g.boost:1,C=1+(g.morale-68)*.002,W=g.shortDays>0?zd:1,B=g.campaignDays>0?jl:1,G=k?0:M.revenue*Math.pow(b,1.3)*_.revenue*D*g.noise*S*t*v*C*W*B,ae=M.staff*Math.pow(b,1.1)*A.wages,ee=g.insured?this.invested(M.id)*8e-4:0,$=G*wt(M.costRate+_.cost,.05,.9);n[M.id]={revenue:G,variable:$,staff:ae,insurance:ee,profit:G-$-ae-ee,closed:k,conditionFactor:S,marketFactor:D,moraleFactor:C,staffFactor:W,campaignFactor:B},s+=G,r+=$,a+=ae,o+=ee}let c=s-r-a-o,l=this.education.career.salaryPerDay,u=Js.find(M=>M.id===e.spouseId),h=u?.householdIncome||0,f=qd(Math.max(0,c+l)),p=(this.ownsHome?0:55)+30+(u?60:0),y=jt.filter(M=>e.assets.includes(M.id)).reduce((M,b)=>M+b.upkeep,0),x=c+l+h-f-p-y;return{revenue:s,variable:r,staff:a,insurance:o,businessProfit:c,salary:l,household:h,tax:f,living:p,upkeep:y,net:x,byBusiness:n,rent:this.ownsHome?0:55}}get businessRevenuePerDay(){return Math.round(this.rates.revenue)}get grossIncomePerDay(){let e=this.rates;return Math.round(e.revenue+e.salary+e.household)}get operatingExpensesPerDay(){let e=this.rates;return Math.round(e.variable+e.staff+e.insurance+e.tax+e.living+e.upkeep)}get expensesPerDay(){return at(this.operatingExpensesPerDay+this.finance.dailyRepayment)}get incomePerDay(){return at(Math.round(this.rates.net)-this.finance.dailyRepayment)}businessIncome(e){return Math.round(this.rates.byBusiness[e]?.revenue||0)}businessProfit(e){return Math.round(this.rates.byBusiness[e]?.profit||0)}projectedRevenue(e,t){let n=bt.find(s=>s.id===e);return n?Math.round(n.revenue*Math.pow(t,1.3)):0}projectedProfit(e,t){let n=bt.find(s=>s.id===e);return n?Math.round(n.revenue*Math.pow(t,1.3)*(1-n.costRate)-n.staff*Math.pow(t,1.1)):0}upgradeCost(e){let t=bt.find(s=>s.id===e),n=this.state.businesses[e]||0;return t&&n>0&&n<5?this.upgradeCostAt(t,n):null}serviceCost(e,t=!1){let n=this.state.businessState[e];return!n||!this.state.businesses[e]?0:Math.round(this.invested(e)*.06*(100-n.condition)/100*(t?1.15:1))}insurancePremium(e){return at(this.invested(e)*8e-4)}get finance(){let e=this.state.loans.filter(n=>n.outstanding>0).map(n=>({...n})),t=e.some(n=>n.arrears>0)||this.state.cash<0;return{debt:at(e.reduce((n,s)=>n+s.outstanding,0)),dailyRepayment:at(e.reduce((n,s)=>n+Math.min(s.outstanding,s.dailyRepayment),0)),credit:this.state.credit,loans:e,overdraft:this.state.cash<0?-this.state.cash:0,overdraftDays:this.state.overdraftDays,availableProducts:t?[]:ui.filter(n=>this.state.credit>=n.minCredit&&!e.some(s=>s.productId===n.id)).map(n=>n.id)}}get education(){let e=this.state.education,t=wn.find(s=>s.id===e.enrolled)||null,n=Xn.filter(s=>!s.courseId||e.completed.includes(s.courseId));return{enrolled:t?{...t,sessionsDone:e.sessionsDone}:null,completed:[...e.completed],completedCourses:wn.filter(s=>e.completed.includes(s.id)),progress:t?e.sessionsDone/t.sessions*100:0,sessionsDone:e.sessionsDone,sessionsTotal:t?.sessions||0,studiedToday:this.today.study>0,career:Xn.find(s=>s.id===e.careerId)||Xn[0],availableCareers:n}}get workPay(){return Math.round(this.education.career.shiftPay*(this.state.happiness<25?.75:1))}get market(){let e=this.state.market;return{...e,label:e.regime==="boom"?"Boom":e.regime==="recession"?"Recession":"Stable",trend:e.target>e.index+.01?"up":e.target<e.index-.01?"down":"flat"}}get marketForecast(){let e=this.state.market,t=this.state.education.completed.includes("finance"),n=Math.max(1,e.regimeDays),s=n<=7?"less than a week":n<=14?"one to two weeks":n<=28?"two to four weeks":"over a month",r={stable:{boom:30,recession:25,stable:45},boom:{stable:60,recession:15,boom:25},recession:{stable:55,boom:15,recession:30}}[e.regime],a=e.regime==="recession"?"Switch sensitive businesses to Budget pricing, hold off on marketing, and keep cash for wages. Groceries and rentals hold up best.":e.regime==="boom"?"Customers are spending. Premium pricing and marketing campaigns pay off most now. Hotels, the marina and tech gain the most.":"A normal market. Standard or Premium pricing works if your businesses are in good condition.";return{regime:e.regime,label:this.market.label,index:e.index,target:e.target,trend:this.market.trend,expert:t,daysLeft:t?n:null,range:s,odds:t?r:null,advice:a}}campaignCost(e){let t=this.state.businesses[e]||0;return t?Math.round(this.projectedRevenue(e,t)*1.3):0}rehireCost(e){let t=bt.find(r=>r.id===e),n=this.state.businesses[e]||0,s=this.state.businessState[e];return t&&n?Math.round(t.staff*Math.pow(n,1.1)*(yn[s?.pay]||yn.market).wages*3):0}quitRisk(e){let t=this.state.businessState[e];return t?Ql(t.morale):0}get relationships(){let e=this.today;return Js.map(t=>{let n=this.state.relationships[t.id]||{bond:0,dates:0,status:"acquaintance"},s=this.state.spouseId===t.id,r=!this.state.spouseId||s;return{...t,...n,isSpouse:s,status:s?"married":n.status,chattedToday:e.chats.includes(t.id),datedToday:e.date>0,canDate:r&&n.bond>=15&&e.date===0,canPropose:!this.state.spouseId&&n.status!=="engaged"&&n.bond>=80&&n.dates>=3,canMarry:!this.state.spouseId&&n.status==="engaged"}})}get currentEvent(){if(this.state.day+1e-10<this.state.nextEventDay)return null;let e=eu[this.state.eventIndex%eu.length];return{...e,id:`${e.id}-${this.state.eventIndex}`,scenarioId:e.id,choices:e.choices.map(t=>({...t}))}}requirements(e){let t=bt.find(a=>a.id===e);if(!t)return[];let n=t.requires||{},s=[],r=Object.keys(this.state.businesses).length;if(n.levelUp&&s.push({label:"Upgrade any business to level 2",met:Object.values(this.state.businesses).some(a=>a>1)}),n.owned&&s.push({label:`Own ${n.owned} businesses`,met:r>=n.owned}),n.course){let a=wn.find(o=>o.id===n.course);s.push({label:`Qualification: ${a.name}`,met:this.state.education.completed.includes(n.course)})}return n.credit&&s.push({label:`Credit score ${n.credit}+`,met:this.state.credit>=n.credit}),n.netWorth&&s.push({label:`Net worth ${rt(n.netWorth,!0)}+`,met:this.netWorth>=n.netWorth}),s}canBuy(e){return this.requirements(e).every(t=>t.met)}takeLoan(e){let t=ui.find(r=>r.id===e);if(!t)return this.result(!1,"Choose an available loan product.");if(!this.finance.availableProducts.includes(e))return this.result(!1,this.state.loans.some(r=>r.productId===e)?"You already have this loan. Repay it before borrowing again.":this.state.cash<0?"The bank will not lend while your account is overdrawn.":"This loan is unavailable. Improve your credit score and clear overdue payments.");let n=at(t.principal*(1+t.interestRate)),s={id:`loan-${++this.state.loanSequence}`,productId:e,principal:t.principal,interestRate:t.interestRate,termDays:t.termDays,totalRepayment:n,outstanding:n,dailyRepayment:at(n/t.termDays),issuedDay:this.state.day,nextDueDay:this.state.day+1,dueDay:this.state.day+t.termDays,arrears:0};return this.state.loans.push(s),this.state.cash=at(this.state.cash+t.principal),this.note(`Borrowed ${rt(t.principal)}. ${rt(n)} to repay over ${t.termDays} days.`,"finance"),this.result(!0,`${t.name} approved. +${rt(t.principal)}. First payment is due in one game day.`)}repayLoan(e,t){let n=this.state.loans.find(o=>o.id===e);if(!n||n.outstanding<=0)return this.result(!1,"This loan has already been repaid or is unavailable.");let s=t===void 0?n.outstanding:t;if(typeof s!="number"||!Number.isFinite(s)||s<=0||at(s)<=0)return this.result(!1,"Enter a payment of at least $0.01.");let r=at(s);if(r>n.outstanding)return this.result(!1,`The remaining loan balance is ${rt(n.outstanding)}.`);if(r>this.state.cash)return this.result(!1,`You need ${rt(r-Math.max(0,this.state.cash))} more for this payment.`);this.state.cash=at(this.state.cash-r),n.outstanding=at(n.outstanding-r),n.arrears=at(Math.max(0,n.arrears-r));let a=n.outstanding<=0;return a&&(this.state.loans=this.state.loans.filter(o=>o.id!==e),this.state.credit=wt(this.state.credit+25,300,850)),this.note(a?"Loan repaid in full. Your credit standing improved.":`Paid ${rt(r)} toward your loan.`,"finance"),this.result(!0,a?"Loan paid off. Your credit score went up.":`${rt(r)} payment received. ${rt(n.outstanding)} remaining.`)}enroll(e){let t=wn.find(n=>n.id===e);return t?this.state.education.completed.includes(e)?this.result(!1,"You already earned this qualification."):this.state.education.enrolled?this.result(!1,"Finish your current course before enrolling in another."):this.state.cash<t.tuition?this.result(!1,`You need ${rt(t.tuition-Math.max(0,this.state.cash))} more for tuition.`):(this.state.cash=at(this.state.cash-t.tuition),this.state.education.enrolled=e,this.state.education.sessionsDone=0,this.note(`Enrolled in ${t.name}.`,"education"),this.result(!0,`Enrolled in ${t.name}. One study session per game day, ${t.sessions} in total.`)):this.result(!1,"Choose an available course.")}study(){let e=wn.find(t=>t.id===this.state.education.enrolled);return e?this.today.study>0?this.result(!1,"You already studied today. Your next session opens tomorrow."):this.state.energy<e.energyPerSession?this.result(!1,`You need ${e.energyPerSession} energy for this session. Take a break first.`):(this.state.energy-=e.energyPerSession,this.today.study+=1,this.state.education.sessionsDone+=1,this.state.education.sessionsDone>=e.sessions?(this.state.education.completed.push(e.id),this.state.education.enrolled=null,this.state.education.sessionsDone=0,this.state.happiness=wt(this.state.happiness+12,0,100),this.note(`Graduated from ${e.name}. A new career is now available.`,"education"),this.result(!0,`Congratulations! ${e.name} complete. Choose your newly unlocked career below.`)):this.result(!0,`Study session complete. ${this.state.education.sessionsDone} of ${e.sessions} finished.`)):this.result(!1,"Enroll in a course before studying.")}chooseCareer(e){let t=Xn.find(n=>n.id===e);return!t||!this.education.availableCareers.some(n=>n.id===e)?this.result(!1,"Complete the required qualification before starting this career."):this.state.education.careerId===e?this.result(!1,"This is already your current career."):(this.state.education.careerId=e,this.note(`Started work as ${t.name}.`,"career"),this.result(!0,`${t.name}: ${rt(t.salaryPerDay)} salary per day plus ${rt(t.shiftPay)} per extra shift.`))}interactPartner(e,t){var l;let n=this.relationships.find(u=>u.id===e);if(!n||!["chat","date","propose","marry","quality"].includes(t))return this.result(!1,"Choose a person and an available activity.");let s=au[t],r=Wd[t],a=this.today;if(t==="chat"&&n.chattedToday)return this.result(!1,`You already caught up with ${n.name} today. Try again tomorrow.`);if(t==="date"&&a.date>0)return this.result(!1,"One date per day. Give it some breathing room.");if(t==="date"&&!n.canDate)return this.result(!1,this.state.spouseId?"You are sharing your life with your spouse. Keep other connections as friendships.":"Build a bond of 15 through conversation before asking for a date.");if(t==="propose"&&!n.canPropose)return this.result(!1,this.state.spouseId?"You are already married.":n.status==="engaged"?"You are already engaged. You can plan your wedding.":"A mutual proposal needs at least 80 bond and 3 dates.");if(t==="marry"&&!n.canMarry)return this.result(!1,this.state.spouseId?"You are already married.":"Get engaged before planning a wedding.");if(t==="quality"&&!n.isSpouse)return this.result(!1,"Quality time is for your spouse. Get to know this person through chats and dates.");if(t==="quality"&&a.date>0)return this.result(!1,"You already spent quality time together today.");if(this.state.cash<s)return this.result(!1,`You need ${rt(s-Math.max(0,this.state.cash))} more for this occasion.`);if(this.state.energy<r)return this.result(!1,`You need ${r} energy. Take a break first.`);let o=(l=this.state.relationships)[e]||(l[e]={bond:0,dates:0,status:"acquaintance"});this.state.cash=at(this.state.cash-s),this.state.energy-=r,t==="chat"&&a.chats.push(e),(t==="date"||t==="quality")&&(a.date+=1),o.bond=wt(o.bond+Fr[t],0,100),this.state.happiness=wt(this.state.happiness+$d[t],0,100);let c;if(t==="chat"&&(o.status==="acquaintance"&&o.bond>=15&&(o.status="friends"),c=`A good conversation with ${n.name}. +${Fr.chat} bond.`),t==="date"&&(o.dates+=1,["engaged","married"].includes(o.status)||(o.status="dating"),c=`You and ${n.name} enjoyed a date. +${Fr.date} bond.`),t==="propose"&&(o.status="engaged",c=`${n.name} said yes. You are engaged!`),t==="marry"){o.status="married",this.state.spouseId=e;for(let[u,h]of Object.entries(this.state.relationships))u!==e&&(h.status=h.bond>=15?"friends":"acquaintance");c=`You and ${n.name} are married. A new chapter together begins.`}return t==="quality"&&(c=`A lovely evening with ${n.name}. +${Fr.quality} bond.`),this.note(c,"relationship"),this.result(!0,c)}chooseEvent(e){let t=this.currentEvent;if(!t)return this.result(!1,"There is no pending decision. Another opportunity will arrive soon.");let n=t.choices.find(s=>s.id===e);return n?this.state.cash<n.cost?this.result(!1,`You need ${rt(n.cost-Math.max(0,this.state.cash))} more for this option.`):this.state.energy+n.energy<0?this.result(!1,`You need ${-n.energy} energy for this option. Take a break or choose another path.`):(this.state.cash=at(this.state.cash-n.cost+n.reward),this.state.totalEarned+=Math.max(0,n.reward-n.cost),this.state.energy=wt(this.state.energy+n.energy,0,100),this.state.happiness=wt(this.state.happiness+n.happiness,0,100),this.state.eventIndex+=1,this.state.nextEventDay=this.state.day+3,this.note(`${t.title}: ${n.label}.`,"event"),this.result(!0,`Decision made: ${n.label}. Your next opportunity arrives in three game days.`)):this.result(!1,"Choose one of the available options.")}get goals(){return ou.map(e=>{let t=Math.min(e.metric(this),e.target),n=!!(e.wealth&&this.state.ownerMode&&e.target<=1e7);return{id:e.id,title:e.title,description:e.description,reward:n?0:e.reward,target:e.target,progress:t,waived:n,achieved:t>=e.target,claimed:n||this.state.goalsClaimed.includes(e.id)}})}setSpeed(e){return[0,1,3].includes(e)?(this.state.speed=e,this.result(!0,e===0?"Simulation paused.":`Simulation running at ${e}\xD7 speed.`)):this.result(!1,"Choose pause, 1\xD7, or 3\xD7 speed.")}setPlayerName(e,t="",n=null){let s=String(e||"").trim().replace(/\s+/g," ").slice(0,40);if(s===s.toLowerCase()&&(s=s.replace(/(^|\s)\S/g,a=>a.toUpperCase())),!s)return this.result(!1,"Please enter a player name.");if(s.length<2)return this.result(!1,"Your name needs at least 2 characters.");if(this.state.playerName)return this.result(!1,"Your player name is already set. Start a new game to change it.");let r=Gr(s);return r&&!Vd(t)?this.result(!1,String(t||"").trim()?"Incorrect owner passcode.":"This name is reserved. Enter the owner passcode or choose another name."):(this.state.playerName=s,n&&typeof n.id=="string"&&(this.state.account={id:n.id.slice(0,80),provider:String(n.provider||"google").slice(0,20),name:String(n.name||s).slice(0,60),picture:/^https:\/\//.test(n.picture||"")?n.picture.slice(0,400):""}),r?(this.state.ownerMode=!0,this.state.cash=1e7,this.note("Owner startup capital unlocked: $10,000,000.","welcome"),this.result(!0,`Welcome back, ${s}. Your $10,000,000 startup capital is ready.`)):(this.state.cash=15e3,this.result(!0,`Welcome, ${s}. You start with ${rt(15e3)}. Spend it wisely.`)))}enableDreamMode(){return this.result(!1,"There is no free money in Velora. Build it.")}applyCheat(e){let t=su(e);return t?this.state.playerName?(t.apply(this),this.state.cheatsUsed+=1,this.note(`Cheat code used: ${t.label}.`,"cheat"),this.result(!0,`Cheat activated: ${t.label}.`)):this.result(!1,"Start your game before using a code."):this.result(!1,"That code does nothing.")}buyBusiness(e){let t=bt.find(s=>s.id===e);if(!t)return this.result(!1,"This business is unavailable.");if(this.state.businesses[e])return this.result(!1,"You already own this business.");let n=this.requirements(e).filter(s=>!s.met);return n.length?this.result(!1,`Not yet: ${n.map(s=>s.label).join(", ")}.`):this.state.cash<t.price?this.result(!1,`You need ${rt(t.price-Math.max(0,this.state.cash))} more to buy ${t.name}.`):(this.state.cash=at(this.state.cash-t.price),this.state.businesses[e]=1,this.state.businessState[e]=kr(),this.note(`Acquired ${t.name}.`,"business"),this.result(!0,`${t.name} is now yours. Keep it maintained and think about insurance.`))}upgradeBusiness(e){let t=bt.find(s=>s.id===e);if(!t||!this.state.businesses[e])return this.result(!1,"Buy this business before upgrading it.");let n=this.upgradeCost(e);return n===null?this.result(!1,"This business is already at its highest level."):this.state.businessState[e]?.closedDays>0?this.result(!1,`${t.name} is closed for repairs. Upgrade it once it reopens.`):this.state.cash<n?this.result(!1,`You need ${rt(n-Math.max(0,this.state.cash))} more for this upgrade.`):(this.state.cash=at(this.state.cash-n),this.state.businesses[e]+=1,this.note(`${t.name} reached level ${this.state.businesses[e]}.`,"upgrade"),this.result(!0,`${t.name} upgraded to level ${this.state.businesses[e]}. Wages grow too.`))}serviceBusiness(e){let t=bt.find(r=>r.id===e);if(!t||!this.state.businesses[e])return this.result(!1,"You do not own this business.");let n=this.state.businessState[e];if(n.condition>=99.5)return this.result(!1,`${t.name} is already in top condition.`);let s=this.serviceCost(e);return this.state.cash<s?this.result(!1,`You need ${rt(s-Math.max(0,this.state.cash))} more for this service.`):(this.state.cash=at(this.state.cash-s),n.condition=100,this.note(`Serviced ${t.name} for ${rt(s)}.`,"business"),this.result(!0,`${t.name} is back to 100% condition.`))}setInsurance(e,t){let n=bt.find(s=>s.id===e);return!n||!this.state.businesses[e]?this.result(!1,"You do not own this business."):(this.state.businessState[e].insured=!!t,this.note(`${t?"Insured":"Cancelled insurance for"} ${n.name}.`,"finance"),this.result(!0,t?`${n.name} insured for ${rt(this.insurancePremium(e))} a day. Claims cover ${.8*100}% of losses.`:`Insurance cancelled for ${n.name}. You carry the full risk now.`))}setPricing(e,t){let n=bt.find(r=>r.id===e);if(!n||!this.state.businesses[e])return this.result(!1,"You do not own this business.");if(!Object.hasOwn(an,t))return this.result(!1,"Choose Budget, Standard or Premium pricing.");let s=this.state.businessState[e];return s.pricing===t?this.result(!1,`${n.name} already uses ${an[t].label} pricing.`):(s.pricing=t,this.note(`${n.name} switched to ${an[t].label} pricing.`,"business"),this.result(!0,`${n.name}: ${an[t].label} pricing. ${an[t].note}`))}setPricingAll(e){if(!Object.hasOwn(an,e))return this.result(!1,"Choose Budget, Standard or Premium pricing.");let t=Object.keys(this.state.businesses);for(let n of t)this.state.businessState[n].pricing=e;return this.note(`All businesses switched to ${an[e].label} pricing.`,"business"),this.result(!0,`All ${t.length} businesses now use ${an[e].label} pricing.`)}setStaffPay(e,t){let n=bt.find(a=>a.id===e);if(!n||!this.state.businesses[e])return this.result(!1,"You do not own this business.");if(!Object.hasOwn(yn,t))return this.result(!1,"Choose Low, Market or Generous pay.");let s=this.state.businessState[e];if(s.pay===t)return this.result(!1,`${n.name} staff are already on ${yn[t].label.toLowerCase()} pay.`);let r=["low","market","generous"].indexOf(t)>["low","market","generous"].indexOf(s.pay);return s.pay=t,s.morale=wt(s.morale+(r?8:-12),0,100),this.note(`${n.name}: staff pay set to ${yn[t].label.toLowerCase()}.`,"business"),this.result(!0,r?`${n.name}: pay rise announced. Morale is up and people are less likely to quit.`:`${n.name}: pay cut. You save on wages, but morale dropped and more staff may quit.`)}launchCampaign(e){let t=bt.find(r=>r.id===e);if(!t||!this.state.businesses[e])return this.result(!1,"You do not own this business.");let n=this.state.businessState[e];if(n.closedDays>0)return this.result(!1,`${t.name} is closed. Market it once it reopens.`);if(n.campaignDays>0)return this.result(!1,`A campaign is already running for ${n.campaignDays} more day${n.campaignDays>1?"s":""}.`);if(n.campaignCooldown>0)return this.result(!1,`Customers need a break from ads. Next campaign in ${n.campaignCooldown} day${n.campaignCooldown>1?"s":""}.`);let s=this.campaignCost(e);return this.state.cash<s?this.result(!1,`You need ${rt(s-Math.max(0,this.state.cash))} more for this campaign.`):(this.state.cash=at(this.state.cash-s),n.campaignDays=uo,n.campaignCooldown=tu,this.note(`Launched a marketing campaign for ${t.name} (${rt(s)}).`,"business"),this.result(!0,`Campaign live: ${t.name} sales +${Math.round((jl-1)*100)}% for ${uo} days.`))}rehireStaff(e){let t=bt.find(r=>r.id===e);if(!t||!this.state.businesses[e])return this.result(!1,"You do not own this business.");let n=this.state.businessState[e];if(!n.shortDays)return this.result(!1,`${t.name} is fully staffed.`);let s=this.rehireCost(e);return this.state.cash<s?this.result(!1,`You need ${rt(s-Math.max(0,this.state.cash))} more for the recruiter.`):(this.state.cash=at(this.state.cash-s),n.shortDays=0,n.morale=wt(n.morale+5,0,100),this.note(`Hired replacement staff for ${t.name} (${rt(s)}).`,"business"),this.result(!0,`${t.name} is fully staffed again.`))}setAutoService(e){return this.state.settings.autoService=!!e,this.result(!0,e?`Facilities manager hired. Businesses below 75% are serviced automatically at a ${Math.round((1.15-1)*100)}% fee.`:"Facilities manager dismissed. Remember to service your businesses.")}sellBusiness(e){let t=bt.find(s=>s.id===e);if(!t||!this.state.businesses[e])return this.result(!1,"You do not own this business.");if(Object.keys(this.state.businesses).length<=1)return this.result(!1,"Keep at least one business. Every empire needs a base.");let n=Math.round(this.businessValue(e)*.85);return delete this.state.businesses[e],delete this.state.businessState[e],this.state.cash=at(this.state.cash+n),this.note(`Sold ${t.name} for ${rt(n)}.`,"business"),this.result(!0,`${t.name} sold for ${rt(n)} after fees.`)}saleValue(e){return Math.round(this.businessValue(e)*.85)}buyAsset(e){let t=jt.find(n=>n.id===e);return t?this.state.assets.includes(e)?this.result(!1,"You already own this item."):this.state.cash<t.price?this.result(!1,`You need ${rt(t.price-Math.max(0,this.state.cash))} more for ${t.name}.`):(this.state.cash=at(this.state.cash-t.price),this.state.assets.push(e),this.state.assetValues[e]=t.price,this.state.happiness=wt(this.state.happiness+t.happiness,0,100),this.note(`Bought ${t.name}.`,"lifestyle"),this.result(!0,`${t.name} is yours. Upkeep is ${rt(t.upkeep)} a day.`)):this.result(!1,"This item is unavailable.")}sellAsset(e){let t=jt.find(s=>s.id===e);if(!t||!this.state.assets.includes(e))return this.result(!1,"You do not own this item.");let n=Math.round(this.assetValue(e)*.92);return this.state.assets=this.state.assets.filter(s=>s!==e),delete this.state.assetValues[e],this.state.cash=at(this.state.cash+n),this.state.happiness=wt(this.state.happiness-t.happiness/2,0,100),this.note(`Sold ${t.name} for ${rt(n)}.`,"lifestyle"),this.result(!0,`${t.name} sold for ${rt(n)} after fees.`)}activityUsesLeft(e){let t=zr.find(s=>s.id===e);if(!t)return 0;let n=e==="rest"?this.today.rest:e==="meal"?this.today.meals:this.today.social;return Math.max(0,t.perDay-n)}activity(e){let t=zr.find(n=>n.id===e);return t?this.state.cash<t.cost?this.result(!1,`You need ${rt(t.cost)} for this activity.`):t.energy<0&&this.state.energy<-t.energy?this.result(!1,"Take a break to recover some energy first."):this.activityUsesLeft(e)<=0?this.result(!1,e==="rest"?"You already took your break today. Your next one is tomorrow.":e==="meal"?"Two good meals a day is plenty. More tomorrow.":"You already saw your friends today."):this.state.energy>=100&&t.energy>0?this.result(!1,"You\u2019re fully rested and ready to go."):(e==="rest"?this.today.rest+=1:e==="meal"?this.today.meals+=1:this.today.social+=1,this.state.cash=at(this.state.cash-t.cost),this.state.energy=wt(this.state.energy+t.energy,0,100),this.state.happiness=wt(this.state.happiness+t.happiness,0,100),this.note(e==="rest"?"Took a break in the park.":e==="meal"?"Enjoyed a good meal.":"Made time for friends.","life"),this.result(!0,e==="rest"?"+30 energy. You\u2019re ready for your next move.":`${t.name}: energy and happiness updated.`)):this.result(!1,"Choose an available activity.")}work(){if(this.state.day<this.state.nextWorkDay-1e-9)return this.result(!1,`You already worked today. Your next shift opens on day ${Math.ceil(this.state.nextWorkDay)}.`);if(this.state.energy<12)return this.result(!1,"You need 12 energy to work. Take a break first.");let e=this.workPay;return this.state.nextWorkDay=this.state.day+1,this.state.cash=at(this.state.cash+e),this.state.totalEarned+=e,this.state.energy-=12,this.state.happiness=wt(this.state.happiness-2,0,100),this.state.workCount+=1,this.note(`Worked a ${this.education.career.name.toLowerCase()} shift. Earned ${rt(e)}.`,"work"),this.result(!0,`Shift complete! +${rt(e)} \xB7 \u221212 energy`)}claimGoal(e){let t=this.goals.find(n=>n.id===e);return t?t.waived?this.result(!1,"This milestone is covered by your startup capital."):t.claimed?this.result(!1,"This reward has already been collected."):t.achieved?(this.state.cash=at(this.state.cash+t.reward),this.state.totalEarned+=t.reward,this.state.goalsClaimed.push(e),this.note(`Milestone reached: ${t.title}. +${rt(t.reward)} reward.`,"goal"),this.result(!0,`${t.title}! You earned ${rt(t.reward)}.`)):this.result(!1,"Complete this goal to collect its reward."):this.result(!1,"This goal is unavailable.")}reset(){let e=this.state.account;return this.state=Br(this.options.seed),this.random=lo(this.state),this.alerts=[],this.saveElapsed=0,e&&(this.state.account=e),this.result(!0,"A fresh start in Velora. Your caf\xE9 is ready.")}tick(e){if(!Number.isFinite(e)||e<=0||this.state.speed===0)return;let t=Math.min(e,3600)*this.state.speed/60,n=this.state.day+t,s=0;for(;this.state.day<n-1e-10&&s++<2e5;){let r=Math.floor(this.state.day+1e-9)+1,a=Math.min(1/0,...this.state.loans.filter(l=>l.outstanding>0).map(l=>l.nextDueDay)),o=Math.min(n,r,Math.max(this.state.day,a)),c=o-this.state.day;c>0&&this.accrue(c),this.state.day=o,a<=this.state.day+1e-10&&this.collectInstallments(),this.state.day>=r-1e-10&&(this.state.day=r,this.endOfDay())}this.state.day=Math.max(this.state.day,n),this.saveElapsed+=e,this.saveElapsed>=5&&(this.saveElapsed=0,this.save()),this.emit()}accrue(e){let t=this.rates,n=this.state,s=t.net*e;n.cash+=s,n.totalEarned+=Math.max(0,s),n.taxesPaid+=t.tax*e;let r=this.education.career.salaryPerDay>0,a=Math.max(.5,2.5-jt.filter(o=>n.assets.includes(o.id)).reduce((o,c)=>o+c.happiness,0)*.01);n.energy=wt(n.energy-(6+(r?5:0))*e,0,100),n.happiness=wt(n.happiness-a*e-(n.energy<=0?4*e:0),0,100);for(let o of Object.values(n.relationships))o.bond=wt(o.bond-.4*e,0,100)}endOfDay(){var r,a;let e=this.state,t=this.random,n=()=>{let o=0,c=0;for(;!o;)o=t();for(;!c;)c=t();return Math.sqrt(-2*Math.log(o))*Math.cos(2*Math.PI*c)};e.today=Hr(e.day);let s=e.market;if(--s.regimeDays<=0){let o=t(),c={stable:[["boom",.3],["recession",.25],["stable",.45]],boom:[["stable",.6],["recession",.15],["boom",.25]],recession:[["stable",.55],["boom",.15],["recession",.3]]}[s.regime],l=0,u="stable";for(let[h,f]of c)if(l+=f,o<=l){u=h;break}u!==s.regime&&this.note(u==="boom"?"Economy: a boom is starting. Customers are spending.":u==="recession"?"Economy: a recession has hit Velora. Expect lower sales.":"Economy: the market is settling back to normal.","market",!0),s.regime=u,s.target=u==="boom"?1.2+t()*.1:u==="recession"?.68+t()*.1:.96+t()*.08,s.regimeDays=12+Math.floor(t()*24)}s.index=wt(s.index+(s.target-s.index)*.12+n()*.015,.55,1.4);for(let o of bt){if(!e.businesses[o.id])continue;let c=(r=e.businessState)[a=o.id]||(r[a]=kr());c.condition=wt(c.condition-o.decay*(.8+t()*.4),0,100),c.closedDays>0&&(c.closedDays-=1,c.closedDays||this.note(`${o.name} has reopened.`,"business")),c.boostDays>0&&(c.boostDays-=1,c.boostDays||(c.boost=1)),c.noise=wt(1+n()*o.volatility,.5,1.6),c.campaignDays>0&&(c.campaignDays-=1,c.campaignDays||this.note(`${o.name}: marketing campaign ended.`,"business")),c.campaignCooldown>0&&(c.campaignCooldown-=1),c.shortDays>0&&(c.shortDays-=1,c.shortDays||this.note(`${o.name} is fully staffed again.`,"business"));let u=(yn[c.pay]||yn.market).morale-(c.condition<50?12:0)-(e.happiness<25?10:0)-(c.shortDays>0?8:0);if(c.morale=wt(c.morale+(u-c.morale)*.15+n()*1.5,0,100),!c.shortDays&&t()<Ql(c.morale)&&(c.shortDays=ho,c.morale=wt(c.morale-6,0,100),this.note(`${o.name}: staff quit (morale ${Math.round(c.morale)}%). Sales down 25% for ${ho} days unless you hire replacements now.`,"incident",!0)),this.rollIncident(o,c),e.settings.autoService&&c.condition<75){let h=this.serviceCost(o.id,!0);e.cash>=h&&(e.cash=at(e.cash-h),c.condition=100)}}for(let o of e.assets){let c=jt.find(u=>u.id===o),l=e.assetValues[o]??c.price;e.assetValues[o]=c.depreciation?Math.max(c.price*.35,l*(1-c.depreciation)):Math.min(c.price*4,l*(1+(c.appreciation||0)*(s.index>=1?1.5:-1)))}if(e.cash<0){let o=-e.cash*.004;e.cash=at(e.cash-o),e.overdraftDays+=1,e.credit=wt(e.credit-5,300,850),e.overdraftDays===1&&this.note(`Your account is overdrawn. Overdraft interest is ${.004*100}% a day. The bank repossesses after 7 days.`,"finance",!0),e.overdraftDays>=7&&this.repossess()}else e.overdraftDays=0,e.loans.some(o=>o.arrears>0)||(e.credit=wt(e.credit+.4,300,850))}rollIncident(e,t){let n=this.state,s=this.random,r=this.invested(e.id);if(s()<.012){t.boost=1.35+s()*.25,t.boostDays=3,this.note(`${e.name} went viral online. Sales are up for 3 days!`,"business",!0);return}let a=.02+(100-t.condition)/100*.04;if(s()>=a)return;let o=s(),c=t.insured?.8:0,l=(u,h)=>{let f=Math.round(u*(1-c));return n.cash=at(n.cash-f),t.insured?`${h}. Insurance paid ${rt(u-f)}; you paid ${rt(f)}.`:`${h}. You paid ${rt(f)}. Insurance would have covered most of it.`};if(o<.4){let u=r*(.015+s()*.025),h=t.insured?1:1+Math.floor(s()*2);t.closedDays=Math.max(t.closedDays,h),this.note(`${e.name}: equipment breakdown, closed ${h} day${h>1?"s":""}. ${l(u,"Repairs needed")}`,"incident",!0)}else if(o<.65){let u=t.condition<50,h=Math.round(r*(u?.016:.008));n.cash=at(n.cash-h),u&&(t.closedDays=Math.max(t.closedDays,2)),this.note(`${e.name}: failed a ${u?"safety":"routine"} inspection. Fined ${rt(h)}${u?" and closed 2 days. Keep it maintained":""}.`,"incident",!0)}else if(o<.88){let u=e.revenue*Math.pow(n.businesses[e.id],1.3)*1.5;this.note(`${e.name}: break-in overnight. ${l(u,"Stock and cash stolen")}`,"incident",!0)}else{let u=r*.05;this.note(`${e.name}: a customer lawsuit was settled. ${l(u,"Legal costs")}`,"incident",!0)}}repossess(){let e=this.state,t=[...e.assets.map(a=>({kind:"asset",id:a,value:this.assetValue(a)})),...Object.keys(e.businesses).map(a=>({kind:"business",id:a,value:this.businessValue(a)}))].sort((a,o)=>o.value-a.value),n=t.find(a=>a.kind==="asset")||(t.length>1?t.find(a=>a.kind==="business"):null);if(!n){e.overdraftDays=0;return}let s=Math.round(n.value*.6),r=n.kind==="asset"?jt.find(a=>a.id===n.id).name:bt.find(a=>a.id===n.id).name;n.kind==="asset"?(e.assets=e.assets.filter(a=>a!==n.id),delete e.assetValues[n.id]):(delete e.businesses[n.id],delete e.businessState[n.id]),e.cash=at(e.cash+s),e.overdraftDays=0,e.credit=wt(e.credit-40,300,850),this.note(`Repossessed: the bank seized ${r} and sold it for ${rt(s)} to cover your overdraft.`,"finance",!0)}collectInstallments(){for(let e of this.state.loans){if(e.outstanding<=0||e.nextDueDay>this.state.day+1e-10)continue;let t=at(Math.min(e.outstanding,this.state.day+1e-10>=e.dueDay?e.outstanding:e.dailyRepayment+e.arrears)),n=Math.min(t,Math.floor(Math.max(0,this.state.cash)*100+1e-7)/100);this.state.cash=at(this.state.cash-n),e.outstanding=at(e.outstanding-n),e.arrears=at(Math.min(e.outstanding,t-n)),e.nextDueDay+=1,this.state.credit=wt(this.state.credit+(e.arrears>0?-18:2),300,850),e.outstanding<=0?(this.state.credit=wt(this.state.credit+25,300,850),this.note(`${ui.find(s=>s.id===e.productId).name} paid in full.`,"finance")):e.arrears>0&&this.note(`${rt(e.arrears)} loan payment overdue. Add funds or make a payment.`,"finance",!0)}this.state.loans=this.state.loans.filter(e=>e.outstanding>0)}};var vl="170";var Zd=0,cu=1,Jd=2;var bh=1,Mr=2,jn=3,_i=0,dn=1,Dn=2,vi=0,Es=1,lu=2,uu=3,hu=4,Kd=5,Hi=100,jd=101,Qd=102,ef=103,tf=104,nf=200,sf=201,rf=202,af=203,Xo=204,qo=205,of=206,cf=207,lf=208,uf=209,hf=210,df=211,ff=212,pf=213,mf=214,Yo=0,Zo=1,Jo=2,Cs=3,Ko=4,jo=5,Qo=6,ec=7,Mh=0,gf=1,yf=2,xi=0,vf=1,xf=2,_f=3,Sr=4,bf=5,Mf=6,Sf=7;var Sh=300,Is=301,Ps=302,Xi=303,tc=304,Ka=306,nc=1e3,Wi=1001,ic=1002,_n=1003,wf=1004;var Wr=1005;var Bn=1006,po=1007;var $i=1008;var ni=1009,wh=1010,Eh=1011,hr=1012,xl=1013,qi=1014,zn=1015,wr=1016,_l=1017,bl=1018,Ds=1020,Th=35902,Ah=1021,Rh=1022,Ln=1023,Ch=1024,Ih=1025,Ts=1026,Ls=1027,Ml=1028,Sl=1029,Ph=1030,wl=1031;var El=1033,va=33776,xa=33777,_a=33778,ba=33779,sc=35840,rc=35841,ac=35842,oc=35843,cc=36196,lc=37492,uc=37496,hc=37808,dc=37809,fc=37810,pc=37811,mc=37812,gc=37813,yc=37814,vc=37815,xc=37816,_c=37817,bc=37818,Mc=37819,Sc=37820,wc=37821,Ma=36492,Ec=36494,Tc=36495,Dh=36283,Ac=36284,Rc=36285,Cc=36286;var Sa=2300,Ic=2301,mo=2302,du=2400,fu=2401,pu=2402;var Ef=3200,Tf=3201;var Lh=0,Af=1,yi="",Ft="srgb",Hs="srgb-linear",ja="linear",At="srgb";var os=7680;var mu=519,Rf=512,Cf=513,If=514,Nh=515,Pf=516,Df=517,Lf=518,Nf=519,gu=35044;var yu="300 es",ei=2e3,wa=2001,bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vu=1234567,rr=Math.PI/180,dr=180/Math.PI;function ji(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function zt(i,e,t){return Math.max(e,Math.min(t,i))}function Tl(i,e){return(i%e+e)%e}function Uf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Of(i,e,t){return i!==e?(t-i)/(e-i):0}function ar(i,e,t){return(1-t)*i+t*e}function Ff(i,e,t,n){return ar(i,e,1-Math.exp(-t*n))}function kf(i,e=1){return e-Math.abs(Tl(i,e*2)-e)}function Bf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function zf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Hf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Vf(i,e){return i+Math.random()*(e-i)}function Gf(i){return i*(.5-Math.random())}function Wf(i){i!==void 0&&(vu=i);let e=vu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $f(i){return i*rr}function Xf(i){return i*dr}function qf(i){return(i&i-1)===0&&i!==0}function Yf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jf(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),y=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*h,c*f,o*l);break;case"YZY":i.set(c*f,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*f,o*u,o*l);break;case"XZX":i.set(o*u,c*y,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*y,o*l);break;case"ZYZ":i.set(c*y,c*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ms(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function on(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Uh={DEG2RAD:rr,RAD2DEG:dr,generateUUID:ji,clamp:zt,euclideanModulo:Tl,mapLinear:Uf,inverseLerp:Of,lerp:ar,damp:Ff,pingpong:kf,smoothstep:Bf,smootherstep:zf,randInt:Hf,randFloat:Vf,randFloatSpread:Gf,seededRandom:Wf,degToRad:$f,radToDeg:Xf,isPowerOfTwo:qf,ceilPowerOfTwo:Yf,floorPowerOfTwo:Zf,setQuaternionFromProperEuler:Jf,normalize:on,denormalize:Ms},Le=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},lt=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],y=n[8],x=s[0],m=s[3],d=s[6],M=s[1],b=s[4],g=s[7],k=s[2],_=s[5],A=s[8];return r[0]=a*x+o*M+c*k,r[3]=a*m+o*b+c*_,r[6]=a*d+o*g+c*A,r[1]=l*x+u*M+h*k,r[4]=l*m+u*b+h*_,r[7]=l*d+u*g+h*A,r[2]=f*x+p*M+y*k,r[5]=f*m+p*b+y*_,r[8]=f*d+p*g+y*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*r,p=l*r-a*c,y=t*h+n*f+s*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/y;return e[0]=h*x,e[1]=(s*l-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=f*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(go.makeScale(e,t)),this}rotate(e){return this.premultiply(go.makeRotation(-e)),this}translate(e,t){return this.premultiply(go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},go=new lt;function Oh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ea(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kf(){let i=Ea("canvas");return i.style.display="block",i}var xu={};function ir(i){i in xu||(xu[i]=!0,console.warn(i))}function jf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Qf(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ep(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var vt={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===At&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===At&&(i.r=As(i.r),i.g=As(i.g),i.b=As(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yi?ja:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function As(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _u=[.64,.33,.3,.6,.15,.06],bu=[.2126,.7152,.0722],Mu=[.3127,.329],Su=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wu=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);vt.define({[Hs]:{primaries:_u,whitePoint:Mu,transfer:ja,toXYZ:Su,fromXYZ:wu,luminanceCoefficients:bu,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:_u,whitePoint:Mu,transfer:At,toXYZ:Su,fromXYZ:wu,luminanceCoefficients:bu,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}});var cs,Pc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cs===void 0&&(cs=Ea("canvas")),cs.width=e.width,cs.height=e.height;let n=cs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ea("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},tp=0,Ta=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(yo(s[a].image)):r.push(yo(s[a]))}else r=yo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function yo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var np=0,fn=class i extends bi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Wi,s=Wi,r=Bn,a=$i,o=Ln,c=ni,l=i.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=ji(),this.name="",this.source=new Ta(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nc:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nc:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Sh;fn.DEFAULT_ANISOTROPY=1;var Ut=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],y=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(y-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(y+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,g=(p+1)/2,k=(d+1)/2,_=(u+f)/4,A=(h+x)/4,D=(y+m)/4;return b>g&&b>k?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=_/n,r=A/n):g>k?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=_/s,r=D/s):k<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),n=A/r,s=D/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-y)*(m-y)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-y)/M,this.y=(h-x)/M,this.z=(f-u)/M,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dc=class extends bi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new fn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ta(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends Dc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Aa=class extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lc=class extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],f=r[a+0],p=r[a+1],y=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=y,e[t+3]=x;return}if(h!==x||c!==f||l!==p||u!==y){let m=1-o,d=c*f+l*p+u*y+h*x,M=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){let k=Math.sqrt(b),_=Math.atan2(k,d*M);m=Math.sin(m*_)/k,o=Math.sin(o*_)/k}let g=o*M;if(c=c*m+f*g,l=l*m+p*g,u=u*m+y*g,h=h*m+x*g,m===1-o){let k=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=k,l*=k,u*=k,h*=k}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],y=r[a+3];return e[t]=o*y+u*h+c*p-l*f,e[t+1]=c*y+u*f+l*h-o*p,e[t+2]=l*y+u*p+o*f-c*h,e[t+3]=u*y-o*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),f=c(n/2),p=c(s/2),y=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*p*y,this._y=l*p*h-f*u*y,this._z=l*u*y+f*p*h,this._w=l*u*h-f*p*y;break;case"YXZ":this._x=f*u*h+l*p*y,this._y=l*p*h-f*u*y,this._z=l*u*y-f*p*h,this._w=l*u*h+f*p*y;break;case"ZXY":this._x=f*u*h-l*p*y,this._y=l*p*h+f*u*y,this._z=l*u*y+f*p*h,this._w=l*u*h-f*p*y;break;case"ZYX":this._x=f*u*h-l*p*y,this._y=l*p*h+f*u*y,this._z=l*u*y-f*p*h,this._w=l*u*h+f*p*y;break;case"YZX":this._x=f*u*h+l*p*y,this._y=l*p*h+f*u*y,this._z=l*u*y-f*p*h,this._w=l*u*h-f*p*y;break;case"XZY":this._x=f*u*h-l*p*y,this._y=l*p*h-f*u*y,this._z=l*u*y+f*p*h,this._w=l*u*h+f*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Eu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vo.copy(this).projectOnVector(e),this.sub(vo)}reflect(e){return this.sub(vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vo=new H,Eu=new Mi,pn=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),Xr.subVectors(this.max,Ks),ls.subVectors(e.a,Ks),us.subVectors(e.b,Ks),hs.subVectors(e.c,Ks),hi.subVectors(us,ls),di.subVectors(hs,us),Ni.subVectors(ls,hs);let t=[0,-hi.z,hi.y,0,-di.z,di.y,0,-Ni.z,Ni.y,hi.z,0,-hi.x,di.z,0,-di.x,Ni.z,0,-Ni.x,-hi.y,hi.x,0,-di.y,di.x,0,-Ni.y,Ni.x,0];return!xo(t,ls,us,hs,Xr)||(t=[1,0,0,0,1,0,0,0,1],!xo(t,ls,us,hs,Xr))?!1:(qr.crossVectors(hi,di),t=[qr.x,qr.y,qr.z],xo(t,ls,us,hs,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},qn=[new H,new H,new H,new H,new H,new H,new H,new H],Cn=new H,$r=new pn,ls=new H,us=new H,hs=new H,hi=new H,di=new H,Ni=new H,Ks=new H,Xr=new H,qr=new H,Ui=new H;function xo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ui.fromArray(i,r);let o=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),c=e.dot(Ui),l=t.dot(Ui),u=n.dot(Ui);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var ip=new pn,js=new H,_o=new H,Si=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ip.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);let t=js.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(_o)),this.expandByPoint(js.copy(e.center).sub(_o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yn=new H,bo=new H,Yr=new H,fi=new H,Mo=new H,Zr=new H,So=new H,fr=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){bo.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(bo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Yr),o=fi.dot(this.direction),c=-fi.dot(Yr),l=fi.lengthSq(),u=Math.abs(1-a*a),h,f,p,y;if(u>0)if(h=a*c-o,f=a*o-c,y=r*u,h>=0)if(f>=-y)if(f<=y){let x=1/u;h*=x,f*=x,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f<=-y?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=y?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(bo).addScaledVector(Yr,f),p}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);let n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,s,r){Mo.subVectors(t,e),Zr.subVectors(n,e),So.crossVectors(Mo,Zr);let a=this.direction.dot(So),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,e);let c=o*this.direction.dot(Zr.crossVectors(fi,Zr));if(c<0)return null;let l=o*this.direction.dot(Mo.cross(fi));if(l<0||c+l>a)return null;let u=-o*fi.dot(So);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mt=class i{constructor(e,t,n,s,r,a,o,c,l,u,h,f,p,y,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,f,p,y,x,m)}set(e,t,n,s,r,a,o,c,l,u,h,f,p,y,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=y,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ds.setFromMatrixColumn(e,0).length(),r=1/ds.setFromMatrixColumn(e,1).length(),a=1/ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=a*u,p=a*h,y=o*u,x=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+y*l,t[5]=f-x*l,t[9]=-o*c,t[2]=x-f*l,t[6]=y+p*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*u,p=c*h,y=l*u,x=l*h;t[0]=f+x*o,t[4]=y*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-y,t[6]=x+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*u,p=c*h,y=l*u,x=l*h;t[0]=f-x*o,t[4]=-a*h,t[8]=y+p*o,t[1]=p+y*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*u,p=a*h,y=o*u,x=o*h;t[0]=c*u,t[4]=y*l-p,t[8]=f*l+x,t[1]=c*h,t[5]=x*l+f,t[9]=p*l-y,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*l,y=o*c,x=o*l;t[0]=c*u,t[4]=x-f*h,t[8]=y*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+y,t[10]=f-x*h}else if(e.order==="XZY"){let f=a*c,p=a*l,y=o*c,x=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+x,t[5]=a*u,t[9]=p*h-y,t[2]=y*h-p,t[6]=o*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sp,e,rp)}lookAt(e,t,n){let s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),pi.crossVectors(n,vn),pi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),pi.crossVectors(n,vn)),pi.normalize(),Jr.crossVectors(vn,pi),s[0]=pi.x,s[4]=Jr.x,s[8]=vn.x,s[1]=pi.y,s[5]=Jr.y,s[9]=vn.y,s[2]=pi.z,s[6]=Jr.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],y=n[2],x=n[6],m=n[10],d=n[14],M=n[3],b=n[7],g=n[11],k=n[15],_=s[0],A=s[4],D=s[8],S=s[12],v=s[1],C=s[5],W=s[9],B=s[13],G=s[2],ae=s[6],ee=s[10],$=s[14],N=s[3],K=s[7],J=s[11],se=s[15];return r[0]=a*_+o*v+c*G+l*N,r[4]=a*A+o*C+c*ae+l*K,r[8]=a*D+o*W+c*ee+l*J,r[12]=a*S+o*B+c*$+l*se,r[1]=u*_+h*v+f*G+p*N,r[5]=u*A+h*C+f*ae+p*K,r[9]=u*D+h*W+f*ee+p*J,r[13]=u*S+h*B+f*$+p*se,r[2]=y*_+x*v+m*G+d*N,r[6]=y*A+x*C+m*ae+d*K,r[10]=y*D+x*W+m*ee+d*J,r[14]=y*S+x*B+m*$+d*se,r[3]=M*_+b*v+g*G+k*N,r[7]=M*A+b*C+g*ae+k*K,r[11]=M*D+b*W+g*ee+k*J,r[15]=M*S+b*B+g*$+k*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],y=e[3],x=e[7],m=e[11],d=e[15];return y*(+r*c*h-s*l*h-r*o*f+n*l*f+s*o*p-n*c*p)+x*(+t*c*p-t*l*f+r*a*f-s*a*p+s*l*u-r*c*u)+m*(+t*l*h-t*o*p-r*a*h+n*a*p+r*o*u-n*l*u)+d*(-s*o*u-t*c*h+t*o*f+s*a*h-n*a*f+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],y=e[12],x=e[13],m=e[14],d=e[15],M=h*m*l-x*f*l+x*c*p-o*m*p-h*c*d+o*f*d,b=y*f*l-u*m*l-y*c*p+a*m*p+u*c*d-a*f*d,g=u*x*l-y*h*l+y*o*p-a*x*p-u*o*d+a*h*d,k=y*h*c-u*x*c-y*o*f+a*x*f+u*o*m-a*h*m,_=t*M+n*b+s*g+r*k;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/_;return e[0]=M*A,e[1]=(x*f*r-h*m*r-x*s*p+n*m*p+h*s*d-n*f*d)*A,e[2]=(o*m*r-x*c*r+x*s*l-n*m*l-o*s*d+n*c*d)*A,e[3]=(h*c*r-o*f*r-h*s*l+n*f*l+o*s*p-n*c*p)*A,e[4]=b*A,e[5]=(u*m*r-y*f*r+y*s*p-t*m*p-u*s*d+t*f*d)*A,e[6]=(y*c*r-a*m*r-y*s*l+t*m*l+a*s*d-t*c*d)*A,e[7]=(a*f*r-u*c*r+u*s*l-t*f*l-a*s*p+t*c*p)*A,e[8]=g*A,e[9]=(y*h*r-u*x*r-y*n*p+t*x*p+u*n*d-t*h*d)*A,e[10]=(a*x*r-y*o*r+y*n*l-t*x*l-a*n*d+t*o*d)*A,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*p-t*o*p)*A,e[12]=k*A,e[13]=(u*x*s-y*h*s+y*n*f-t*x*f-u*n*m+t*h*m)*A,e[14]=(y*o*s-a*x*s-y*n*c+t*x*c+a*n*m-t*o*m)*A,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*f+t*o*f)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,f=r*l,p=r*u,y=r*h,x=a*u,m=a*h,d=o*h,M=c*l,b=c*u,g=c*h,k=n.x,_=n.y,A=n.z;return s[0]=(1-(x+d))*k,s[1]=(p+g)*k,s[2]=(y-b)*k,s[3]=0,s[4]=(p-g)*_,s[5]=(1-(f+d))*_,s[6]=(m+M)*_,s[7]=0,s[8]=(y+b)*A,s[9]=(m-M)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ds.set(s[0],s[1],s[2]).length(),a=ds.set(s[4],s[5],s[6]).length(),o=ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],In.copy(this);let l=1/r,u=1/a,h=1/o;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ei){let c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),p,y;if(o===ei)p=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===wa)p=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ei){let c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(a-r),f=(t+e)*l,p=(n+s)*u,y,x;if(o===ei)y=(a+r)*h,x=-2*h;else if(o===wa)y=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ds=new H,In=new Mt,sp=new H(0,0,0),rp=new H(1,1,1),pi=new H,Jr=new H,vn=new H,Tu=new Mt,Au=new Mi,Hn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Au.setFromEuler(this),this.setFromQuaternion(Au,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hn.DEFAULT_ORDER="XYZ";var pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ap=0,Ru=new H,fs=new Mi,Zn=new Mt,Kr=new H,Qs=new H,op=new H,cp=new Mi,Cu=new H(1,0,0),Iu=new H(0,1,0),Pu=new H(0,0,1),Du={type:"added"},lp={type:"removed"},ps={type:"childadded",child:null},wo={type:"childremoved",child:null},Xt=class i extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new H,t=new Hn,n=new Mi,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new lt}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Cu,e)}rotateY(e){return this.rotateOnAxis(Iu,e)}rotateZ(e){return this.rotateOnAxis(Pu,e)}translateOnAxis(e,t){return Ru.copy(e).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cu,e)}translateY(e){return this.translateOnAxis(Iu,e)}translateZ(e){return this.translateOnAxis(Pu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kr.copy(e):Kr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Qs,Kr,this.up):Zn.lookAt(Kr,Qs,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(Zn),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Du),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lp),wo.child=e,this.dispatchEvent(wo),wo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Du),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,op),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),y=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Xt.DEFAULT_UP=new H(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=new H,Jn=new H,Eo=new H,Kn=new H,ms=new H,gs=new H,Lu=new H,To=new H,Ao=new H,Ro=new H,Co=new Ut,Io=new Ut,Po=new Ut,Vi=class i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Pn.subVectors(e,t),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Pn.subVectors(s,t),Jn.subVectors(n,t),Eo.subVectors(e,t);let a=Pn.dot(Pn),o=Pn.dot(Jn),c=Pn.dot(Eo),l=Jn.dot(Jn),u=Jn.dot(Eo),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(l*c-o*u)*f,y=(a*u-o*c)*f;return r.set(1-p-y,y,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Kn.x),c.addScaledVector(a,Kn.y),c.addScaledVector(o,Kn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Co.setScalar(0),Io.setScalar(0),Po.setScalar(0),Co.fromBufferAttribute(e,t),Io.fromBufferAttribute(e,n),Po.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Co,r.x),a.addScaledVector(Io,r.y),a.addScaledVector(Po,r.z),a}static isFrontFacing(e,t,n,s){return Pn.subVectors(n,t),Jn.subVectors(e,t),Pn.cross(Jn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Pn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ms.subVectors(s,n),gs.subVectors(r,n),To.subVectors(e,n);let c=ms.dot(To),l=gs.dot(To);if(c<=0&&l<=0)return t.copy(n);Ao.subVectors(e,s);let u=ms.dot(Ao),h=gs.dot(Ao);if(u>=0&&h<=u)return t.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(ms,a);Ro.subVectors(e,r);let p=ms.dot(Ro),y=gs.dot(Ro);if(y>=0&&p<=y)return t.copy(r);let x=p*l-c*y;if(x<=0&&l>=0&&y<=0)return o=l/(l-y),t.copy(n).addScaledVector(gs,o);let m=u*y-p*h;if(m<=0&&h-u>=0&&p-y>=0)return Lu.subVectors(r,s),o=(h-u)/(h-u+(p-y)),t.copy(s).addScaledVector(Lu,o);let d=1/(m+x+f);return a=x*d,o=f*d,t.copy(n).addScaledVector(ms,a).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},jr={h:0,s:0,l:0};function Do(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var st=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=vt.workingColorSpace){if(e=Tl(e,1),t=zt(t,0,1),n=zt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Do(a,r,e+1/3),this.g=Do(a,r,e),this.b=Do(a,r,e-1/3)}return vt.toWorkingColorSpace(this,s),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=Fh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return vt.fromWorkingColorSpace(en.copy(this),e),Math.round(zt(en.r*255,0,255))*65536+Math.round(zt(en.g*255,0,255))*256+Math.round(zt(en.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(en.copy(this),t);let n=en.r,s=en.g,r=en.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Ft){vt.fromWorkingColorSpace(en.copy(this),e);let t=en.r,n=en.g,s=en.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(jr);let n=ar(mi.h,jr.h,t),s=ar(mi.s,jr.s,t),r=ar(mi.l,jr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new st;st.NAMES=Fh;var up=0,wi=class extends bi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=ji(),this.name="",this.blending=Es,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xo,this.blendDst=qo,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xo&&(n.blendSrc=this.blendSrc),this.blendDst!==qo&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ns=class extends wi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ot=new H,Qr=new Le,tn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gu,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ms(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ms(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ms(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ms(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ms(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gu&&(e.usage=this.usage),e}};var Ra=class extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ca=class extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var St=class extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}},hp=0,En=new Mt,Lo=new Xt,ys=new H,xn=new pn,er=new pn,$t=new H,kt=class i extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oh(e)?Ca:Ra)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return Lo.lookAt(e),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new St(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];er.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(xn.min,er.min),xn.expandByPoint($t),$t.addVectors(xn.max,er.max),xn.expandByPoint($t)):(xn.expandByPoint(er.min),xn.expandByPoint(er.max))}xn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared($t));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)$t.fromBufferAttribute(o,l),c&&(ys.fromBufferAttribute(e,l),$t.add(ys)),s=Math.max(s,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new H,c[D]=new H;let l=new H,u=new H,h=new H,f=new Le,p=new Le,y=new Le,x=new H,m=new H;function d(D,S,v){l.fromBufferAttribute(n,D),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,v),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,S),y.fromBufferAttribute(r,v),u.sub(l),h.sub(l),p.sub(f),y.sub(f);let C=1/(p.x*y.y-y.x*p.y);isFinite(C)&&(x.copy(u).multiplyScalar(y.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-y.x).multiplyScalar(C),o[D].add(x),o[S].add(x),o[v].add(x),c[D].add(m),c[S].add(m),c[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,S=M.length;D<S;++D){let v=M[D],C=v.start,W=v.count;for(let B=C,G=C+W;B<G;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let b=new H,g=new H,k=new H,_=new H;function A(D){k.fromBufferAttribute(s,D),_.copy(k);let S=o[D];b.copy(S),b.sub(k.multiplyScalar(k.dot(S))).normalize(),g.crossVectors(_,S);let C=g.dot(c[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,C)}for(let D=0,S=M.length;D<S;++D){let v=M[D],C=v.start,W=v.count;for(let B=C,G=C+W;B<G;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new H,r=new H,a=new H,o=new H,c=new H,l=new H,u=new H,h=new H;if(e)for(let f=0,p=e.count;f<p;f+=3){let y=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,y),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u),p=0,y=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*u;for(let d=0;d<u;d++)f[y++]=l[p++]}return new tn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let f=l[u],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nu=new Mt,Oi=new fr,ea=new Si,Uu=new H,ta=new H,na=new H,ia=new H,No=new H,sa=new H,Ou=new H,ra=new H,It=class extends Xt{constructor(e=new kt,t=new Ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){sa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(No.fromBufferAttribute(h,e),a?sa.addScaledVector(No,u):sa.addScaledVector(No.sub(t),u))}t.add(sa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(ea.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(ea,Uu)===null||Oi.origin.distanceToSquared(Uu)>(e.far-e.near)**2))&&(Nu.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(Nu),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,x=f.length;y<x;y++){let m=f[y],d=a[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let g=M,k=b;g<k;g+=3){let _=o.getX(g),A=o.getX(g+1),D=o.getX(g+2);s=aa(this,d,e,n,l,u,h,_,A,D),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let y=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=y,d=x;m<d;m+=3){let M=o.getX(m),b=o.getX(m+1),g=o.getX(m+2);s=aa(this,a,e,n,l,u,h,M,b,g),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let y=0,x=f.length;y<x;y++){let m=f[y],d=a[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let g=M,k=b;g<k;g+=3){let _=g,A=g+1,D=g+2;s=aa(this,d,e,n,l,u,h,_,A,D),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let y=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=y,d=x;m<d;m+=3){let M=m,b=m+1,g=m+2;s=aa(this,a,e,n,l,u,h,M,b,g),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function dp(i,e,t,n,s,r,a,o){let c;if(e.side===dn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===_i,o),c===null)return null;ra.copy(o),ra.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ra);return l<t.near||l>t.far?null:{distance:l,point:ra.clone(),object:i}}function aa(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,ta),i.getVertexPosition(c,na),i.getVertexPosition(l,ia);let u=dp(i,e,t,n,ta,na,ia,Ou);if(u){let h=new H;Vi.getBarycoord(Ou,ta,na,ia,h),s&&(u.uv=Vi.getInterpolatedAttribute(s,o,c,l,h,new Le)),r&&(u.uv1=Vi.getInterpolatedAttribute(r,o,c,l,h,new Le)),a&&(u.normal=Vi.getInterpolatedAttribute(a,o,c,l,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new H,materialIndex:0};Vi.getNormal(ta,na,ia,f.normal),u.face=f,u.barycoord=h}return u}var Vn=class i extends kt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],f=0,p=0;y("z","y","x",-1,-1,n,t,e,a,r,0),y("z","y","x",1,-1,n,t,-e,a,r,1),y("x","z","y",1,1,e,n,t,s,a,2),y("x","z","y",1,-1,e,n,-t,s,a,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(h,2));function y(x,m,d,M,b,g,k,_,A,D,S){let v=g/A,C=k/D,W=g/2,B=k/2,G=_/2,ae=A+1,ee=D+1,$=0,N=0,K=new H;for(let J=0;J<ee;J++){let se=J*C-B;for(let he=0;he<ae;he++){let ge=he*v-W;K[x]=ge*M,K[m]=se*b,K[d]=G,l.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[d]=_>0?1:-1,u.push(K.x,K.y,K.z),h.push(he/A),h.push(1-J/D),$+=1}}for(let J=0;J<D;J++)for(let se=0;se<A;se++){let he=f+se+ae*J,ge=f+se+ae*(J+1),Z=f+(se+1)+ae*(J+1),ce=f+(se+1)+ae*J;c.push(he,ge,ce),c.push(ge,Z,ce),N+=6}o.addGroup(p,N,S),p+=N,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Us(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function cn(i){let e={};for(let t=0;t<i.length;t++){let n=Us(i[t]);for(let s in n)e[s]=n[s]}return e}function fp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function kh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}var pp={clone:Us,merge:cn},mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gn=class extends wi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=fp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ia=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gi=new H,Fu=new Le,ku=new Le,Ht=class extends Ia{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,Fu,ku),t.subVectors(ku,Fu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vs=-90,xs=1,Nc=class extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(vs,xs,e,t);s.layers=this.layers,this.add(s);let r=new Ht(vs,xs,e,t);r.layers=this.layers,this.add(r);let a=new Ht(vs,xs,e,t);a.layers=this.layers,this.add(a);let o=new Ht(vs,xs,e,t);o.layers=this.layers,this.add(o);let c=new Ht(vs,xs,e,t);c.layers=this.layers,this.add(c);let l=new Ht(vs,xs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},Pa=class extends fn{constructor(e,t,n,s,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Is,super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Uc=class extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Pa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vn(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:vi});r.uniforms.tEquirect.value=t;let a=new It(s,r),o=t.minFilter;return t.minFilter===$i&&(t.minFilter=Bn),new Nc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Uo=new H,yp=new H,vp=new lt,Qn=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Uo.subVectors(n,t).cross(yp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Uo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||vp.getNormalMatrix(e),s=this.coplanarPoint(Uo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fi=new Si,oa=new H,mr=class{constructor(e=new Qn,t=new Qn,n=new Qn,s=new Qn,r=new Qn,a=new Qn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],p=s[8],y=s[9],x=s[10],m=s[11],d=s[12],M=s[13],b=s[14],g=s[15];if(n[0].setComponents(c-r,f-l,m-p,g-d).normalize(),n[1].setComponents(c+r,f+l,m+p,g+d).normalize(),n[2].setComponents(c+a,f+u,m+y,g+M).normalize(),n[3].setComponents(c-a,f-u,m-y,g-M).normalize(),n[4].setComponents(c-o,f-h,m-x,g-b).normalize(),t===ei)n[5].setComponents(c+o,f+h,m+x,g+b).normalize();else if(t===wa)n[5].setComponents(o,h,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(oa.x=s.normal.x>0?e.max.x:e.min.x,oa.y=s.normal.y>0?e.max.y:e.min.y,oa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Bh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function xp(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,y)=>p.start-y.start);let f=0;for(let p=1;p<h.length;p++){let y=h[f],x=h[p];x.start<=y.start+y.count+1?y.count=Math.max(y.count,x.start+x.count-y.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,y=h.length;p<y;p++){let x=h[p];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Ei=class i extends kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,f=t/c,p=[],y=[],x=[],m=[];for(let d=0;d<u;d++){let M=d*f-a;for(let b=0;b<l;b++){let g=b*h-r;y.push(g,-M,0),x.push(0,0,1),m.push(b/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<o;M++){let b=M+l*d,g=M+l*(d+1),k=M+1+l*(d+1),_=M+1+l*d;p.push(b,g,_),p.push(g,k,_)}this.setIndex(p),this.setAttribute("position",new St(y,3)),this.setAttribute("normal",new St(x,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},_p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Np=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Gp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$p=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,em=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,om=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ym=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_m=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Um=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,km=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ym=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ng=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ig=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ag=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_g=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ag=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:_p,alphahash_pars_fragment:bp,alphamap_fragment:Mp,alphamap_pars_fragment:Sp,alphatest_fragment:wp,alphatest_pars_fragment:Ep,aomap_fragment:Tp,aomap_pars_fragment:Ap,batching_pars_vertex:Rp,batching_vertex:Cp,begin_vertex:Ip,beginnormal_vertex:Pp,bsdfs:Dp,iridescence_fragment:Lp,bumpmap_pars_fragment:Np,clipping_planes_fragment:Up,clipping_planes_pars_fragment:Op,clipping_planes_pars_vertex:Fp,clipping_planes_vertex:kp,color_fragment:Bp,color_pars_fragment:zp,color_pars_vertex:Hp,color_vertex:Vp,common:Gp,cube_uv_reflection_fragment:Wp,defaultnormal_vertex:$p,displacementmap_pars_vertex:Xp,displacementmap_vertex:qp,emissivemap_fragment:Yp,emissivemap_pars_fragment:Zp,colorspace_fragment:Jp,colorspace_pars_fragment:Kp,envmap_fragment:jp,envmap_common_pars_fragment:Qp,envmap_pars_fragment:em,envmap_pars_vertex:tm,envmap_physical_pars_fragment:dm,envmap_vertex:nm,fog_vertex:im,fog_pars_vertex:sm,fog_fragment:rm,fog_pars_fragment:am,gradientmap_pars_fragment:om,lightmap_pars_fragment:cm,lights_lambert_fragment:lm,lights_lambert_pars_fragment:um,lights_pars_begin:hm,lights_toon_fragment:fm,lights_toon_pars_fragment:pm,lights_phong_fragment:mm,lights_phong_pars_fragment:gm,lights_physical_fragment:ym,lights_physical_pars_fragment:vm,lights_fragment_begin:xm,lights_fragment_maps:_m,lights_fragment_end:bm,logdepthbuf_fragment:Mm,logdepthbuf_pars_fragment:Sm,logdepthbuf_pars_vertex:wm,logdepthbuf_vertex:Em,map_fragment:Tm,map_pars_fragment:Am,map_particle_fragment:Rm,map_particle_pars_fragment:Cm,metalnessmap_fragment:Im,metalnessmap_pars_fragment:Pm,morphinstance_vertex:Dm,morphcolor_vertex:Lm,morphnormal_vertex:Nm,morphtarget_pars_vertex:Um,morphtarget_vertex:Om,normal_fragment_begin:Fm,normal_fragment_maps:km,normal_pars_fragment:Bm,normal_pars_vertex:zm,normal_vertex:Hm,normalmap_pars_fragment:Vm,clearcoat_normal_fragment_begin:Gm,clearcoat_normal_fragment_maps:Wm,clearcoat_pars_fragment:$m,iridescence_pars_fragment:Xm,opaque_fragment:qm,packing:Ym,premultiplied_alpha_fragment:Zm,project_vertex:Jm,dithering_fragment:Km,dithering_pars_fragment:jm,roughnessmap_fragment:Qm,roughnessmap_pars_fragment:eg,shadowmap_pars_fragment:tg,shadowmap_pars_vertex:ng,shadowmap_vertex:ig,shadowmask_pars_fragment:sg,skinbase_vertex:rg,skinning_pars_vertex:ag,skinning_vertex:og,skinnormal_vertex:cg,specularmap_fragment:lg,specularmap_pars_fragment:ug,tonemapping_fragment:hg,tonemapping_pars_fragment:dg,transmission_fragment:fg,transmission_pars_fragment:pg,uv_pars_fragment:mg,uv_pars_vertex:gg,uv_vertex:yg,worldpos_vertex:vg,background_vert:xg,background_frag:_g,backgroundCube_vert:bg,backgroundCube_frag:Mg,cube_vert:Sg,cube_frag:wg,depth_vert:Eg,depth_frag:Tg,distanceRGBA_vert:Ag,distanceRGBA_frag:Rg,equirect_vert:Cg,equirect_frag:Ig,linedashed_vert:Pg,linedashed_frag:Dg,meshbasic_vert:Lg,meshbasic_frag:Ng,meshlambert_vert:Ug,meshlambert_frag:Og,meshmatcap_vert:Fg,meshmatcap_frag:kg,meshnormal_vert:Bg,meshnormal_frag:zg,meshphong_vert:Hg,meshphong_frag:Vg,meshphysical_vert:Gg,meshphysical_frag:Wg,meshtoon_vert:$g,meshtoon_frag:Xg,points_vert:qg,points_frag:Yg,shadow_vert:Zg,shadow_frag:Jg,sprite_vert:Kg,sprite_frag:jg},Be={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},kn={basic:{uniforms:cn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:cn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new st(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:cn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:cn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:cn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new st(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:cn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:cn([Be.points,Be.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:cn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:cn([Be.common,Be.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:cn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:cn([Be.sprite,Be.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:cn([Be.common,Be.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:cn([Be.lights,Be.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};kn.physical={uniforms:cn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var ca={r:0,b:0,g:0},ki=new Hn,Qg=new Mt;function e0(i,e,t,n,s,r,a){let o=new st(0),c=r===!0?0:1,l,u,h=null,f=0,p=null;function y(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?t:e).get(b)),b}function x(M){let b=!1,g=y(M);g===null?d(o,c):g&&g.isColor&&(d(g,1),b=!0);let k=i.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,a):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,b){let g=y(b);g&&(g.isCubeTexture||g.mapping===Ka)?(u===void 0&&(u=new It(new Vn(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Us(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(k,_,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ki.copy(b.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Qg.makeRotationFromEuler(ki)),u.material.toneMapped=vt.getTransfer(g.colorSpace)!==At,(h!==g||f!==g.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=g,f=g.version,p=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new It(new Ei(2,2),new Gn({name:"BackgroundMaterial",uniforms:Us(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=vt.getTransfer(g.colorSpace)!==At,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||f!==g.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=g,f=g.version,p=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function d(M,b){M.getRGB(ca,kh(i)),n.buffers.color.setClear(ca.r,ca.g,ca.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(M,b=1){o.set(M),c=b,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,d(o,c)},render:x,addToRenderList:m}}function t0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(v,C,W,B,G){let ae=!1,ee=h(B,W,C);r!==ee&&(r=ee,l(r.object)),ae=p(v,B,W,G),ae&&y(v,B,W,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(ae||a)&&(a=!1,g(v,C,W,B),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,C,W){let B=W.wireframe===!0,G=n[v.id];G===void 0&&(G={},n[v.id]=G);let ae=G[C.id];ae===void 0&&(ae={},G[C.id]=ae);let ee=ae[B];return ee===void 0&&(ee=f(c()),ae[B]=ee),ee}function f(v){let C=[],W=[],B=[];for(let G=0;G<t;G++)C[G]=0,W[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:W,attributeDivisors:B,object:v,attributes:{},index:null}}function p(v,C,W,B){let G=r.attributes,ae=C.attributes,ee=0,$=W.getAttributes();for(let N in $)if($[N].location>=0){let J=G[N],se=ae[N];if(se===void 0&&(N==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),N==="instanceColor"&&v.instanceColor&&(se=v.instanceColor)),J===void 0||J.attribute!==se||se&&J.data!==se.data)return!0;ee++}return r.attributesNum!==ee||r.index!==B}function y(v,C,W,B){let G={},ae=C.attributes,ee=0,$=W.getAttributes();for(let N in $)if($[N].location>=0){let J=ae[N];J===void 0&&(N==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),N==="instanceColor"&&v.instanceColor&&(J=v.instanceColor));let se={};se.attribute=J,J&&J.data&&(se.data=J.data),G[N]=se,ee++}r.attributes=G,r.attributesNum=ee,r.index=B}function x(){let v=r.newAttributes;for(let C=0,W=v.length;C<W;C++)v[C]=0}function m(v){d(v,0)}function d(v,C){let W=r.newAttributes,B=r.enabledAttributes,G=r.attributeDivisors;W[v]=1,B[v]===0&&(i.enableVertexAttribArray(v),B[v]=1),G[v]!==C&&(i.vertexAttribDivisor(v,C),G[v]=C)}function M(){let v=r.newAttributes,C=r.enabledAttributes;for(let W=0,B=C.length;W<B;W++)C[W]!==v[W]&&(i.disableVertexAttribArray(W),C[W]=0)}function b(v,C,W,B,G,ae,ee){ee===!0?i.vertexAttribIPointer(v,C,W,G,ae):i.vertexAttribPointer(v,C,W,B,G,ae)}function g(v,C,W,B){x();let G=B.attributes,ae=W.getAttributes(),ee=C.defaultAttributeValues;for(let $ in ae){let N=ae[$];if(N.location>=0){let K=G[$];if(K===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(K=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(K=v.instanceColor)),K!==void 0){let J=K.normalized,se=K.itemSize,he=e.get(K);if(he===void 0)continue;let ge=he.buffer,Z=he.type,ce=he.bytesPerElement,_e=Z===i.INT||Z===i.UNSIGNED_INT||K.gpuType===xl;if(K.isInterleavedBufferAttribute){let me=K.data,Pe=me.stride,Je=K.offset;if(me.isInstancedInterleavedBuffer){for(let qe=0;qe<N.locationSize;qe++)d(N.location+qe,me.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let qe=0;qe<N.locationSize;qe++)m(N.location+qe);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let qe=0;qe<N.locationSize;qe++)b(N.location+qe,se/N.locationSize,Z,J,Pe*ce,(Je+se/N.locationSize*qe)*ce,_e)}else{if(K.isInstancedBufferAttribute){for(let me=0;me<N.locationSize;me++)d(N.location+me,K.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let me=0;me<N.locationSize;me++)m(N.location+me);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let me=0;me<N.locationSize;me++)b(N.location+me,se/N.locationSize,Z,J,se*ce,se/N.locationSize*me*ce,_e)}}else if(ee!==void 0){let J=ee[$];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(N.location,J);break;case 3:i.vertexAttrib3fv(N.location,J);break;case 4:i.vertexAttrib4fv(N.location,J);break;default:i.vertexAttrib1fv(N.location,J)}}}}M()}function k(){D();for(let v in n){let C=n[v];for(let W in C){let B=C[W];for(let G in B)u(B[G].object),delete B[G];delete C[W]}delete n[v]}}function _(v){if(n[v.id]===void 0)return;let C=n[v.id];for(let W in C){let B=C[W];for(let G in B)u(B[G].object),delete B[G];delete C[W]}delete n[v.id]}function A(v){for(let C in n){let W=n[C];if(W[v.id]===void 0)continue;let B=W[v.id];for(let G in B)u(B[G].object),delete B[G];delete W[v.id]}}function D(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:S,dispose:k,releaseStatesOfGeometry:_,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function n0(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let y=0;y<h;y++)p+=u[y];t.update(p,n,1)}function c(l,u,h,f){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<l.length;y++)a(l[y],u[y],f[y]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let y=0;for(let x=0;x<h;x++)y+=u[x]*f[x];t.update(y,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function i0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Ln&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let D=A===wr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ni&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==zn&&!D)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),k=y>0,_=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:y,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:g,vertexTextures:k,maxSamples:_}}function s0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Qn,o=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let y=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||y===null||y.length===0||r&&!m)r?u(null):l();else{let M=r?0:n,b=M*4,g=d.clippingState||null;c.value=g,g=u(y,f,b,p);for(let k=0;k!==b;++k)g[k]=t[k];d.clippingState=g,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,y){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=c.value,y!==!0||m===null){let d=p+x*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,g=p;b!==x;++b,g+=4)a.copy(h[b]).applyMatrix4(M,o),a.normal.toArray(m,g),m[g+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function r0(i){let e=new WeakMap;function t(a,o){return o===Xi?a.mapping=Is:o===tc&&(a.mapping=Ps),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Xi||o===tc)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Uc(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Da=class extends Ia{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ss=4,Bu=[.125,.215,.35,.446,.526,.582],Gi=20,Oo=new Da,zu=new st,Fo=null,ko=0,Bo=0,zo=!1,zi=(1+Math.sqrt(5))/2,_s=1/zi,Hu=[new H(-zi,_s,0),new H(zi,_s,0),new H(-_s,0,zi),new H(_s,0,zi),new H(0,zi,-_s),new H(0,zi,_s),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],Os=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Fo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fo,ko,Bo),this._renderer.xr.enabled=zo,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:wr,format:Ln,colorSpace:Hs,depthBuffer:!1},s=Vu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=a0(r)),this._blurMaterial=o0(r,e,t)}return s}_compileMaterial(e){let t=new It(this._lodPlanes[0],e);this._renderer.compile(t,Oo)}_sceneToCubeUV(e,t,n,s){let o=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(zu),u.toneMapping=xi,u.autoClear=!1;let p=new Ns({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),y=new It(new Vn,p),x=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(zu),x=!0);for(let d=0;d<6;d++){let M=d%3;M===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):M===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));let b=this._cubeSize;la(s,M*b,d>2?b:0,b,b),u.setRenderTarget(s),x&&u.render(y,o),u.render(e,o)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Is||e.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new It(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;la(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Oo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Hu[(s-r-1)%Hu.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new It(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Gi-1),x=r/y,m=isFinite(r)?1+Math.floor(u*x):Gi;m>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);let d=[],M=0;for(let A=0;A<Gi;++A){let D=A/x,S=Math.exp(-D*D/2);d.push(S),A===0?M+=S:A<m&&(M+=2*S)}for(let A=0;A<d.length;A++)d[A]=d[A]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:b}=this;f.dTheta.value=y,f.mipInt.value=b-n;let g=this._sizeLods[s],k=3*g*(s>b-Ss?s-b+Ss:0),_=4*(this._cubeSize-g);la(t,k,_,3*g,2*g),c.setRenderTarget(t),c.render(h,Oo)}};function a0(i){let e=[],t=[],n=[],s=i,r=i-Ss+1+Bu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Ss?c=Bu[a-i+Ss-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,y=6,x=3,m=2,d=1,M=new Float32Array(x*y*p),b=new Float32Array(m*y*p),g=new Float32Array(d*y*p);for(let _=0;_<p;_++){let A=_%3*2/3-1,D=_>2?0:-1,S=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];M.set(S,x*y*_),b.set(f,m*y*_);let v=[_,_,_,_,_,_];g.set(v,d*y*_)}let k=new kt;k.setAttribute("position",new tn(M,x)),k.setAttribute("uv",new tn(b,m)),k.setAttribute("faceIndex",new tn(g,d)),e.push(k),s>Ss&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vu(i,e,t){let n=new ii(i,e,t);return n.texture.mapping=Ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function o0(i,e,t){let n=new Float32Array(Gi),s=new H(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Gu(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Wu(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Al(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function c0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Xi||c===tc,u=c===Is||c===Ps;if(l||u){let h=e.get(o),f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Os(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let p=o.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Os(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function l0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ir("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function u0(i,e,t,n){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let y in f.attributes)e.remove(f.attributes[y]);for(let y in f.morphAttributes){let x=f.morphAttributes[y];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let y in f)e.update(f[y],i.ARRAY_BUFFER);let p=h.morphAttributes;for(let y in p){let x=p[y];for(let m=0,d=x.length;m<d;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(h){let f=[],p=h.index,y=h.attributes.position,x=0;if(p!==null){let M=p.array;x=p.version;for(let b=0,g=M.length;b<g;b+=3){let k=M[b+0],_=M[b+1],A=M[b+2];f.push(k,_,_,A,A,k)}}else if(y!==void 0){let M=y.array;x=y.version;for(let b=0,g=M.length/3-1;b<g;b+=3){let k=b+0,_=b+1,A=b+2;f.push(k,_,_,A,A,k)}}else return;let m=new(Oh(f)?Ca:Ra)(f,1);m.version=x;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function h0(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function l(f,p,y){y!==0&&(i.drawElementsInstanced(n,p,r,f*a,y),t.update(p,n,y))}function u(f,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,y);let m=0;for(let d=0;d<y;d++)m+=p[d];t.update(m,n,1)}function h(f,p,y,x){if(y===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,y);let d=0;for(let M=0;M<y;M++)d+=p[M]*x[M];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function d0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function f0(i,e,t){let n=new WeakMap,s=new Ut;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==h){let S=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],b=0;p===!0&&(b=1),y===!0&&(b=2),x===!0&&(b=3);let g=o.attributes.position.count*b,k=1;g>e.maxTextureSize&&(k=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);let _=new Float32Array(g*k*4*h),A=new Aa(_,g,k,h);A.type=zn,A.needsUpdate=!0;let D=b*4;for(let v=0;v<h;v++){let C=m[v],W=d[v],B=M[v],G=g*k*4*v;for(let ae=0;ae<C.count;ae++){let ee=ae*D;p===!0&&(s.fromBufferAttribute(C,ae),_[G+ee+0]=s.x,_[G+ee+1]=s.y,_[G+ee+2]=s.z,_[G+ee+3]=0),y===!0&&(s.fromBufferAttribute(W,ae),_[G+ee+4]=s.x,_[G+ee+5]=s.y,_[G+ee+6]=s.z,_[G+ee+7]=0),x===!0&&(s.fromBufferAttribute(B,ae),_[G+ee+8]=s.x,_[G+ee+9]=s.y,_[G+ee+10]=s.z,_[G+ee+11]=B.itemSize===4?s.w:1)}}f={count:h,texture:A,size:new Le(g,k)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let y=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function p0(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var La=class extends fn{constructor(e,t,n,s,r,a,o,c,l,u=Ts){if(u!==Ts&&u!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ts&&(n=qi),n===void 0&&u===Ls&&(n=Ds),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:_n,this.minFilter=c!==void 0?c:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},zh=new fn,$u=new La(1,1),Hh=new Aa,Vh=new Lc,Gh=new Pa,Xu=[],qu=[],Yu=new Float32Array(16),Zu=new Float32Array(9),Ju=new Float32Array(4);function Vs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Xu[s];if(r===void 0&&(r=new Float32Array(s),Xu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qa(i,e){let t=qu[e];t===void 0&&(t=new Int32Array(e),qu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function m0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function g0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function y0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function v0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function x0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Ju.set(n),i.uniformMatrix2fv(this.addr,!1,Ju),Gt(t,n)}}function _0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Zu.set(n),i.uniformMatrix3fv(this.addr,!1,Zu),Gt(t,n)}}function b0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Yu.set(n),i.uniformMatrix4fv(this.addr,!1,Yu),Gt(t,n)}}function M0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function S0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function w0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function E0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function T0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function A0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function R0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function C0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function I0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?($u.compareFunction=Nh,r=$u):r=zh,t.setTexture2D(e||r,s)}function P0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Vh,s)}function D0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Gh,s)}function L0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hh,s)}function N0(i){switch(i){case 5126:return m0;case 35664:return g0;case 35665:return y0;case 35666:return v0;case 35674:return x0;case 35675:return _0;case 35676:return b0;case 5124:case 35670:return M0;case 35667:case 35671:return S0;case 35668:case 35672:return w0;case 35669:case 35673:return E0;case 5125:return T0;case 36294:return A0;case 36295:return R0;case 36296:return C0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return P0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return L0}}function U0(i,e){i.uniform1fv(this.addr,e)}function O0(i,e){let t=Vs(e,this.size,2);i.uniform2fv(this.addr,t)}function F0(i,e){let t=Vs(e,this.size,3);i.uniform3fv(this.addr,t)}function k0(i,e){let t=Vs(e,this.size,4);i.uniform4fv(this.addr,t)}function B0(i,e){let t=Vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function z0(i,e){let t=Vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function H0(i,e){let t=Vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function V0(i,e){i.uniform1iv(this.addr,e)}function G0(i,e){i.uniform2iv(this.addr,e)}function W0(i,e){i.uniform3iv(this.addr,e)}function $0(i,e){i.uniform4iv(this.addr,e)}function X0(i,e){i.uniform1uiv(this.addr,e)}function q0(i,e){i.uniform2uiv(this.addr,e)}function Y0(i,e){i.uniform3uiv(this.addr,e)}function Z0(i,e){i.uniform4uiv(this.addr,e)}function J0(i,e,t){let n=this.cache,s=e.length,r=Qa(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||zh,r[a])}function K0(i,e,t){let n=this.cache,s=e.length,r=Qa(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Vh,r[a])}function j0(i,e,t){let n=this.cache,s=e.length,r=Qa(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Gh,r[a])}function Q0(i,e,t){let n=this.cache,s=e.length,r=Qa(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Hh,r[a])}function ey(i){switch(i){case 5126:return U0;case 35664:return O0;case 35665:return F0;case 35666:return k0;case 35674:return B0;case 35675:return z0;case 35676:return H0;case 5124:case 35670:return V0;case 35667:case 35671:return G0;case 35668:case 35672:return W0;case 35669:case 35673:return $0;case 5125:return X0;case 36294:return q0;case 36295:return Y0;case 36296:return Z0;case 35678:case 36198:case 36298:case 36306:case 35682:return J0;case 35679:case 36299:case 36307:return K0;case 35680:case 36300:case 36308:case 36293:return j0;case 36289:case 36303:case 36311:case 36292:return Q0}}var Oc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=N0(t.type)}},Fc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ey(t.type)}},kc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ho=/(\w+)(\])?(\[|\.)?/g;function Ku(i,e){i.seq.push(e),i.map[e.id]=e}function ty(i,e,t){let n=i.name,s=n.length;for(Ho.lastIndex=0;;){let r=Ho.exec(n),a=Ho.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ku(t,l===void 0?new Oc(o,i,e):new Fc(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new kc(o),Ku(t,h)),t=h}}}var Rs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);ty(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function ju(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ny=37297,iy=0;function sy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Qu=new lt;function ry(i){vt._getMatrix(Qu,vt.workingColorSpace,i);let e=`mat3( ${Qu.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(i)){case ja:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function eh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+sy(i.getShaderSource(e),a)}else return s}function ay(i,e){let t=ry(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function oy(i,e){let t;switch(e){case vf:t="Linear";break;case xf:t="Reinhard";break;case _f:t="Cineon";break;case Sr:t="ACESFilmic";break;case Mf:t="AgX";break;case Sf:t="Neutral";break;case bf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ua=new H;function cy(){vt.getLuminanceCoefficients(ua);let i=ua.x.toFixed(4),e=ua.y.toFixed(4),t=ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ly(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function uy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function sr(i){return i!==""}function th(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(i){return i.replace(dy,py)}var fy=new Map;function py(i,e){let t=ut[e];if(t===void 0){let n=fy.get(e);if(n!==void 0)t=ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Bc(t)}var my=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(i){return i.replace(my,gy)}function gy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mr?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function vy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Is:case Ps:e="ENVMAP_TYPE_CUBE";break;case Ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function _y(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Mh:e="ENVMAP_BLENDING_MULTIPLY";break;case gf:e="ENVMAP_BLENDING_MIX";break;case yf:e="ENVMAP_BLENDING_ADD";break}return e}function by(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function My(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=yy(t),l=vy(t),u=xy(t),h=_y(t),f=by(t),p=ly(t),y=uy(r),x=s.createProgram(),m,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(sr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(sr).join(`
`),d.length>0&&(d+=`
`)):(m=[sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),d=[sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?ut.tonemapping_pars_fragment:"",t.toneMapping!==xi?oy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,ay("linearToOutputTexel",t.outputColorSpace),cy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),a=Bc(a),a=th(a,t),a=nh(a,t),o=Bc(o),o=th(o,t),o=nh(o,t),a=ih(a),o=ih(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let b=M+m+a,g=M+d+o,k=ju(s,s.VERTEX_SHADER,b),_=ju(s,s.FRAGMENT_SHADER,g);s.attachShader(x,k),s.attachShader(x,_),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(C){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(k).trim(),G=s.getShaderInfoLog(_).trim(),ae=!0,ee=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ae=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,k,_);else{let $=eh(s,k,"vertex"),N=eh(s,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+$+`
`+N)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(B===""||G==="")&&(ee=!1);ee&&(C.diagnostics={runnable:ae,programLog:W,vertexShader:{log:B,prefix:m},fragmentShader:{log:G,prefix:d}})}s.deleteShader(k),s.deleteShader(_),D=new Rs(s,x),S=hy(s,x)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,ny)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=k,this.fragmentShader=_,this}var Sy=0,zc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hc(e),t.set(e,n)),n}},Hc=class{constructor(e){this.id=Sy++,this.code=e,this.usedTimes=0}};function wy(i,e,t,n,s,r,a){let o=new pr,c=new zc,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,v,C,W,B){let G=W.fog,ae=B.geometry,ee=S.isMeshStandardMaterial?W.environment:null,$=(S.isMeshStandardMaterial?t:e).get(S.envMap||ee),N=$&&$.mapping===Ka?$.image.height:null,K=y[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let J=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,se=J!==void 0?J.length:0,he=0;ae.morphAttributes.position!==void 0&&(he=1),ae.morphAttributes.normal!==void 0&&(he=2),ae.morphAttributes.color!==void 0&&(he=3);let ge,Z,ce,_e;if(K){let ft=kn[K];ge=ft.vertexShader,Z=ft.fragmentShader}else ge=S.vertexShader,Z=S.fragmentShader,c.update(S),ce=c.getVertexShaderID(S),_e=c.getFragmentShaderID(S);let me=i.getRenderTarget(),Pe=i.state.buffers.depth.getReversed(),Je=B.isInstancedMesh===!0,qe=B.isBatchedMesh===!0,ot=!!S.map,F=!!S.matcap,ye=!!$,L=!!S.aoMap,Ge=!!S.lightMap,be=!!S.bumpMap,Fe=!!S.normalMap,Ce=!!S.displacementMap,Ze=!!S.emissiveMap,ke=!!S.metalnessMap,R=!!S.roughnessMap,w=S.anisotropy>0,j=S.clearcoat>0,I=S.dispersion>0,O=S.iridescence>0,X=S.sheen>0,fe=S.transmission>0,oe=w&&!!S.anisotropyMap,pe=j&&!!S.clearcoatMap,Se=j&&!!S.clearcoatNormalMap,le=j&&!!S.clearcoatRoughnessMap,xe=O&&!!S.iridescenceMap,Te=O&&!!S.iridescenceThicknessMap,Oe=X&&!!S.sheenColorMap,re=X&&!!S.sheenRoughnessMap,He=!!S.specularMap,Me=!!S.specularColorMap,Ie=!!S.specularIntensityMap,U=fe&&!!S.transmissionMap,ve=fe&&!!S.thicknessMap,Q=!!S.gradientMap,ue=!!S.alphaMap,De=S.alphaTest>0,Ue=!!S.alphaHash,nt=!!S.extensions,Et=xi;S.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Et=i.toneMapping);let Lt={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:ge,fragmentShader:Z,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:_e,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:qe,batchingColor:qe&&B._colorsTexture!==null,instancing:Je,instancingColor:Je&&B.instanceColor!==null,instancingMorph:Je&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Hs,alphaToCoverage:!!S.alphaToCoverage,map:ot,matcap:F,envMap:ye,envMapMode:ye&&$.mapping,envMapCubeUVHeight:N,aoMap:L,lightMap:Ge,bumpMap:be,normalMap:Fe,displacementMap:f&&Ce,emissiveMap:Ze,normalMapObjectSpace:Fe&&S.normalMapType===Af,normalMapTangentSpace:Fe&&S.normalMapType===Lh,metalnessMap:ke,roughnessMap:R,anisotropy:w,anisotropyMap:oe,clearcoat:j,clearcoatMap:pe,clearcoatNormalMap:Se,clearcoatRoughnessMap:le,dispersion:I,iridescence:O,iridescenceMap:xe,iridescenceThicknessMap:Te,sheen:X,sheenColorMap:Oe,sheenRoughnessMap:re,specularMap:He,specularColorMap:Me,specularIntensityMap:Ie,transmission:fe,transmissionMap:U,thicknessMap:ve,gradientMap:Q,opaque:S.transparent===!1&&S.blending===Es&&S.alphaToCoverage===!1,alphaMap:ue,alphaTest:De,alphaHash:Ue,combine:S.combine,mapUv:ot&&x(S.map.channel),aoMapUv:L&&x(S.aoMap.channel),lightMapUv:Ge&&x(S.lightMap.channel),bumpMapUv:be&&x(S.bumpMap.channel),normalMapUv:Fe&&x(S.normalMap.channel),displacementMapUv:Ce&&x(S.displacementMap.channel),emissiveMapUv:Ze&&x(S.emissiveMap.channel),metalnessMapUv:ke&&x(S.metalnessMap.channel),roughnessMapUv:R&&x(S.roughnessMap.channel),anisotropyMapUv:oe&&x(S.anisotropyMap.channel),clearcoatMapUv:pe&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Se&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:re&&x(S.sheenRoughnessMap.channel),specularMapUv:He&&x(S.specularMap.channel),specularColorMapUv:Me&&x(S.specularColorMap.channel),specularIntensityMapUv:Ie&&x(S.specularIntensityMap.channel),transmissionMapUv:U&&x(S.transmissionMap.channel),thicknessMapUv:ve&&x(S.thicknessMap.channel),alphaMapUv:ue&&x(S.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(Fe||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!ae.attributes.uv&&(ot||ue),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Pe,skinning:B.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:he,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:ot&&S.map.isVideoTexture===!0&&vt.getTransfer(S.map.colorSpace)===At,decodeVideoTextureEmissive:Ze&&S.emissiveMap.isVideoTexture===!0&&vt.getTransfer(S.emissiveMap.colorSpace)===At,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Dn,flipSided:S.side===dn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:nt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&S.extensions.multiDraw===!0||qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function d(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let C in S.defines)v.push(C),v.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(M(v,S),b(v,S),v.push(i.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function M(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function b(S,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),S.push(o.mask)}function g(S){let v=y[S.type],C;if(v){let W=kn[v];C=pp.clone(W.uniforms)}else C=S.uniforms;return C}function k(S,v){let C;for(let W=0,B=u.length;W<B;W++){let G=u[W];if(G.cacheKey===v){C=G,++C.usedTimes;break}}return C===void 0&&(C=new My(i,v,S,r),u.push(C)),C}function _(S){if(--S.usedTimes===0){let v=u.indexOf(S);u[v]=u[u.length-1],u.pop(),S.destroy()}}function A(S){c.remove(S)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:g,acquireProgram:k,releaseProgram:_,releaseShaderCache:A,programs:u,dispose:D}}function Ey(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ty(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function rh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ah(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,f,p,y,x,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:y,renderOrder:h.renderOrder,z:x,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=y,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function o(h,f,p,y,x,m){let d=a(h,f,p,y,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(h,f,p,y,x,m){let d=a(h,f,p,y,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||Ty),n.length>1&&n.sort(f||rh),s.length>1&&s.sort(f||rh)}function u(){for(let h=e,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Ay(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new ah,i.set(n,[a])):s>=r.length?(a=new ah,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ry(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new st};break;case"SpotLight":t={position:new H,direction:new H,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function Cy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Iy=0;function Py(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Dy(i){let e=new Ry,t=Cy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new H);let s=new H,r=new Mt,a=new Mt;function o(l){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,y=0,x=0,m=0,d=0,M=0,b=0,g=0,k=0,_=0,A=0;l.sort(Py);for(let S=0,v=l.length;S<v;S++){let C=l[S],W=C.color,B=C.intensity,G=C.distance,ae=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=W.r*B,h+=W.g*B,f+=W.b*B;else if(C.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(C.sh.coefficients[ee],B);A++}else if(C.isDirectionalLight){let ee=e.get(C);if(ee.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let $=C.shadow,N=t.get(C);N.shadowIntensity=$.intensity,N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize=$.mapSize,n.directionalShadow[p]=N,n.directionalShadowMap[p]=ae,n.directionalShadowMatrix[p]=C.shadow.matrix,M++}n.directional[p]=ee,p++}else if(C.isSpotLight){let ee=e.get(C);ee.position.setFromMatrixPosition(C.matrixWorld),ee.color.copy(W).multiplyScalar(B),ee.distance=G,ee.coneCos=Math.cos(C.angle),ee.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),ee.decay=C.decay,n.spot[x]=ee;let $=C.shadow;if(C.map&&(n.spotLightMap[k]=C.map,k++,$.updateMatrices(C),C.castShadow&&_++),n.spotLightMatrix[x]=$.matrix,C.castShadow){let N=t.get(C);N.shadowIntensity=$.intensity,N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize=$.mapSize,n.spotShadow[x]=N,n.spotShadowMap[x]=ae,g++}x++}else if(C.isRectAreaLight){let ee=e.get(C);ee.color.copy(W).multiplyScalar(B),ee.halfWidth.set(C.width*.5,0,0),ee.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=ee,m++}else if(C.isPointLight){let ee=e.get(C);if(ee.color.copy(C.color).multiplyScalar(C.intensity),ee.distance=C.distance,ee.decay=C.decay,C.castShadow){let $=C.shadow,N=t.get(C);N.shadowIntensity=$.intensity,N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize=$.mapSize,N.shadowCameraNear=$.camera.near,N.shadowCameraFar=$.camera.far,n.pointShadow[y]=N,n.pointShadowMap[y]=ae,n.pointShadowMatrix[y]=C.shadow.matrix,b++}n.point[y]=ee,y++}else if(C.isHemisphereLight){let ee=e.get(C);ee.skyColor.copy(C.color).multiplyScalar(B),ee.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[d]=ee,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let D=n.hash;(D.directionalLength!==p||D.pointLength!==y||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==d||D.numDirectionalShadows!==M||D.numPointShadows!==b||D.numSpotShadows!==g||D.numSpotMaps!==k||D.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=y,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=g+k-_,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=_,n.numLightProbes=A,D.directionalLength=p,D.pointLength=y,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=d,D.numDirectionalShadows=M,D.numPointShadows=b,D.numSpotShadows=g,D.numSpotMaps=k,D.numLightProbes=A,n.version=Iy++)}function c(l,u){let h=0,f=0,p=0,y=0,x=0,m=u.matrixWorldInverse;for(let d=0,M=l.length;d<M;d++){let b=l[d];if(b.isDirectionalLight){let g=n.directional[h];g.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),h++}else if(b.isSpotLight){let g=n.spot[p];g.position.setFromMatrixPosition(b.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let g=n.rectArea[y];g.position.setFromMatrixPosition(b.matrixWorld),g.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),g.halfWidth.set(b.width*.5,0,0),g.halfHeight.set(0,b.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){let g=n.point[f];g.position.setFromMatrixPosition(b.matrixWorld),g.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let g=n.hemi[x];g.direction.setFromMatrixPosition(b.matrixWorld),g.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function oh(i){let e=new Dy(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Ly(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new oh(i),e.set(s,[o])):r>=a.length?(o=new oh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Vc=class extends wi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gc=class extends wi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Oy(i,e,t){let n=new mr,s=new Le,r=new Le,a=new Ut,o=new Vc({depthPacking:Tf}),c=new Gc,l={},u=t.maxTextureSize,h={[_i]:dn,[dn]:_i,[Dn]:Dn},f=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:Ny,fragmentShader:Uy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let y=new kt;y.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new It(y,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bh;let d=this.type;this.render=function(_,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||_.length===0)return;let S=i.getRenderTarget(),v=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),W=i.state;W.setBlending(vi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let B=d!==jn&&this.type===jn,G=d===jn&&this.type!==jn;for(let ae=0,ee=_.length;ae<ee;ae++){let $=_[ae],N=$.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let K=N.getFrameExtents();if(s.multiply(K),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/K.x),s.x=r.x*K.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/K.y),s.y=r.y*K.y,N.mapSize.y=r.y)),N.map===null||B===!0||G===!0){let se=this.type!==jn?{minFilter:_n,magFilter:_n}:{};N.map!==null&&N.map.dispose(),N.map=new ii(s.x,s.y,se),N.map.texture.name=$.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();let J=N.getViewportCount();for(let se=0;se<J;se++){let he=N.getViewport(se);a.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),W.viewport(a),N.updateMatrices($,se),n=N.getFrustum(),g(A,D,N.camera,$,this.type)}N.isPointLightShadow!==!0&&this.type===jn&&M(N,D),N.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,v,C)};function M(_,A){let D=e.update(x);f.defines.VSM_SAMPLES!==_.blurSamples&&(f.defines.VSM_SAMPLES=_.blurSamples,p.defines.VSM_SAMPLES=_.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new ii(s.x,s.y)),f.uniforms.shadow_pass.value=_.map.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,i.setRenderTarget(_.mapPass),i.clear(),i.renderBufferDirect(A,null,D,f,x,null),p.uniforms.shadow_pass.value=_.mapPass.texture,p.uniforms.resolution.value=_.mapSize,p.uniforms.radius.value=_.radius,i.setRenderTarget(_.map),i.clear(),i.renderBufferDirect(A,null,D,p,x,null)}function b(_,A,D,S){let v=null,C=D.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(C!==void 0)v=C;else if(v=D.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let W=v.uuid,B=A.uuid,G=l[W];G===void 0&&(G={},l[W]=G);let ae=G[B];ae===void 0&&(ae=v.clone(),G[B]=ae,A.addEventListener("dispose",k)),v=ae}if(v.visible=A.visible,v.wireframe=A.wireframe,S===jn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:h[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let W=i.properties.get(v);W.light=D}return v}function g(_,A,D,S,v){if(_.visible===!1)return;if(_.layers.test(A.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&v===jn)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,_.matrixWorld);let B=e.update(_),G=_.material;if(Array.isArray(G)){let ae=B.groups;for(let ee=0,$=ae.length;ee<$;ee++){let N=ae[ee],K=G[N.materialIndex];if(K&&K.visible){let J=b(_,K,S,v);_.onBeforeShadow(i,_,A,D,B,J,N),i.renderBufferDirect(D,null,B,J,_,N),_.onAfterShadow(i,_,A,D,B,J,N)}}}else if(G.visible){let ae=b(_,G,S,v);_.onBeforeShadow(i,_,A,D,B,ae,null),i.renderBufferDirect(D,null,B,ae,_,null),_.onAfterShadow(i,_,A,D,B,ae,null)}}let W=_.children;for(let B=0,G=W.length;B<G;B++)g(W[B],A,D,S,v)}function k(_){_.target.removeEventListener("dispose",k);for(let D in l){let S=l[D],v=_.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var Fy={[Yo]:Zo,[Jo]:Qo,[Ko]:ec,[Cs]:jo,[Zo]:Yo,[Qo]:Jo,[ec]:Ko,[jo]:Cs};function ky(i,e){function t(){let U=!1,ve=new Ut,Q=null,ue=new Ut(0,0,0,0);return{setMask:function(De){Q!==De&&!U&&(i.colorMask(De,De,De,De),Q=De)},setLocked:function(De){U=De},setClear:function(De,Ue,nt,Et,Lt){Lt===!0&&(De*=Et,Ue*=Et,nt*=Et),ve.set(De,Ue,nt,Et),ue.equals(ve)===!1&&(i.clearColor(De,Ue,nt,Et),ue.copy(ve))},reset:function(){U=!1,Q=null,ue.set(-1,0,0,0)}}}function n(){let U=!1,ve=!1,Q=null,ue=null,De=null;return{setReversed:function(Ue){if(ve!==Ue){let nt=e.get("EXT_clip_control");ve?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT);let Et=De;De=null,this.setClear(Et)}ve=Ue},getReversed:function(){return ve},setTest:function(Ue){Ue?me(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(Ue){Q!==Ue&&!U&&(i.depthMask(Ue),Q=Ue)},setFunc:function(Ue){if(ve&&(Ue=Fy[Ue]),ue!==Ue){switch(Ue){case Yo:i.depthFunc(i.NEVER);break;case Zo:i.depthFunc(i.ALWAYS);break;case Jo:i.depthFunc(i.LESS);break;case Cs:i.depthFunc(i.LEQUAL);break;case Ko:i.depthFunc(i.EQUAL);break;case jo:i.depthFunc(i.GEQUAL);break;case Qo:i.depthFunc(i.GREATER);break;case ec:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=Ue}},setLocked:function(Ue){U=Ue},setClear:function(Ue){De!==Ue&&(ve&&(Ue=1-Ue),i.clearDepth(Ue),De=Ue)},reset:function(){U=!1,Q=null,ue=null,De=null,ve=!1}}}function s(){let U=!1,ve=null,Q=null,ue=null,De=null,Ue=null,nt=null,Et=null,Lt=null;return{setTest:function(ft){U||(ft?me(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(ft){ve!==ft&&!U&&(i.stencilMask(ft),ve=ft)},setFunc:function(ft,Bt,Kt){(Q!==ft||ue!==Bt||De!==Kt)&&(i.stencilFunc(ft,Bt,Kt),Q=ft,ue=Bt,De=Kt)},setOp:function(ft,Bt,Kt){(Ue!==ft||nt!==Bt||Et!==Kt)&&(i.stencilOp(ft,Bt,Kt),Ue=ft,nt=Bt,Et=Kt)},setLocked:function(ft){U=ft},setClear:function(ft){Lt!==ft&&(i.clearStencil(ft),Lt=ft)},reset:function(){U=!1,ve=null,Q=null,ue=null,De=null,Ue=null,nt=null,Et=null,Lt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},h={},f=new WeakMap,p=[],y=null,x=!1,m=null,d=null,M=null,b=null,g=null,k=null,_=null,A=new st(0,0,0),D=0,S=!1,v=null,C=null,W=null,B=null,G=null,ae=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,$=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(N)[1]),ee=$>=1):N.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),ee=$>=2);let K=null,J={},se=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),ge=new Ut().fromArray(se),Z=new Ut().fromArray(he);function ce(U,ve,Q,ue){let De=new Uint8Array(4),Ue=i.createTexture();i.bindTexture(U,Ue),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let nt=0;nt<Q;nt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(ve+nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return Ue}let _e={};_e[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(i.DEPTH_TEST),a.setFunc(Cs),be(!1),Fe(cu),me(i.CULL_FACE),L(vi);function me(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Pe(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Je(U,ve){return h[U]!==ve?(i.bindFramebuffer(U,ve),h[U]=ve,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ve),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function qe(U,ve){let Q=p,ue=!1;if(U){Q=f.get(ve),Q===void 0&&(Q=[],f.set(ve,Q));let De=U.textures;if(Q.length!==De.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Ue=0,nt=De.length;Ue<nt;Ue++)Q[Ue]=i.COLOR_ATTACHMENT0+Ue;Q.length=De.length,ue=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ue=!0);ue&&i.drawBuffers(Q)}function ot(U){return y!==U?(i.useProgram(U),y=U,!0):!1}let F={[Hi]:i.FUNC_ADD,[jd]:i.FUNC_SUBTRACT,[Qd]:i.FUNC_REVERSE_SUBTRACT};F[ef]=i.MIN,F[tf]=i.MAX;let ye={[nf]:i.ZERO,[sf]:i.ONE,[rf]:i.SRC_COLOR,[Xo]:i.SRC_ALPHA,[hf]:i.SRC_ALPHA_SATURATE,[lf]:i.DST_COLOR,[of]:i.DST_ALPHA,[af]:i.ONE_MINUS_SRC_COLOR,[qo]:i.ONE_MINUS_SRC_ALPHA,[uf]:i.ONE_MINUS_DST_COLOR,[cf]:i.ONE_MINUS_DST_ALPHA,[df]:i.CONSTANT_COLOR,[ff]:i.ONE_MINUS_CONSTANT_COLOR,[pf]:i.CONSTANT_ALPHA,[mf]:i.ONE_MINUS_CONSTANT_ALPHA};function L(U,ve,Q,ue,De,Ue,nt,Et,Lt,ft){if(U===vi){x===!0&&(Pe(i.BLEND),x=!1);return}if(x===!1&&(me(i.BLEND),x=!0),U!==Kd){if(U!==m||ft!==S){if((d!==Hi||g!==Hi)&&(i.blendEquation(i.FUNC_ADD),d=Hi,g=Hi),ft)switch(U){case Es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lu:i.blendFunc(i.ONE,i.ONE);break;case uu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case uu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,b=null,k=null,_=null,A.set(0,0,0),D=0,m=U,S=ft}return}De=De||ve,Ue=Ue||Q,nt=nt||ue,(ve!==d||De!==g)&&(i.blendEquationSeparate(F[ve],F[De]),d=ve,g=De),(Q!==M||ue!==b||Ue!==k||nt!==_)&&(i.blendFuncSeparate(ye[Q],ye[ue],ye[Ue],ye[nt]),M=Q,b=ue,k=Ue,_=nt),(Et.equals(A)===!1||Lt!==D)&&(i.blendColor(Et.r,Et.g,Et.b,Lt),A.copy(Et),D=Lt),m=U,S=!1}function Ge(U,ve){U.side===Dn?Pe(i.CULL_FACE):me(i.CULL_FACE);let Q=U.side===dn;ve&&(Q=!Q),be(Q),U.blending===Es&&U.transparent===!1?L(vi):L(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let ue=U.stencilWrite;o.setTest(ue),ue&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ze(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(U){v!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),v=U)}function Fe(U){U!==Zd?(me(i.CULL_FACE),U!==C&&(U===cu?i.cullFace(i.BACK):U===Jd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),C=U}function Ce(U){U!==W&&(ee&&i.lineWidth(U),W=U)}function Ze(U,ve,Q){U?(me(i.POLYGON_OFFSET_FILL),(B!==ve||G!==Q)&&(i.polygonOffset(ve,Q),B=ve,G=Q)):Pe(i.POLYGON_OFFSET_FILL)}function ke(U){U?me(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function R(U){U===void 0&&(U=i.TEXTURE0+ae-1),K!==U&&(i.activeTexture(U),K=U)}function w(U,ve,Q){Q===void 0&&(K===null?Q=i.TEXTURE0+ae-1:Q=K);let ue=J[Q];ue===void 0&&(ue={type:void 0,texture:void 0},J[Q]=ue),(ue.type!==U||ue.texture!==ve)&&(K!==Q&&(i.activeTexture(Q),K=Q),i.bindTexture(U,ve||_e[U]),ue.type=U,ue.texture=ve)}function j(){let U=J[K];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function I(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(U){ge.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ge.copy(U))}function re(U){Z.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Z.copy(U))}function He(U,ve){let Q=l.get(ve);Q===void 0&&(Q=new WeakMap,l.set(ve,Q));let ue=Q.get(U);ue===void 0&&(ue=i.getUniformBlockIndex(ve,U.name),Q.set(U,ue))}function Me(U,ve){let ue=l.get(ve).get(U);c.get(ve)!==ue&&(i.uniformBlockBinding(ve,ue,U.__bindingPointIndex),c.set(ve,ue))}function Ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},K=null,J={},h={},f=new WeakMap,p=[],y=null,x=!1,m=null,d=null,M=null,b=null,g=null,k=null,_=null,A=new st(0,0,0),D=0,S=!1,v=null,C=null,W=null,B=null,G=null,ge.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:me,disable:Pe,bindFramebuffer:Je,drawBuffers:qe,useProgram:ot,setBlending:L,setMaterial:Ge,setFlipSided:be,setCullFace:Fe,setLineWidth:Ce,setPolygonOffset:Ze,setScissorTest:ke,activeTexture:R,bindTexture:w,unbindTexture:j,compressedTexImage2D:I,compressedTexImage3D:O,texImage2D:xe,texImage3D:Te,updateUBOMapping:He,uniformBlockBinding:Me,texStorage2D:Se,texStorage3D:le,texSubImage2D:X,texSubImage3D:fe,compressedTexSubImage2D:oe,compressedTexSubImage3D:pe,scissor:Oe,viewport:re,reset:Ie}}function ch(i,e,t,n){let s=By(n);switch(t){case Ah:return i*e;case Ch:return i*e;case Ih:return i*e*2;case Ml:return i*e/s.components*s.byteLength;case Sl:return i*e/s.components*s.byteLength;case Ph:return i*e*2/s.components*s.byteLength;case wl:return i*e*2/s.components*s.byteLength;case Rh:return i*e*3/s.components*s.byteLength;case Ln:return i*e*4/s.components*s.byteLength;case El:return i*e*4/s.components*s.byteLength;case va:case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _a:case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rc:case oc:return Math.max(i,16)*Math.max(e,8)/4;case sc:case ac:return Math.max(i,8)*Math.max(e,8)/2;case cc:case lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case fc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case pc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case mc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case gc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case yc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case vc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case wc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ma:case Ec:case Tc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Dh:case Ac:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Rc:case Cc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function By(i){switch(i){case ni:case wh:return{byteLength:1,components:1};case hr:case Eh:case wr:return{byteLength:2,components:1};case _l:case bl:return{byteLength:2,components:4};case qi:case xl:case zn:return{byteLength:4,components:1};case Th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function zy(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Le,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,w){return p?new OffscreenCanvas(R,w):Ea("canvas")}function x(R,w,j){let I=1,O=ke(R);if((O.width>j||O.height>j)&&(I=j/Math.max(O.width,O.height)),I<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let X=Math.floor(I*O.width),fe=Math.floor(I*O.height);h===void 0&&(h=y(X,fe));let oe=w?y(X,fe):h;return oe.width=X,oe.height=fe,oe.getContext("2d").drawImage(R,0,0,X,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+X+"x"+fe+")."),oe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){i.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(R,w,j,I,O=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X=w;if(w===i.RED&&(j===i.FLOAT&&(X=i.R32F),j===i.HALF_FLOAT&&(X=i.R16F),j===i.UNSIGNED_BYTE&&(X=i.R8)),w===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(X=i.R8UI),j===i.UNSIGNED_SHORT&&(X=i.R16UI),j===i.UNSIGNED_INT&&(X=i.R32UI),j===i.BYTE&&(X=i.R8I),j===i.SHORT&&(X=i.R16I),j===i.INT&&(X=i.R32I)),w===i.RG&&(j===i.FLOAT&&(X=i.RG32F),j===i.HALF_FLOAT&&(X=i.RG16F),j===i.UNSIGNED_BYTE&&(X=i.RG8)),w===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(X=i.RG8UI),j===i.UNSIGNED_SHORT&&(X=i.RG16UI),j===i.UNSIGNED_INT&&(X=i.RG32UI),j===i.BYTE&&(X=i.RG8I),j===i.SHORT&&(X=i.RG16I),j===i.INT&&(X=i.RG32I)),w===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(X=i.RGB8UI),j===i.UNSIGNED_SHORT&&(X=i.RGB16UI),j===i.UNSIGNED_INT&&(X=i.RGB32UI),j===i.BYTE&&(X=i.RGB8I),j===i.SHORT&&(X=i.RGB16I),j===i.INT&&(X=i.RGB32I)),w===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),j===i.UNSIGNED_INT&&(X=i.RGBA32UI),j===i.BYTE&&(X=i.RGBA8I),j===i.SHORT&&(X=i.RGBA16I),j===i.INT&&(X=i.RGBA32I)),w===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),w===i.RGBA){let fe=O?ja:vt.getTransfer(I);j===i.FLOAT&&(X=i.RGBA32F),j===i.HALF_FLOAT&&(X=i.RGBA16F),j===i.UNSIGNED_BYTE&&(X=fe===At?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function g(R,w){let j;return R?w===null||w===qi||w===Ds?j=i.DEPTH24_STENCIL8:w===zn?j=i.DEPTH32F_STENCIL8:w===hr&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===qi||w===Ds?j=i.DEPTH_COMPONENT24:w===zn?j=i.DEPTH_COMPONENT32F:w===hr&&(j=i.DEPTH_COMPONENT16),j}function k(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==_n&&R.minFilter!==Bn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function _(R){let w=R.target;w.removeEventListener("dispose",_),D(w),w.isVideoTexture&&u.delete(w)}function A(R){let w=R.target;w.removeEventListener("dispose",A),v(w)}function D(R){let w=n.get(R);if(w.__webglInit===void 0)return;let j=R.source,I=f.get(j);if(I){let O=I[w.__cacheKey];O.usedTimes--,O.usedTimes===0&&S(R),Object.keys(I).length===0&&f.delete(j)}n.remove(R)}function S(R){let w=n.get(R);i.deleteTexture(w.__webglTexture);let j=R.source,I=f.get(j);delete I[w.__cacheKey],a.memory.textures--}function v(R){let w=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(w.__webglFramebuffer[I]))for(let O=0;O<w.__webglFramebuffer[I].length;O++)i.deleteFramebuffer(w.__webglFramebuffer[I][O]);else i.deleteFramebuffer(w.__webglFramebuffer[I]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[I])}else{if(Array.isArray(w.__webglFramebuffer))for(let I=0;I<w.__webglFramebuffer.length;I++)i.deleteFramebuffer(w.__webglFramebuffer[I]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let I=0;I<w.__webglColorRenderbuffer.length;I++)w.__webglColorRenderbuffer[I]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[I]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let j=R.textures;for(let I=0,O=j.length;I<O;I++){let X=n.get(j[I]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(j[I])}n.remove(R)}let C=0;function W(){C=0}function B(){let R=C;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function G(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function ae(R,w){let j=n.get(R);if(R.isVideoTexture&&Ce(R),R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){let I=R.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(j,R,w);return}}t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+w)}function ee(R,w){let j=n.get(R);if(R.version>0&&j.__version!==R.version){Z(j,R,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+w)}function $(R,w){let j=n.get(R);if(R.version>0&&j.__version!==R.version){Z(j,R,w);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+w)}function N(R,w){let j=n.get(R);if(R.version>0&&j.__version!==R.version){ce(j,R,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+w)}let K={[nc]:i.REPEAT,[Wi]:i.CLAMP_TO_EDGE,[ic]:i.MIRRORED_REPEAT},J={[_n]:i.NEAREST,[wf]:i.NEAREST_MIPMAP_NEAREST,[Wr]:i.NEAREST_MIPMAP_LINEAR,[Bn]:i.LINEAR,[po]:i.LINEAR_MIPMAP_NEAREST,[$i]:i.LINEAR_MIPMAP_LINEAR},se={[Rf]:i.NEVER,[Nf]:i.ALWAYS,[Cf]:i.LESS,[Nh]:i.LEQUAL,[If]:i.EQUAL,[Lf]:i.GEQUAL,[Pf]:i.GREATER,[Df]:i.NOTEQUAL};function he(R,w){if(w.type===zn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Bn||w.magFilter===po||w.magFilter===Wr||w.magFilter===$i||w.minFilter===Bn||w.minFilter===po||w.minFilter===Wr||w.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,K[w.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,K[w.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,K[w.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,J[w.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,J[w.minFilter]),w.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,se[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===_n||w.minFilter!==Wr&&w.minFilter!==$i||w.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ge(R,w){let j=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",_));let I=w.source,O=f.get(I);O===void 0&&(O={},f.set(I,O));let X=G(w);if(X!==R.__cacheKey){O[X]===void 0&&(O[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),O[X].usedTimes++;let fe=O[R.__cacheKey];fe!==void 0&&(O[R.__cacheKey].usedTimes--,fe.usedTimes===0&&S(w)),R.__cacheKey=X,R.__webglTexture=O[X].texture}return j}function Z(R,w,j){let I=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(I=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(I=i.TEXTURE_3D);let O=ge(R,w),X=w.source;t.bindTexture(I,R.__webglTexture,i.TEXTURE0+j);let fe=n.get(X);if(X.version!==fe.__version||O===!0){t.activeTexture(i.TEXTURE0+j);let oe=vt.getPrimaries(vt.workingColorSpace),pe=w.colorSpace===yi?null:vt.getPrimaries(w.colorSpace),Se=w.colorSpace===yi||oe===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let le=x(w.image,!1,s.maxTextureSize);le=Ze(w,le);let xe=r.convert(w.format,w.colorSpace),Te=r.convert(w.type),Oe=b(w.internalFormat,xe,Te,w.colorSpace,w.isVideoTexture);he(I,w);let re,He=w.mipmaps,Me=w.isVideoTexture!==!0,Ie=fe.__version===void 0||O===!0,U=X.dataReady,ve=k(w,le);if(w.isDepthTexture)Oe=g(w.format===Ls,w.type),Ie&&(Me?t.texStorage2D(i.TEXTURE_2D,1,Oe,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Oe,le.width,le.height,0,xe,Te,null));else if(w.isDataTexture)if(He.length>0){Me&&Ie&&t.texStorage2D(i.TEXTURE_2D,ve,Oe,He[0].width,He[0].height);for(let Q=0,ue=He.length;Q<ue;Q++)re=He[Q],Me?U&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,re.width,re.height,xe,Te,re.data):t.texImage2D(i.TEXTURE_2D,Q,Oe,re.width,re.height,0,xe,Te,re.data);w.generateMipmaps=!1}else Me?(Ie&&t.texStorage2D(i.TEXTURE_2D,ve,Oe,le.width,le.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,xe,Te,le.data)):t.texImage2D(i.TEXTURE_2D,0,Oe,le.width,le.height,0,xe,Te,le.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Me&&Ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Oe,He[0].width,He[0].height,le.depth);for(let Q=0,ue=He.length;Q<ue;Q++)if(re=He[Q],w.format!==Ln)if(xe!==null)if(Me){if(U)if(w.layerUpdates.size>0){let De=ch(re.width,re.height,w.format,w.type);for(let Ue of w.layerUpdates){let nt=re.data.subarray(Ue*De/re.data.BYTES_PER_ELEMENT,(Ue+1)*De/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Ue,re.width,re.height,1,xe,nt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,re.width,re.height,le.depth,xe,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Oe,re.width,re.height,le.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,re.width,re.height,le.depth,xe,Te,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Oe,re.width,re.height,le.depth,0,xe,Te,re.data)}else{Me&&Ie&&t.texStorage2D(i.TEXTURE_2D,ve,Oe,He[0].width,He[0].height);for(let Q=0,ue=He.length;Q<ue;Q++)re=He[Q],w.format!==Ln?xe!==null?Me?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,re.width,re.height,xe,re.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Oe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?U&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,re.width,re.height,xe,Te,re.data):t.texImage2D(i.TEXTURE_2D,Q,Oe,re.width,re.height,0,xe,Te,re.data)}else if(w.isDataArrayTexture)if(Me){if(Ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Oe,le.width,le.height,le.depth),U)if(w.layerUpdates.size>0){let Q=ch(le.width,le.height,w.format,w.type);for(let ue of w.layerUpdates){let De=le.data.subarray(ue*Q/le.data.BYTES_PER_ELEMENT,(ue+1)*Q/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,le.width,le.height,1,xe,Te,De)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,xe,Te,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,le.width,le.height,le.depth,0,xe,Te,le.data);else if(w.isData3DTexture)Me?(Ie&&t.texStorage3D(i.TEXTURE_3D,ve,Oe,le.width,le.height,le.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,xe,Te,le.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,le.width,le.height,le.depth,0,xe,Te,le.data);else if(w.isFramebufferTexture){if(Ie)if(Me)t.texStorage2D(i.TEXTURE_2D,ve,Oe,le.width,le.height);else{let Q=le.width,ue=le.height;for(let De=0;De<ve;De++)t.texImage2D(i.TEXTURE_2D,De,Oe,Q,ue,0,xe,Te,null),Q>>=1,ue>>=1}}else if(He.length>0){if(Me&&Ie){let Q=ke(He[0]);t.texStorage2D(i.TEXTURE_2D,ve,Oe,Q.width,Q.height)}for(let Q=0,ue=He.length;Q<ue;Q++)re=He[Q],Me?U&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,xe,Te,re):t.texImage2D(i.TEXTURE_2D,Q,Oe,xe,Te,re);w.generateMipmaps=!1}else if(Me){if(Ie){let Q=ke(le);t.texStorage2D(i.TEXTURE_2D,ve,Oe,Q.width,Q.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Te,le)}else t.texImage2D(i.TEXTURE_2D,0,Oe,xe,Te,le);m(w)&&d(I),fe.__version=X.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ce(R,w,j){if(w.image.length!==6)return;let I=ge(R,w),O=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+j);let X=n.get(O);if(O.version!==X.__version||I===!0){t.activeTexture(i.TEXTURE0+j);let fe=vt.getPrimaries(vt.workingColorSpace),oe=w.colorSpace===yi?null:vt.getPrimaries(w.colorSpace),pe=w.colorSpace===yi||fe===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Se=w.isCompressedTexture||w.image[0].isCompressedTexture,le=w.image[0]&&w.image[0].isDataTexture,xe=[];for(let ue=0;ue<6;ue++)!Se&&!le?xe[ue]=x(w.image[ue],!0,s.maxCubemapSize):xe[ue]=le?w.image[ue].image:w.image[ue],xe[ue]=Ze(w,xe[ue]);let Te=xe[0],Oe=r.convert(w.format,w.colorSpace),re=r.convert(w.type),He=b(w.internalFormat,Oe,re,w.colorSpace),Me=w.isVideoTexture!==!0,Ie=X.__version===void 0||I===!0,U=O.dataReady,ve=k(w,Te);he(i.TEXTURE_CUBE_MAP,w);let Q;if(Se){Me&&Ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,He,Te.width,Te.height);for(let ue=0;ue<6;ue++){Q=xe[ue].mipmaps;for(let De=0;De<Q.length;De++){let Ue=Q[De];w.format!==Ln?Oe!==null?Me?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,0,0,Ue.width,Ue.height,Oe,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,He,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Me?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,0,0,Ue.width,Ue.height,Oe,re,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,He,Ue.width,Ue.height,0,Oe,re,Ue.data)}}}else{if(Q=w.mipmaps,Me&&Ie){Q.length>0&&ve++;let ue=ke(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,He,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(le){Me?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,xe[ue].width,xe[ue].height,Oe,re,xe[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,He,xe[ue].width,xe[ue].height,0,Oe,re,xe[ue].data);for(let De=0;De<Q.length;De++){let nt=Q[De].image[ue].image;Me?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,0,0,nt.width,nt.height,Oe,re,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,He,nt.width,nt.height,0,Oe,re,nt.data)}}else{Me?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Oe,re,xe[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,He,Oe,re,xe[ue]);for(let De=0;De<Q.length;De++){let Ue=Q[De];Me?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,0,0,Oe,re,Ue.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,He,Oe,re,Ue.image[ue])}}}m(w)&&d(i.TEXTURE_CUBE_MAP),X.__version=O.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function _e(R,w,j,I,O,X){let fe=r.convert(j.format,j.colorSpace),oe=r.convert(j.type),pe=b(j.internalFormat,fe,oe,j.colorSpace),Se=n.get(w),le=n.get(j);if(le.__renderTarget=w,!Se.__hasExternalTextures){let xe=Math.max(1,w.width>>X),Te=Math.max(1,w.height>>X);O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?t.texImage3D(O,X,pe,xe,Te,w.depth,0,fe,oe,null):t.texImage2D(O,X,pe,xe,Te,0,fe,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Fe(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,I,O,le.__webglTexture,0,be(w)):(O===i.TEXTURE_2D||O>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,I,O,le.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(R,w,j){if(i.bindRenderbuffer(i.RENDERBUFFER,R),w.depthBuffer){let I=w.depthTexture,O=I&&I.isDepthTexture?I.type:null,X=g(w.stencilBuffer,O),fe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=be(w);Fe(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,X,w.width,w.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,X,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,X,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,R)}else{let I=w.textures;for(let O=0;O<I.length;O++){let X=I[O],fe=r.convert(X.format,X.colorSpace),oe=r.convert(X.type),pe=b(X.internalFormat,fe,oe,X.colorSpace),Se=be(w);j&&Fe(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,pe,w.width,w.height):Fe(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,pe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,pe,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let I=n.get(w.depthTexture);I.__renderTarget=w,(!I.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ae(w.depthTexture,0);let O=I.__webglTexture,X=be(w);if(w.depthTexture.format===Ts)Fe(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,O,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,O,0);else if(w.depthTexture.format===Ls)Fe(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,O,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function Je(R){let w=n.get(R),j=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){let I=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),I){let O=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,I.removeEventListener("dispose",O)};I.addEventListener("dispose",O),w.__depthDisposeCallback=O}w.__boundDepthTexture=I}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Pe(w.__webglFramebuffer,R)}else if(j){w.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[I]),w.__webglDepthbuffer[I]===void 0)w.__webglDepthbuffer[I]=i.createRenderbuffer(),me(w.__webglDepthbuffer[I],R,!1);else{let O=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=w.__webglDepthbuffer[I];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,O,i.RENDERBUFFER,X)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),me(w.__webglDepthbuffer,R,!1);else{let I=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,O),i.framebufferRenderbuffer(i.FRAMEBUFFER,I,i.RENDERBUFFER,O)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(R,w,j){let I=n.get(R);w!==void 0&&_e(I.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&Je(R)}function ot(R){let w=R.texture,j=n.get(R),I=n.get(w);R.addEventListener("dispose",A);let O=R.textures,X=R.isWebGLCubeRenderTarget===!0,fe=O.length>1;if(fe||(I.__webglTexture===void 0&&(I.__webglTexture=i.createTexture()),I.__version=w.version,a.memory.textures++),X){j.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer[oe]=[];for(let pe=0;pe<w.mipmaps.length;pe++)j.__webglFramebuffer[oe][pe]=i.createFramebuffer()}else j.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer=[];for(let oe=0;oe<w.mipmaps.length;oe++)j.__webglFramebuffer[oe]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(fe)for(let oe=0,pe=O.length;oe<pe;oe++){let Se=n.get(O[oe]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Fe(R)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let oe=0;oe<O.length;oe++){let pe=O[oe];j.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[oe]);let Se=r.convert(pe.format,pe.colorSpace),le=r.convert(pe.type),xe=b(pe.internalFormat,Se,le,pe.colorSpace,R.isXRRenderTarget===!0),Te=be(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,xe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,j.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),me(j.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture),he(i.TEXTURE_CUBE_MAP,w);for(let oe=0;oe<6;oe++)if(w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)_e(j.__webglFramebuffer[oe][pe],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe);else _e(j.__webglFramebuffer[oe],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(w)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let oe=0,pe=O.length;oe<pe;oe++){let Se=O[oe],le=n.get(Se);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),he(i.TEXTURE_2D,Se),_e(j.__webglFramebuffer,R,Se,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,0),m(Se)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,I.__webglTexture),he(oe,w),w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)_e(j.__webglFramebuffer[pe],R,w,i.COLOR_ATTACHMENT0,oe,pe);else _e(j.__webglFramebuffer,R,w,i.COLOR_ATTACHMENT0,oe,0);m(w)&&d(oe),t.unbindTexture()}R.depthBuffer&&Je(R)}function F(R){let w=R.textures;for(let j=0,I=w.length;j<I;j++){let O=w[j];if(m(O)){let X=M(R),fe=n.get(O).__webglTexture;t.bindTexture(X,fe),d(X),t.unbindTexture()}}}let ye=[],L=[];function Ge(R){if(R.samples>0){if(Fe(R)===!1){let w=R.textures,j=R.width,I=R.height,O=i.COLOR_BUFFER_BIT,X=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(R),oe=w.length>1;if(oe)for(let pe=0;pe<w.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let pe=0;pe<w.length;pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(O|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(O|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[pe]);let Se=n.get(w[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Se,0)}i.blitFramebuffer(0,0,j,I,0,0,j,I,O,i.NEAREST),c===!0&&(ye.length=0,L.length=0,ye.push(i.COLOR_ATTACHMENT0+pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ye.push(X),L.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let pe=0;pe<w.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,fe.__webglColorRenderbuffer[pe]);let Se=n.get(w[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,Se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let w=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function be(R){return Math.min(s.maxSamples,R.samples)}function Fe(R){let w=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ce(R){let w=a.render.frame;u.get(R)!==w&&(u.set(R,w),R.update())}function Ze(R,w){let j=R.colorSpace,I=R.format,O=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||j!==Hs&&j!==yi&&(vt.getTransfer(j)===At?(I!==Ln||O!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),w}function ke(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=W,this.setTexture2D=ae,this.setTexture2DArray=ee,this.setTexture3D=$,this.setTextureCube=N,this.rebindTextures=qe,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Fe}function Hy(i,e){function t(n,s=yi){let r,a=vt.getTransfer(s);if(n===ni)return i.UNSIGNED_BYTE;if(n===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Th)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wh)return i.BYTE;if(n===Eh)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===xl)return i.INT;if(n===qi)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===wr)return i.HALF_FLOAT;if(n===Ah)return i.ALPHA;if(n===Rh)return i.RGB;if(n===Ln)return i.RGBA;if(n===Ch)return i.LUMINANCE;if(n===Ih)return i.LUMINANCE_ALPHA;if(n===Ts)return i.DEPTH_COMPONENT;if(n===Ls)return i.DEPTH_STENCIL;if(n===Ml)return i.RED;if(n===Sl)return i.RED_INTEGER;if(n===Ph)return i.RG;if(n===wl)return i.RG_INTEGER;if(n===El)return i.RGBA_INTEGER;if(n===va||n===xa||n===_a||n===ba)if(a===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sc||n===rc||n===ac||n===oc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cc||n===lc||n===uc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cc||n===lc)return a===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hc||n===dc||n===fc||n===pc||n===mc||n===gc||n===yc||n===vc||n===xc||n===_c||n===bc||n===Mc||n===Sc||n===wc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_c)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ma||n===Ec||n===Tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ma)return a===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dh||n===Ac||n===Rc||n===Cc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ma)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Wc=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ct=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vy={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,y=.005;l.inputState.pinching&&f>p+y?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-y&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vy)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,$c=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new fn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Gn({vertexShader:Gy,fragmentShader:Wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new Ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xc=class extends bi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,y=null,x=new $c,m=t.getContextAttributes(),d=null,M=null,b=[],g=[],k=new Le,_=null,A=new Ht;A.viewport=new Ut;let D=new Ht;D.viewport=new Ut;let S=[A,D],v=new Wc,C=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ce=b[Z];return ce===void 0&&(ce=new or,b[Z]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Z){let ce=b[Z];return ce===void 0&&(ce=new or,b[Z]=ce),ce.getGripSpace()},this.getHand=function(Z){let ce=b[Z];return ce===void 0&&(ce=new or,b[Z]=ce),ce.getHandSpace()};function B(Z){let ce=g.indexOf(Z.inputSource);if(ce===-1)return;let _e=b[ce];_e!==void 0&&(_e.update(Z.inputSource,Z.frame,l||a),_e.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",ae);for(let Z=0;Z<b.length;Z++){let ce=g[Z];ce!==null&&(g[Z]=null,b[Z].disconnect(ce))}C=null,W=null,x.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,M=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",ae),m.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(k),s.renderState.layers===void 0){let ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ii(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ce=null,_e=null,me=null;m.depth&&(me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=m.stencil?Ls:Ts,_e=m.stencil?Ds:qi);let Pe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(Pe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new ii(f.textureWidth,f.textureHeight,{format:Ln,type:ni,depthTexture:new La(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ae(Z){for(let ce=0;ce<Z.removed.length;ce++){let _e=Z.removed[ce],me=g.indexOf(_e);me>=0&&(g[me]=null,b[me].disconnect(_e))}for(let ce=0;ce<Z.added.length;ce++){let _e=Z.added[ce],me=g.indexOf(_e);if(me===-1){for(let Je=0;Je<b.length;Je++)if(Je>=g.length){g.push(_e),me=Je;break}else if(g[Je]===null){g[Je]=_e,me=Je;break}if(me===-1)break}let Pe=b[me];Pe&&Pe.connect(_e)}}let ee=new H,$=new H;function N(Z,ce,_e){ee.setFromMatrixPosition(ce.matrixWorld),$.setFromMatrixPosition(_e.matrixWorld);let me=ee.distanceTo($),Pe=ce.projectionMatrix.elements,Je=_e.projectionMatrix.elements,qe=Pe[14]/(Pe[10]-1),ot=Pe[14]/(Pe[10]+1),F=(Pe[9]+1)/Pe[5],ye=(Pe[9]-1)/Pe[5],L=(Pe[8]-1)/Pe[0],Ge=(Je[8]+1)/Je[0],be=qe*L,Fe=qe*Ge,Ce=me/(-L+Ge),Ze=Ce*-L;if(ce.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ze),Z.translateZ(Ce),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Pe[10]===-1)Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let ke=qe+Ce,R=ot+Ce,w=be-Ze,j=Fe+(me-Ze),I=F*ot/R*ke,O=ye*ot/R*ke;Z.projectionMatrix.makePerspective(w,j,I,O,ke,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function K(Z,ce){ce===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ce.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ce=Z.near,_e=Z.far;x.texture!==null&&(x.depthNear>0&&(ce=x.depthNear),x.depthFar>0&&(_e=x.depthFar)),v.near=D.near=A.near=ce,v.far=D.far=A.far=_e,(C!==v.near||W!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,W=v.far),A.layers.mask=Z.layers.mask|2,D.layers.mask=Z.layers.mask|4,v.layers.mask=A.layers.mask|D.layers.mask;let me=Z.parent,Pe=v.cameras;K(v,me);for(let Je=0;Je<Pe.length;Je++)K(Pe[Je],me);Pe.length===2?N(v,A,D):v.projectionMatrix.copy(A.projectionMatrix),J(Z,v,me)};function J(Z,ce,_e){_e===null?Z.matrix.copy(ce.matrixWorld):(Z.matrix.copy(_e.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ce.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=dr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let se=null;function he(Z,ce){if(u=ce.getViewerPose(l||a),y=ce,u!==null){let _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let me=!1;_e.length!==v.cameras.length&&(v.cameras.length=0,me=!0);for(let Je=0;Je<_e.length;Je++){let qe=_e[Je],ot=null;if(p!==null)ot=p.getViewport(qe);else{let ye=h.getViewSubImage(f,qe);ot=ye.viewport,Je===0&&(e.setRenderTargetTextures(M,ye.colorTexture,f.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(M))}let F=S[Je];F===void 0&&(F=new Ht,F.layers.enable(Je),F.viewport=new Ut,S[Je]=F),F.matrix.fromArray(qe.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(qe.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(ot.x,ot.y,ot.width,ot.height),Je===0&&(v.matrix.copy(F.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),me===!0&&v.cameras.push(F)}let Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){let Je=h.getDepthInformation(_e[0]);Je&&Je.isValid&&Je.texture&&x.init(e,Je,s.renderState)}}for(let _e=0;_e<b.length;_e++){let me=g[_e],Pe=b[_e];me!==null&&Pe!==void 0&&Pe.update(me,ce,l||a)}se&&se(Z,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),y=null}let ge=new Bh;ge.setAnimationLoop(he),this.setAnimationLoop=function(Z){se=Z},this.dispose=function(){}}},Bi=new Hn,$y=new Mt;function Xy(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,kh(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,b,g){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,g)):d.isMeshMatcapMaterial?(r(m,d),y(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,M,b):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===dn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===dn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let M=e.get(d),b=M.envMap,g=M.envMapRotation;b&&(m.envMap.value=b,Bi.copy(g),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),m.envMapRotation.value.setFromMatrix4($y.makeRotationFromEuler(Bi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,M,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===dn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function qy(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){let g=b.program;n.uniformBlockBinding(M,g)}function l(M,b){let g=s[M.id];g===void 0&&(y(M),g=u(M),s[M.id]=g,M.addEventListener("dispose",m));let k=b.program;n.updateUBOMapping(M,k);let _=e.render.frame;r[M.id]!==_&&(f(M),r[M.id]=_)}function u(M){let b=h();M.__bindingPointIndex=b;let g=i.createBuffer(),k=M.__size,_=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,k,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,g),g}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let b=s[M.id],g=M.uniforms,k=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let _=0,A=g.length;_<A;_++){let D=Array.isArray(g[_])?g[_]:[g[_]];for(let S=0,v=D.length;S<v;S++){let C=D[S];if(p(C,_,S,k)===!0){let W=C.__offset,B=Array.isArray(C.value)?C.value:[C.value],G=0;for(let ae=0;ae<B.length;ae++){let ee=B[ae],$=x(ee);typeof ee=="number"||typeof ee=="boolean"?(C.__data[0]=ee,i.bufferSubData(i.UNIFORM_BUFFER,W+G,C.__data)):ee.isMatrix3?(C.__data[0]=ee.elements[0],C.__data[1]=ee.elements[1],C.__data[2]=ee.elements[2],C.__data[3]=0,C.__data[4]=ee.elements[3],C.__data[5]=ee.elements[4],C.__data[6]=ee.elements[5],C.__data[7]=0,C.__data[8]=ee.elements[6],C.__data[9]=ee.elements[7],C.__data[10]=ee.elements[8],C.__data[11]=0):(ee.toArray(C.__data,G),G+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,b,g,k){let _=M.value,A=b+"_"+g;if(k[A]===void 0)return typeof _=="number"||typeof _=="boolean"?k[A]=_:k[A]=_.clone(),!0;{let D=k[A];if(typeof _=="number"||typeof _=="boolean"){if(D!==_)return k[A]=_,!0}else if(D.equals(_)===!1)return D.copy(_),!0}return!1}function y(M){let b=M.uniforms,g=0,k=16;for(let A=0,D=b.length;A<D;A++){let S=Array.isArray(b[A])?b[A]:[b[A]];for(let v=0,C=S.length;v<C;v++){let W=S[v],B=Array.isArray(W.value)?W.value:[W.value];for(let G=0,ae=B.length;G<ae;G++){let ee=B[G],$=x(ee),N=g%k,K=N%$.boundary,J=N+K;g+=K,J!==0&&k-J<$.storage&&(g+=k-J),W.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=g,g+=$.storage}}}let _=g%k;return _>0&&(g+=k-_),M.__size=g,M.__cache={},this}function x(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){let b=M.target;b.removeEventListener("dispose",m);let g=a.indexOf(b.__bindingPointIndex);a.splice(g,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}var Fs=class{constructor(e={}){let{canvas:t=Kf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let y=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,M=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this.toneMapping=xi,this.toneMappingExposure=1;let g=this,k=!1,_=0,A=0,D=null,S=-1,v=null,C=new Ut,W=new Ut,B=null,G=new st(0),ae=0,ee=t.width,$=t.height,N=1,K=null,J=null,se=new Ut(0,0,ee,$),he=new Ut(0,0,ee,$),ge=!1,Z=new mr,ce=!1,_e=!1,me=new Mt,Pe=new Mt,Je=new H,qe=new Ut,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},F=!1;function ye(){return D===null?N:1}let L=n;function Ge(E,q){return t.getContext(E,q)}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vl}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),L===null){let q="webgl2";if(L=Ge(q,E),L===null)throw Ge(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let be,Fe,Ce,Ze,ke,R,w,j,I,O,X,fe,oe,pe,Se,le,xe,Te,Oe,re,He,Me,Ie,U;function ve(){be=new l0(L),be.init(),Me=new Hy(L,be),Fe=new i0(L,be,e,Me),Ce=new ky(L,be),Fe.reverseDepthBuffer&&f&&Ce.buffers.depth.setReversed(!0),Ze=new d0(L),ke=new Ey,R=new zy(L,be,Ce,ke,Fe,Me,Ze),w=new r0(g),j=new c0(g),I=new xp(L),Ie=new t0(L,I),O=new u0(L,I,Ze,Ie),X=new p0(L,O,I,Ze),Oe=new f0(L,Fe,R),le=new s0(ke),fe=new wy(g,w,j,be,Fe,Ie,le),oe=new Xy(g,ke),pe=new Ay,Se=new Ly(be),Te=new e0(g,w,j,Ce,X,p,c),xe=new Oy(g,X,Fe),U=new qy(L,Ze,Fe,Ce),re=new n0(L,be,Ze),He=new h0(L,be,Ze),Ze.programs=fe.programs,g.capabilities=Fe,g.extensions=be,g.properties=ke,g.renderLists=pe,g.shadowMap=xe,g.state=Ce,g.info=Ze}ve();let Q=new Xc(g,L);this.xr=Q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let E=be.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=be.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(E){E!==void 0&&(N=E,this.setSize(ee,$,!1))},this.getSize=function(E){return E.set(ee,$)},this.setSize=function(E,q,ne=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=E,$=q,t.width=Math.floor(E*N),t.height=Math.floor(q*N),ne===!0&&(t.style.width=E+"px",t.style.height=q+"px"),this.setViewport(0,0,E,q)},this.getDrawingBufferSize=function(E){return E.set(ee*N,$*N).floor()},this.setDrawingBufferSize=function(E,q,ne){ee=E,$=q,N=ne,t.width=Math.floor(E*ne),t.height=Math.floor(q*ne),this.setViewport(0,0,E,q)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(se)},this.setViewport=function(E,q,ne,ie){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,q,ne,ie),Ce.viewport(C.copy(se).multiplyScalar(N).round())},this.getScissor=function(E){return E.copy(he)},this.setScissor=function(E,q,ne,ie){E.isVector4?he.set(E.x,E.y,E.z,E.w):he.set(E,q,ne,ie),Ce.scissor(W.copy(he).multiplyScalar(N).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(E){Ce.setScissorTest(ge=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){J=E},this.getClearColor=function(E){return E.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(E=!0,q=!0,ne=!0){let ie=0;if(E){let Y=!1;if(D!==null){let Ae=D.texture.format;Y=Ae===El||Ae===wl||Ae===Sl}if(Y){let Ae=D.texture.type,ze=Ae===ni||Ae===qi||Ae===hr||Ae===Ds||Ae===_l||Ae===bl,We=Te.getClearColor(),$e=Te.getClearAlpha(),et=We.r,Ke=We.g,Ve=We.b;ze?(y[0]=et,y[1]=Ke,y[2]=Ve,y[3]=$e,L.clearBufferuiv(L.COLOR,0,y)):(x[0]=et,x[1]=Ke,x[2]=Ve,x[3]=$e,L.clearBufferiv(L.COLOR,0,x))}else ie|=L.COLOR_BUFFER_BIT}q&&(ie|=L.DEPTH_BUFFER_BIT),ne&&(ie|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),pe.dispose(),Se.dispose(),ke.dispose(),w.dispose(),j.dispose(),X.dispose(),Ie.dispose(),U.dispose(),fe.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",An),Q.removeEventListener("sessionend",Un),Mn.stop()};function ue(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;let E=Ze.autoReset,q=xe.enabled,ne=xe.autoUpdate,ie=xe.needsUpdate,Y=xe.type;ve(),Ze.autoReset=E,xe.enabled=q,xe.autoUpdate=ne,xe.needsUpdate=ie,xe.type=Y}function Ue(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function nt(E){let q=E.target;q.removeEventListener("dispose",nt),Et(q)}function Et(E){Lt(E),ke.remove(E)}function Lt(E){let q=ke.get(E).programs;q!==void 0&&(q.forEach(function(ne){fe.releaseProgram(ne)}),E.isShaderMaterial&&fe.releaseShaderCache(E))}this.renderBufferDirect=function(E,q,ne,ie,Y,Ae){q===null&&(q=ot);let ze=Y.isMesh&&Y.matrixWorld.determinant()<0,We=Ur(E,q,ne,ie,Y);Ce.setMaterial(ie,ze);let $e=ne.index,et=1;if(ie.wireframe===!0){if($e=O.getWireframeAttribute(ne),$e===void 0)return;et=2}let Ke=ne.drawRange,Ve=ne.attributes.position,dt=Ke.start*et,xt=(Ke.start+Ke.count)*et;Ae!==null&&(dt=Math.max(dt,Ae.start*et),xt=Math.min(xt,(Ae.start+Ae.count)*et)),$e!==null?(dt=Math.max(dt,0),xt=Math.min(xt,$e.count)):Ve!=null&&(dt=Math.max(dt,0),xt=Math.min(xt,Ve.count));let it=xt-dt;if(it<0||it===1/0)return;Ie.setup(Y,ie,We,ne,$e);let qt,pt=re;if($e!==null&&(qt=I.get($e),pt=He,pt.setIndex(qt)),Y.isMesh)ie.wireframe===!0?(Ce.setLineWidth(ie.wireframeLinewidth*ye()),pt.setMode(L.LINES)):pt.setMode(L.TRIANGLES);else if(Y.isLine){let Xe=ie.linewidth;Xe===void 0&&(Xe=1),Ce.setLineWidth(Xe*ye()),Y.isLineSegments?pt.setMode(L.LINES):Y.isLineLoop?pt.setMode(L.LINE_LOOP):pt.setMode(L.LINE_STRIP)}else Y.isPoints?pt.setMode(L.POINTS):Y.isSprite&&pt.setMode(L.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)pt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))pt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Xe=Y._multiDrawStarts,gn=Y._multiDrawCounts,yt=Y._multiDrawCount,sn=$e?I.get($e).bytesPerElement:1,un=ke.get(ie).currentProgram.getUniforms();for(let Yt=0;Yt<yt;Yt++)un.setValue(L,"_gl_DrawID",Yt),pt.render(Xe[Yt]/sn,gn[Yt])}else if(Y.isInstancedMesh)pt.renderInstances(dt,it,Y.count);else if(ne.isInstancedBufferGeometry){let Xe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,gn=Math.min(ne.instanceCount,Xe);pt.renderInstances(dt,it,gn)}else pt.render(dt,it)};function ft(E,q,ne){E.transparent===!0&&E.side===Dn&&E.forceSinglePass===!1?(E.side=dn,E.needsUpdate=!0,as(E,q,ne),E.side=_i,E.needsUpdate=!0,as(E,q,ne),E.side=Dn):as(E,q,ne)}this.compile=function(E,q,ne=null){ne===null&&(ne=E),d=Se.get(ne),d.init(q),b.push(d),ne.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),E!==ne&&E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),d.setupLights();let ie=new Set;return E.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Ae=Y.material;if(Ae)if(Array.isArray(Ae))for(let ze=0;ze<Ae.length;ze++){let We=Ae[ze];ft(We,ne,Y),ie.add(We)}else ft(Ae,ne,Y),ie.add(Ae)}),b.pop(),d=null,ie},this.compileAsync=function(E,q,ne=null){let ie=this.compile(E,q,ne);return new Promise(Y=>{function Ae(){if(ie.forEach(function(ze){ke.get(ze).currentProgram.isReady()&&ie.delete(ze)}),ie.size===0){Y(E);return}setTimeout(Ae,10)}be.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Bt=null;function Kt(E){Bt&&Bt(E)}function An(){Mn.stop()}function Un(){Mn.start()}let Mn=new Bh;Mn.setAnimationLoop(Kt),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(E){Bt=E,Q.setAnimationLoop(E),E===null?Mn.stop():Mn.start()},Q.addEventListener("sessionstart",An),Q.addEventListener("sessionend",Un),this.render=function(E,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(q),q=Q.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,q,D),d=Se.get(E,b.length),d.init(q),b.push(d),Pe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Z.setFromProjectionMatrix(Pe),_e=this.localClippingEnabled,ce=le.init(this.clippingPlanes,_e),m=pe.get(E,M.length),m.init(),M.push(m),Q.enabled===!0&&Q.isPresenting===!0){let Ae=g.xr.getDepthSensingMesh();Ae!==null&&Rn(Ae,q,-1/0,g.sortObjects)}Rn(E,q,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(K,J),F=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,F&&Te.addToRenderList(m,E),this.info.render.frame++,ce===!0&&le.beginShadows();let ne=d.state.shadowsArray;xe.render(ne,E,q),ce===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let ie=m.opaque,Y=m.transmissive;if(d.setupLights(),q.isArrayCamera){let Ae=q.cameras;if(Y.length>0)for(let ze=0,We=Ae.length;ze<We;ze++){let $e=Ae[ze];$n(ie,Y,E,$e)}F&&Te.render(E);for(let ze=0,We=Ae.length;ze<We;ze++){let $e=Ae[ze];qs(m,E,$e,$e.viewport)}}else Y.length>0&&$n(ie,Y,E,q),F&&Te.render(E),qs(m,E,q);D!==null&&(R.updateMultisampleRenderTarget(D),R.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(g,E,q),Ie.resetDefaultState(),S=-1,v=null,b.pop(),b.length>0?(d=b[b.length-1],ce===!0&&le.setGlobalState(g.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Rn(E,q,ne,ie){if(E.visible===!1)return;if(E.layers.test(q.layers)){if(E.isGroup)ne=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(q);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){ie&&qe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Pe);let ze=X.update(E),We=E.material;We.visible&&m.push(E,ze,We,ne,qe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Z.intersectsObject(E))){let ze=X.update(E),We=E.material;if(ie&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),qe.copy(E.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),qe.copy(ze.boundingSphere.center)),qe.applyMatrix4(E.matrixWorld).applyMatrix4(Pe)),Array.isArray(We)){let $e=ze.groups;for(let et=0,Ke=$e.length;et<Ke;et++){let Ve=$e[et],dt=We[Ve.materialIndex];dt&&dt.visible&&m.push(E,ze,dt,ne,qe.z,Ve)}}else We.visible&&m.push(E,ze,We,ne,qe.z,null)}}let Ae=E.children;for(let ze=0,We=Ae.length;ze<We;ze++)Rn(Ae[ze],q,ne,ie)}function qs(E,q,ne,ie){let Y=E.opaque,Ae=E.transmissive,ze=E.transparent;d.setupLightsView(ne),ce===!0&&le.setGlobalState(g.clippingPlanes,ne),ie&&Ce.viewport(C.copy(ie)),Y.length>0&&rs(Y,q,ne),Ae.length>0&&rs(Ae,q,ne),ze.length>0&&rs(ze,q,ne),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function $n(E,q,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ie.id]===void 0&&(d.state.transmissionRenderTarget[ie.id]=new ii(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?wr:ni,minFilter:$i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));let Ae=d.state.transmissionRenderTarget[ie.id],ze=ie.viewport||C;Ae.setSize(ze.z,ze.w);let We=g.getRenderTarget();g.setRenderTarget(Ae),g.getClearColor(G),ae=g.getClearAlpha(),ae<1&&g.setClearColor(16777215,.5),g.clear(),F&&Te.render(ne);let $e=g.toneMapping;g.toneMapping=xi;let et=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),d.setupLightsView(ie),ce===!0&&le.setGlobalState(g.clippingPlanes,ie),rs(E,ne,ie),R.updateMultisampleRenderTarget(Ae),R.updateRenderTargetMipmap(Ae),be.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Ve=0,dt=q.length;Ve<dt;Ve++){let xt=q[Ve],it=xt.object,qt=xt.geometry,pt=xt.material,Xe=xt.group;if(pt.side===Dn&&it.layers.test(ie.layers)){let gn=pt.side;pt.side=dn,pt.needsUpdate=!0,Nr(it,ne,ie,qt,pt,Xe),pt.side=gn,pt.needsUpdate=!0,Ke=!0}}Ke===!0&&(R.updateMultisampleRenderTarget(Ae),R.updateRenderTargetMipmap(Ae))}g.setRenderTarget(We),g.setClearColor(G,ae),et!==void 0&&(ie.viewport=et),g.toneMapping=$e}function rs(E,q,ne){let ie=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,Ae=E.length;Y<Ae;Y++){let ze=E[Y],We=ze.object,$e=ze.geometry,et=ie===null?ze.material:ie,Ke=ze.group;We.layers.test(ne.layers)&&Nr(We,q,ne,$e,et,Ke)}}function Nr(E,q,ne,ie,Y,Ae){E.onBeforeRender(g,q,ne,ie,Y,Ae),E.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(g,q,ne,ie,E,Ae),Y.transparent===!0&&Y.side===Dn&&Y.forceSinglePass===!1?(Y.side=dn,Y.needsUpdate=!0,g.renderBufferDirect(ne,q,ie,Y,E,Ae),Y.side=_i,Y.needsUpdate=!0,g.renderBufferDirect(ne,q,ie,Y,E,Ae),Y.side=Dn):g.renderBufferDirect(ne,q,ie,Y,E,Ae),E.onAfterRender(g,q,ne,ie,Y,Ae)}function as(E,q,ne){q.isScene!==!0&&(q=ot);let ie=ke.get(E),Y=d.state.lights,Ae=d.state.shadowsArray,ze=Y.state.version,We=fe.getParameters(E,Y.state,Ae,q,ne),$e=fe.getProgramCacheKey(We),et=ie.programs;ie.environment=E.isMeshStandardMaterial?q.environment:null,ie.fog=q.fog,ie.envMap=(E.isMeshStandardMaterial?j:w).get(E.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&E.envMap===null?q.environmentRotation:E.envMapRotation,et===void 0&&(E.addEventListener("dispose",nt),et=new Map,ie.programs=et);let Ke=et.get($e);if(Ke!==void 0){if(ie.currentProgram===Ke&&ie.lightsStateVersion===ze)return Zs(E,We),Ke}else We.uniforms=fe.getUniforms(E),E.onBeforeCompile(We,g),Ke=fe.acquireProgram(We,$e),et.set($e,Ke),ie.uniforms=We.uniforms;let Ve=ie.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ve.clippingPlanes=le.uniform),Zs(E,We),ie.needsLights=mn(E),ie.lightsStateVersion=ze,ie.needsLights&&(Ve.ambientLightColor.value=Y.state.ambient,Ve.lightProbe.value=Y.state.probe,Ve.directionalLights.value=Y.state.directional,Ve.directionalLightShadows.value=Y.state.directionalShadow,Ve.spotLights.value=Y.state.spot,Ve.spotLightShadows.value=Y.state.spotShadow,Ve.rectAreaLights.value=Y.state.rectArea,Ve.ltc_1.value=Y.state.rectAreaLTC1,Ve.ltc_2.value=Y.state.rectAreaLTC2,Ve.pointLights.value=Y.state.point,Ve.pointLightShadows.value=Y.state.pointShadow,Ve.hemisphereLights.value=Y.state.hemi,Ve.directionalShadowMap.value=Y.state.directionalShadowMap,Ve.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ve.spotShadowMap.value=Y.state.spotShadowMap,Ve.spotLightMatrix.value=Y.state.spotLightMatrix,Ve.spotLightMap.value=Y.state.spotLightMap,Ve.pointShadowMap.value=Y.state.pointShadowMap,Ve.pointShadowMatrix.value=Y.state.pointShadowMatrix),ie.currentProgram=Ke,ie.uniformsList=null,Ke}function Ys(E){if(E.uniformsList===null){let q=E.currentProgram.getUniforms();E.uniformsList=Rs.seqWithValue(q.seq,E.uniforms)}return E.uniformsList}function Zs(E,q){let ne=ke.get(E);ne.outputColorSpace=q.outputColorSpace,ne.batching=q.batching,ne.batchingColor=q.batchingColor,ne.instancing=q.instancing,ne.instancingColor=q.instancingColor,ne.instancingMorph=q.instancingMorph,ne.skinning=q.skinning,ne.morphTargets=q.morphTargets,ne.morphNormals=q.morphNormals,ne.morphColors=q.morphColors,ne.morphTargetsCount=q.morphTargetsCount,ne.numClippingPlanes=q.numClippingPlanes,ne.numIntersection=q.numClipIntersection,ne.vertexAlphas=q.vertexAlphas,ne.vertexTangents=q.vertexTangents,ne.toneMapping=q.toneMapping}function Ur(E,q,ne,ie,Y){q.isScene!==!0&&(q=ot),R.resetTextureUnits();let Ae=q.fog,ze=ie.isMeshStandardMaterial?q.environment:null,We=D===null?g.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Hs,$e=(ie.isMeshStandardMaterial?j:w).get(ie.envMap||ze),et=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Ke=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ve=!!ne.morphAttributes.position,dt=!!ne.morphAttributes.normal,xt=!!ne.morphAttributes.color,it=xi;ie.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(it=g.toneMapping);let qt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,pt=qt!==void 0?qt.length:0,Xe=ke.get(ie),gn=d.state.lights;if(ce===!0&&(_e===!0||E!==v)){let hn=E===v&&ie.id===S;le.setState(ie,E,hn)}let yt=!1;ie.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==gn.state.version||Xe.outputColorSpace!==We||Y.isBatchedMesh&&Xe.batching===!1||!Y.isBatchedMesh&&Xe.batching===!0||Y.isBatchedMesh&&Xe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Xe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Xe.instancing===!1||!Y.isInstancedMesh&&Xe.instancing===!0||Y.isSkinnedMesh&&Xe.skinning===!1||!Y.isSkinnedMesh&&Xe.skinning===!0||Y.isInstancedMesh&&Xe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Xe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Xe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Xe.instancingMorph===!1&&Y.morphTexture!==null||Xe.envMap!==$e||ie.fog===!0&&Xe.fog!==Ae||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==le.numPlanes||Xe.numIntersection!==le.numIntersection)||Xe.vertexAlphas!==et||Xe.vertexTangents!==Ke||Xe.morphTargets!==Ve||Xe.morphNormals!==dt||Xe.morphColors!==xt||Xe.toneMapping!==it||Xe.morphTargetsCount!==pt)&&(yt=!0):(yt=!0,Xe.__version=ie.version);let sn=Xe.currentProgram;yt===!0&&(sn=as(ie,q,Y));let un=!1,Yt=!1,ci=!1,Tt=sn.getUniforms(),Sn=Xe.uniforms;if(Ce.useProgram(sn.program)&&(un=!0,Yt=!0,ci=!0),ie.id!==S&&(S=ie.id,Yt=!0),un||v!==E){Ce.buffers.depth.getReversed()?(me.copy(E.projectionMatrix),Qf(me),ep(me),Tt.setValue(L,"projectionMatrix",me)):Tt.setValue(L,"projectionMatrix",E.projectionMatrix),Tt.setValue(L,"viewMatrix",E.matrixWorldInverse);let On=Tt.map.cameraPosition;On!==void 0&&On.setValue(L,Je.setFromMatrixPosition(E.matrixWorld)),Fe.logarithmicDepthBuffer&&Tt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Tt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,Yt=!0,ci=!0)}if(Y.isSkinnedMesh){Tt.setOptional(L,Y,"bindMatrix"),Tt.setOptional(L,Y,"bindMatrixInverse");let hn=Y.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Tt.setValue(L,"boneTexture",hn.boneTexture,R))}Y.isBatchedMesh&&(Tt.setOptional(L,Y,"batchingTexture"),Tt.setValue(L,"batchingTexture",Y._matricesTexture,R),Tt.setOptional(L,Y,"batchingIdTexture"),Tt.setValue(L,"batchingIdTexture",Y._indirectTexture,R),Tt.setOptional(L,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Tt.setValue(L,"batchingColorTexture",Y._colorsTexture,R));let Di=ne.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&Oe.update(Y,ne,sn),(Yt||Xe.receiveShadow!==Y.receiveShadow)&&(Xe.receiveShadow=Y.receiveShadow,Tt.setValue(L,"receiveShadow",Y.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Sn.envMap.value=$e,Sn.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&q.environment!==null&&(Sn.envMapIntensity.value=q.environmentIntensity),Yt&&(Tt.setValue(L,"toneMappingExposure",g.toneMappingExposure),Xe.needsLights&&Or(Sn,ci),Ae&&ie.fog===!0&&oe.refreshFogUniforms(Sn,Ae),oe.refreshMaterialUniforms(Sn,ie,N,$,d.state.transmissionRenderTarget[E.id]),Rs.upload(L,Ys(Xe),Sn,R)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Rs.upload(L,Ys(Xe),Sn,R),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Tt.setValue(L,"center",Y.center),Tt.setValue(L,"modelViewMatrix",Y.modelViewMatrix),Tt.setValue(L,"normalMatrix",Y.normalMatrix),Tt.setValue(L,"modelMatrix",Y.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){let hn=ie.uniformsGroups;for(let On=0,Fn=hn.length;On<Fn;On++){let li=hn[On];U.update(li,sn),U.bind(li,sn)}}return sn}function Or(E,q){E.ambientLightColor.needsUpdate=q,E.lightProbe.needsUpdate=q,E.directionalLights.needsUpdate=q,E.directionalLightShadows.needsUpdate=q,E.pointLights.needsUpdate=q,E.pointLightShadows.needsUpdate=q,E.spotLights.needsUpdate=q,E.spotLightShadows.needsUpdate=q,E.rectAreaLights.needsUpdate=q,E.hemisphereLights.needsUpdate=q}function mn(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,q,ne){ke.get(E.texture).__webglTexture=q,ke.get(E.depthTexture).__webglTexture=ne;let ie=ke.get(E);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,q){let ne=ke.get(E);ne.__webglFramebuffer=q,ne.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(E,q=0,ne=0){D=E,_=q,A=ne;let ie=!0,Y=null,Ae=!1,ze=!1;if(E){let $e=ke.get(E);if($e.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(L.FRAMEBUFFER,null),ie=!1;else if($e.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if($e.__hasExternalTextures)R.rebindTextures(E,ke.get(E.texture).__webglTexture,ke.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ve=E.depthTexture;if($e.__boundDepthTexture!==Ve){if(Ve!==null&&ke.has(Ve)&&(E.width!==Ve.image.width||E.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}let et=E.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(ze=!0);let Ke=ke.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ke[q])?Y=Ke[q][ne]:Y=Ke[q],Ae=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?Y=ke.get(E).__webglMultisampledFramebuffer:Array.isArray(Ke)?Y=Ke[ne]:Y=Ke,C.copy(E.viewport),W.copy(E.scissor),B=E.scissorTest}else C.copy(se).multiplyScalar(N).floor(),W.copy(he).multiplyScalar(N).floor(),B=ge;if(Ce.bindFramebuffer(L.FRAMEBUFFER,Y)&&ie&&Ce.drawBuffers(E,Y),Ce.viewport(C),Ce.scissor(W),Ce.setScissorTest(B),Ae){let $e=ke.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+q,$e.__webglTexture,ne)}else if(ze){let $e=ke.get(E.texture),et=q||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,$e.__webglTexture,ne||0,et)}S=-1},this.readRenderTargetPixels=function(E,q,ne,ie,Y,Ae,ze){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ze!==void 0&&(We=We[ze]),We){Ce.bindFramebuffer(L.FRAMEBUFFER,We);try{let $e=E.texture,et=$e.format,Ke=$e.type;if(!Fe.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=E.width-ie&&ne>=0&&ne<=E.height-Y&&L.readPixels(q,ne,ie,Y,Me.convert(et),Me.convert(Ke),Ae)}finally{let $e=D!==null?ke.get(D).__webglFramebuffer:null;Ce.bindFramebuffer(L.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(E,q,ne,ie,Y,Ae,ze){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ze!==void 0&&(We=We[ze]),We){let $e=E.texture,et=$e.format,Ke=$e.type;if(!Fe.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=E.width-ie&&ne>=0&&ne<=E.height-Y){Ce.bindFramebuffer(L.FRAMEBUFFER,We);let Ve=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ve),L.bufferData(L.PIXEL_PACK_BUFFER,Ae.byteLength,L.STREAM_READ),L.readPixels(q,ne,ie,Y,Me.convert(et),Me.convert(Ke),0);let dt=D!==null?ke.get(D).__webglFramebuffer:null;Ce.bindFramebuffer(L.FRAMEBUFFER,dt);let xt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await jf(L,xt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ve),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ae),L.deleteBuffer(Ve),L.deleteSync(xt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,q=null,ne=0){E.isTexture!==!0&&(ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,E=arguments[1]);let ie=Math.pow(2,-ne),Y=Math.floor(E.image.width*ie),Ae=Math.floor(E.image.height*ie),ze=q!==null?q.x:0,We=q!==null?q.y:0;R.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,ne,0,0,ze,We,Y,Ae),Ce.unbindTexture()},this.copyTextureToTexture=function(E,q,ne=null,ie=null,Y=0){E.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,E=arguments[1],q=arguments[2],Y=arguments[3]||0,ne=null);let Ae,ze,We,$e,et,Ke,Ve,dt,xt,it=E.isCompressedTexture?E.mipmaps[Y]:E.image;ne!==null?(Ae=ne.max.x-ne.min.x,ze=ne.max.y-ne.min.y,We=ne.isBox3?ne.max.z-ne.min.z:1,$e=ne.min.x,et=ne.min.y,Ke=ne.isBox3?ne.min.z:0):(Ae=it.width,ze=it.height,We=it.depth||1,$e=0,et=0,Ke=0),ie!==null?(Ve=ie.x,dt=ie.y,xt=ie.z):(Ve=0,dt=0,xt=0);let qt=Me.convert(q.format),pt=Me.convert(q.type),Xe;q.isData3DTexture?(R.setTexture3D(q,0),Xe=L.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(R.setTexture2DArray(q,0),Xe=L.TEXTURE_2D_ARRAY):(R.setTexture2D(q,0),Xe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,q.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,q.unpackAlignment);let gn=L.getParameter(L.UNPACK_ROW_LENGTH),yt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),sn=L.getParameter(L.UNPACK_SKIP_PIXELS),un=L.getParameter(L.UNPACK_SKIP_ROWS),Yt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,it.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,it.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,$e),L.pixelStorei(L.UNPACK_SKIP_ROWS,et),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ke);let ci=E.isDataArrayTexture||E.isData3DTexture,Tt=q.isDataArrayTexture||q.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Sn=ke.get(E),Di=ke.get(q),hn=ke.get(Sn.__renderTarget),On=ke.get(Di.__renderTarget);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,hn.__webglFramebuffer),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let Fn=0;Fn<We;Fn++)ci&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ke.get(E).__webglTexture,Y,Ke+Fn),E.isDepthTexture?(Tt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ke.get(q).__webglTexture,Y,xt+Fn),L.blitFramebuffer($e,et,Ae,ze,Ve,dt,Ae,ze,L.DEPTH_BUFFER_BIT,L.NEAREST)):Tt?L.copyTexSubImage3D(Xe,Y,Ve,dt,xt+Fn,$e,et,Ae,ze):L.copyTexSubImage2D(Xe,Y,Ve,dt,xt+Fn,$e,et,Ae,ze);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Tt?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Xe,Y,Ve,dt,xt,Ae,ze,We,qt,pt,it.data):q.isCompressedArrayTexture?L.compressedTexSubImage3D(Xe,Y,Ve,dt,xt,Ae,ze,We,qt,it.data):L.texSubImage3D(Xe,Y,Ve,dt,xt,Ae,ze,We,qt,pt,it):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Y,Ve,dt,Ae,ze,qt,pt,it.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Y,Ve,dt,it.width,it.height,qt,it.data):L.texSubImage2D(L.TEXTURE_2D,Y,Ve,dt,Ae,ze,qt,pt,it);L.pixelStorei(L.UNPACK_ROW_LENGTH,gn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,sn),L.pixelStorei(L.UNPACK_SKIP_ROWS,un),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Yt),Y===0&&q.generateMipmaps&&L.generateMipmap(Xe),Ce.unbindTexture()},this.copyTextureToTexture3D=function(E,q,ne=null,ie=null,Y=0){return E.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,ie=arguments[1]||null,E=arguments[2],q=arguments[3],Y=arguments[4]||0),ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,q,ne,ie,Y)},this.initRenderTarget=function(E){ke.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Ce.unbindTexture()},this.resetState=function(){_=0,A=0,D=null,Ce.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}};var Na=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new st(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ks=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var qc=class extends fn{constructor(e=null,t=1,n=1,s,r,a,o,c,l=_n,u=_n,h,f){super(null,a,o,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ua=class extends tn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},bs=new Mt,lh=new Mt,ha=[],uh=new pn,Yy=new Mt,tr=new It,nr=new Si,Oa=class extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ua(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Yy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),uh.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(uh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),nr.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),e.ray.intersectsSphere(nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bs),lh.multiplyMatrices(n,bs),tr.matrixWorld=lh,tr.raycast(e,ha);for(let a=0,o=ha.length;a<o;a++){let c=ha[a];c.instanceId=r,c.object=this,t.push(c)}ha.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ua(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new qc(new Float32Array(s*this.count),s,this.count,Ml,zn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var gr=class extends wi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hh=new Mt,Yc=new fr,da=new Si,fa=new H,Fa=class extends Xt{constructor(e=new kt,t=new gr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),da.radius+=r,e.ray.intersectsSphere(da)===!1)return;hh.copy(s).invert(),Yc.copy(e.ray).applyMatrix4(hh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let y=f,x=p;y<x;y++){let m=l.getX(y);fa.fromBufferAttribute(h,m),dh(fa,m,c,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let y=f,x=p;y<x;y++)fa.fromBufferAttribute(h,y),dh(fa,y,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function dh(i,e,t,n,s,r,a){let o=Yc.distanceSqToPoint(i);if(o<t){let c=new H;Yc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ti=class extends fn{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],f=n[s+1]-u,p=(a-u)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Le:new H);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new H,s=[],r=[],a=[],o=new H,c=new Mt;for(let p=0;p<=e;p++){let y=p/e;s[p]=this.getTangentAt(y,new H)}r[0]=new H,a[0]=new H;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let y=Math.acos(zt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,y))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(zt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let y=1;y<=e;y++)r[y].applyMatrix4(c.makeRotationAxis(s[y],p*y)),a[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},yr=class extends Tn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*u-p*h+this.aX,l=f*h+p*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zc=class extends yr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Rl(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let f=(a-r)/l-(o-r)/(l+u)+(o-a)/u,p=(o-a)/u-(c-a)/(u+h)+(c-o)/h;f*=u,p*=u,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var pa=new H,Vo=new Rl,Go=new Rl,Wo=new Rl,Jc=class extends Tn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new H){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(pa.subVectors(s[0],s[1]).add(s[0]),l=pa);let h=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(pa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=pa),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,y=Math.pow(l.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);x<1e-4&&(x=1),y<1e-4&&(y=x),m<1e-4&&(m=x),Vo.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,y,x,m),Go.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,y,x,m),Wo.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,y,x,m)}else this.curveType==="catmullrom"&&(Vo.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Go.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Wo.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Vo.calc(c),Go.calc(c),Wo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function fh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Zy(i,e){let t=1-i;return t*t*e}function Jy(i,e){return 2*(1-i)*i*e}function Ky(i,e){return i*i*e}function cr(i,e,t,n){return Zy(i,e)+Jy(i,t)+Ky(i,n)}function jy(i,e){let t=1-i;return t*t*t*e}function Qy(i,e){let t=1-i;return 3*t*t*i*e}function ev(i,e){return 3*(1-i)*i*i*e}function tv(i,e){return i*i*i*e}function lr(i,e,t,n,s){return jy(i,e)+Qy(i,t)+ev(i,n)+tv(i,s)}var ka=class extends Tn{constructor(e=new Le,t=new Le,n=new Le,s=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Le){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(lr(e,s.x,r.x,a.x,o.x),lr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Kc=class extends Tn{constructor(e=new H,t=new H,n=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(lr(e,s.x,r.x,a.x,o.x),lr(e,s.y,r.y,a.y,o.y),lr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ba=class extends Tn{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jc=class extends Tn{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},za=class extends Tn{constructor(e=new Le,t=new Le,n=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Le){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(cr(e,s.x,r.x,a.x),cr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qc=class extends Tn{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(cr(e,s.x,r.x,a.x),cr(e,s.y,r.y,a.y),cr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ha=class extends Tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(fh(o,c.x,l.x,u.x,h.x),fh(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Le().fromArray(s))}return this}},el=Object.freeze({__proto__:null,ArcCurve:Zc,CatmullRomCurve3:Jc,CubicBezierCurve:ka,CubicBezierCurve3:Kc,EllipseCurve:yr,LineCurve:Ba,LineCurve3:jc,QuadraticBezierCurve:za,QuadraticBezierCurve3:Qc,SplineCurve:Ha}),tl=class extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new el[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new el[s.type]().fromJSON(s))}return this}},Va=class extends tl{constructor(e){super(),this.type="Path",this.currentPoint=new Le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ba(this.currentPoint.clone(),new Le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new za(this.currentPoint.clone(),new Le(e,t),new Le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ka(this.currentPoint.clone(),new Le(e,t),new Le(n,s),new Le(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ha(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new yr(e,t,n,s,r,a,o,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ga=class i extends kt{constructor(e=[new Le(0,-.5),new Le(.5,0),new Le(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=zt(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],u=1/t,h=new H,f=new Le,p=new H,y=new H,x=new H,m=0,d=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,d=e[M+1].y-e[M].y,p.x=d*1,p.y=-m,p.z=d*0,x.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[M+1].x-e[M].x,d=e[M+1].y-e[M].y,p.x=d*1,p.y=-m,p.z=d*0,y.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),c.push(p.x,p.y,p.z),x.copy(y)}for(let M=0;M<=t;M++){let b=n+M*u*s,g=Math.sin(b),k=Math.cos(b);for(let _=0;_<=e.length-1;_++){h.x=e[_].x*g,h.y=e[_].y,h.z=e[_].x*k,a.push(h.x,h.y,h.z),f.x=M/t,f.y=_/(e.length-1),o.push(f.x,f.y);let A=c[3*_+0]*g,D=c[3*_+1],S=c[3*_+0]*k;l.push(A,D,S)}}for(let M=0;M<t;M++)for(let b=0;b<e.length-1;b++){let g=b+M*e.length,k=g,_=g+e.length,A=g+e.length+1,D=g+1;r.push(k,_,D),r.push(A,D,_)}this.setIndex(r),this.setAttribute("position",new St(a,3)),this.setAttribute("uv",new St(o,2)),this.setAttribute("normal",new St(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Yi=class i extends kt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],y=0,x=[],m=n/2,d=0;M(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new St(h,3)),this.setAttribute("normal",new St(f,3)),this.setAttribute("uv",new St(p,2));function M(){let g=new H,k=new H,_=0,A=(t-e)/n;for(let D=0;D<=r;D++){let S=[],v=D/r,C=v*(t-e)+e;for(let W=0;W<=s;W++){let B=W/s,G=B*c+o,ae=Math.sin(G),ee=Math.cos(G);k.x=C*ae,k.y=-v*n+m,k.z=C*ee,h.push(k.x,k.y,k.z),g.set(ae,A,ee).normalize(),f.push(g.x,g.y,g.z),p.push(B,1-v),S.push(y++)}x.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){let v=x[S][D],C=x[S+1][D],W=x[S+1][D+1],B=x[S][D+1];(e>0||S!==0)&&(u.push(v,C,B),_+=3),(t>0||S!==r-1)&&(u.push(C,W,B),_+=3)}l.addGroup(d,_,0),d+=_}function b(g){let k=y,_=new Le,A=new H,D=0,S=g===!0?e:t,v=g===!0?1:-1;for(let W=1;W<=s;W++)h.push(0,m*v,0),f.push(0,v,0),p.push(.5,.5),y++;let C=y;for(let W=0;W<=s;W++){let G=W/s*c+o,ae=Math.cos(G),ee=Math.sin(G);A.x=S*ee,A.y=m*v,A.z=S*ae,h.push(A.x,A.y,A.z),f.push(0,v,0),_.x=ae*.5+.5,_.y=ee*.5*v+.5,p.push(_.x,_.y),y++}for(let W=0;W<s;W++){let B=k+W,G=C+W;g===!0?u.push(G,G+1,B):u.push(G+1,G,B),D+=3}l.addGroup(d,D,g===!0?1:2),d+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wa=class i extends Yi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},nl=class i extends kt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new St(r,3)),this.setAttribute("normal",new St(r.slice(),3)),this.setAttribute("uv",new St(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let b=new H,g=new H,k=new H;for(let _=0;_<t.length;_+=3)p(t[_+0],b),p(t[_+1],g),p(t[_+2],k),c(b,g,k,M)}function c(M,b,g,k){let _=k+1,A=[];for(let D=0;D<=_;D++){A[D]=[];let S=M.clone().lerp(g,D/_),v=b.clone().lerp(g,D/_),C=_-D;for(let W=0;W<=C;W++)W===0&&D===_?A[D][W]=S:A[D][W]=S.clone().lerp(v,W/C)}for(let D=0;D<_;D++)for(let S=0;S<2*(_-D)-1;S++){let v=Math.floor(S/2);S%2===0?(f(A[D][v+1]),f(A[D+1][v]),f(A[D][v])):(f(A[D][v+1]),f(A[D+1][v+1]),f(A[D+1][v]))}}function l(M){let b=new H;for(let g=0;g<r.length;g+=3)b.x=r[g+0],b.y=r[g+1],b.z=r[g+2],b.normalize().multiplyScalar(M),r[g+0]=b.x,r[g+1]=b.y,r[g+2]=b.z}function u(){let M=new H;for(let b=0;b<r.length;b+=3){M.x=r[b+0],M.y=r[b+1],M.z=r[b+2];let g=m(M)/2/Math.PI+.5,k=d(M)/Math.PI+.5;a.push(g,1-k)}y(),h()}function h(){for(let M=0;M<a.length;M+=6){let b=a[M+0],g=a[M+2],k=a[M+4],_=Math.max(b,g,k),A=Math.min(b,g,k);_>.9&&A<.1&&(b<.2&&(a[M+0]+=1),g<.2&&(a[M+2]+=1),k<.2&&(a[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function p(M,b){let g=M*3;b.x=e[g+0],b.y=e[g+1],b.z=e[g+2]}function y(){let M=new H,b=new H,g=new H,k=new H,_=new Le,A=new Le,D=new Le;for(let S=0,v=0;S<r.length;S+=9,v+=6){M.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),g.set(r[S+6],r[S+7],r[S+8]),_.set(a[v+0],a[v+1]),A.set(a[v+2],a[v+3]),D.set(a[v+4],a[v+5]),k.copy(M).add(b).add(g).divideScalar(3);let C=m(k);x(_,v+0,M,C),x(A,v+2,b,C),x(D,v+4,g,C)}}function x(M,b,g,k){k<0&&M.x===1&&(a[b]=M.x-1),g.x===0&&g.z===0&&(a[b]=k/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var si=class extends Va{constructor(e){super(e),this.uuid=ji(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Va().fromJSON(s))}return this}},nv={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Wh(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,u,h,f,p;if(n&&(r=ov(i,e,r,t)),i.length>80*t){o=l=i[0],c=u=i[1];for(let y=t;y<s;y+=t)h=i[y],f=i[y+1],h<o&&(o=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);p=Math.max(l-o,u-c),p=p!==0?32767/p:0}return vr(r,a,t,o,c,p,0),a}};function Wh(i,e,t,n,s){let r,a;if(s===vv(i,e,t,n)>0)for(r=e;r<t;r+=n)a=ph(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=ph(r,i[r],i[r+1],a);return a&&eo(a,a.next)&&(_r(a),a=a.next),a}function Zi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(eo(t,t.next)||Dt(t.prev,t,t.next)===0)){if(_r(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function vr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&dv(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?sv(i,n,s,r):iv(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),_r(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=rv(Zi(i),e,t),vr(i,e,t,n,s,r,2)):a===2&&av(i,e,t,n,s,r):vr(Zi(i),e,t,n,s,r,1);break}}}function iv(i){let e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=s<r?s<a?s:a:r<a?r:a,h=o<c?o<l?o:l:c<l?c:l,f=s>r?s>a?s:a:r>a?r:a,p=o>c?o>l?o:l:c>l?c:l,y=n.next;for(;y!==e;){if(y.x>=u&&y.x<=f&&y.y>=h&&y.y<=p&&ws(s,o,r,c,a,l,y.x,y.y)&&Dt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function sv(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Dt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,u=s.y,h=r.y,f=a.y,p=o<c?o<l?o:l:c<l?c:l,y=u<h?u<f?u:f:h<f?h:f,x=o>c?o>l?o:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,d=il(p,y,e,t,n),M=il(x,m,e,t,n),b=i.prevZ,g=i.nextZ;for(;b&&b.z>=d&&g&&g.z<=M;){if(b.x>=p&&b.x<=x&&b.y>=y&&b.y<=m&&b!==s&&b!==a&&ws(o,u,c,h,l,f,b.x,b.y)&&Dt(b.prev,b,b.next)>=0||(b=b.prevZ,g.x>=p&&g.x<=x&&g.y>=y&&g.y<=m&&g!==s&&g!==a&&ws(o,u,c,h,l,f,g.x,g.y)&&Dt(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;b&&b.z>=d;){if(b.x>=p&&b.x<=x&&b.y>=y&&b.y<=m&&b!==s&&b!==a&&ws(o,u,c,h,l,f,b.x,b.y)&&Dt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;g&&g.z<=M;){if(g.x>=p&&g.x<=x&&g.y>=y&&g.y<=m&&g!==s&&g!==a&&ws(o,u,c,h,l,f,g.x,g.y)&&Dt(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function rv(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!eo(s,r)&&$h(s,n,n.next,r)&&xr(s,r)&&xr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),_r(n),_r(n.next),n=i=r),n=n.next}while(n!==i);return Zi(n)}function av(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&mv(a,o)){let c=Xh(a,o);a=Zi(a,a.next),c=Zi(c,c.next),vr(a,e,t,n,s,r,0),vr(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function ov(i,e,t,n){let s=[],r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Wh(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(pv(l));for(s.sort(cv),r=0;r<s.length;r++)t=lv(s[r],t);return t}function cv(i,e){return i.x-e.x}function lv(i,e){let t=uv(i,e);if(!t)return e;let n=Xh(t,i);return Zi(n,n.next),Zi(t,t.next)}function uv(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,c=s.x,l=s.y,u=1/0,h;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&ws(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(r-t.x),xr(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&hv(s,t)))&&(s=t,u=h)),t=t.next;while(t!==o);return s}function hv(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function dv(i,e,t,n){let s=i;do s.z===0&&(s.z=il(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fv(s)}function fv(i){let e,t,n,s,r,a,o,c,l=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(a>1);return i}function il(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function pv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ws(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function mv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!gv(i,e)&&(xr(i,e)&&xr(e,i)&&yv(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||eo(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function eo(i,e){return i.x===e.x&&i.y===e.y}function $h(i,e,t,n){let s=ga(Dt(i,e,t)),r=ga(Dt(i,e,n)),a=ga(Dt(t,n,i)),o=ga(Dt(t,n,e));return!!(s!==r&&a!==o||s===0&&ma(i,t,e)||r===0&&ma(i,n,e)||a===0&&ma(t,i,n)||o===0&&ma(t,e,n))}function ma(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ga(i){return i>0?1:i<0?-1:0}function gv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&$h(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function xr(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function yv(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Xh(i,e){let t=new sl(i.i,i.x,i.y),n=new sl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ph(i,e,t,n){let s=new sl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function _r(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function sl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function vv(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ur=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];mh(e),gh(n,e);let a=e.length;t.forEach(mh);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,gh(n,t[c]);let o=nv.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function mh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function gh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ai=class i extends kt{constructor(e=new si([new Le(.5,.5),new Le(-.5,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new St(s,3)),this.setAttribute("uv",new St(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:xv,b,g=!1,k,_,A,D;d&&(b=d.getSpacedPoints(u),g=!0,f=!1,k=d.computeFrenetFrames(u,!1),_=new H,A=new H,D=new H),f||(m=0,p=0,y=0,x=0);let S=o.extractPoints(l),v=S.shape,C=S.holes;if(!ur.isClockWise(v)){v=v.reverse();for(let F=0,ye=C.length;F<ye;F++){let L=C[F];ur.isClockWise(L)&&(C[F]=L.reverse())}}let B=ur.triangulateShape(v,C),G=v;for(let F=0,ye=C.length;F<ye;F++){let L=C[F];v=v.concat(L)}function ae(F,ye,L){return ye||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(ye,L)}let ee=v.length,$=B.length;function N(F,ye,L){let Ge,be,Fe,Ce=F.x-ye.x,Ze=F.y-ye.y,ke=L.x-F.x,R=L.y-F.y,w=Ce*Ce+Ze*Ze,j=Ce*R-Ze*ke;if(Math.abs(j)>Number.EPSILON){let I=Math.sqrt(w),O=Math.sqrt(ke*ke+R*R),X=ye.x-Ze/I,fe=ye.y+Ce/I,oe=L.x-R/O,pe=L.y+ke/O,Se=((oe-X)*R-(pe-fe)*ke)/(Ce*R-Ze*ke);Ge=X+Ce*Se-F.x,be=fe+Ze*Se-F.y;let le=Ge*Ge+be*be;if(le<=2)return new Le(Ge,be);Fe=Math.sqrt(le/2)}else{let I=!1;Ce>Number.EPSILON?ke>Number.EPSILON&&(I=!0):Ce<-Number.EPSILON?ke<-Number.EPSILON&&(I=!0):Math.sign(Ze)===Math.sign(R)&&(I=!0),I?(Ge=-Ze,be=Ce,Fe=Math.sqrt(w)):(Ge=Ce,be=Ze,Fe=Math.sqrt(w/2))}return new Le(Ge/Fe,be/Fe)}let K=[];for(let F=0,ye=G.length,L=ye-1,Ge=F+1;F<ye;F++,L++,Ge++)L===ye&&(L=0),Ge===ye&&(Ge=0),K[F]=N(G[F],G[L],G[Ge]);let J=[],se,he=K.concat();for(let F=0,ye=C.length;F<ye;F++){let L=C[F];se=[];for(let Ge=0,be=L.length,Fe=be-1,Ce=Ge+1;Ge<be;Ge++,Fe++,Ce++)Fe===be&&(Fe=0),Ce===be&&(Ce=0),se[Ge]=N(L[Ge],L[Fe],L[Ce]);J.push(se),he=he.concat(se)}for(let F=0;F<m;F++){let ye=F/m,L=p*Math.cos(ye*Math.PI/2),Ge=y*Math.sin(ye*Math.PI/2)+x;for(let be=0,Fe=G.length;be<Fe;be++){let Ce=ae(G[be],K[be],Ge);me(Ce.x,Ce.y,-L)}for(let be=0,Fe=C.length;be<Fe;be++){let Ce=C[be];se=J[be];for(let Ze=0,ke=Ce.length;Ze<ke;Ze++){let R=ae(Ce[Ze],se[Ze],Ge);me(R.x,R.y,-L)}}}let ge=y+x;for(let F=0;F<ee;F++){let ye=f?ae(v[F],he[F],ge):v[F];g?(A.copy(k.normals[0]).multiplyScalar(ye.x),_.copy(k.binormals[0]).multiplyScalar(ye.y),D.copy(b[0]).add(A).add(_),me(D.x,D.y,D.z)):me(ye.x,ye.y,0)}for(let F=1;F<=u;F++)for(let ye=0;ye<ee;ye++){let L=f?ae(v[ye],he[ye],ge):v[ye];g?(A.copy(k.normals[F]).multiplyScalar(L.x),_.copy(k.binormals[F]).multiplyScalar(L.y),D.copy(b[F]).add(A).add(_),me(D.x,D.y,D.z)):me(L.x,L.y,h/u*F)}for(let F=m-1;F>=0;F--){let ye=F/m,L=p*Math.cos(ye*Math.PI/2),Ge=y*Math.sin(ye*Math.PI/2)+x;for(let be=0,Fe=G.length;be<Fe;be++){let Ce=ae(G[be],K[be],Ge);me(Ce.x,Ce.y,h+L)}for(let be=0,Fe=C.length;be<Fe;be++){let Ce=C[be];se=J[be];for(let Ze=0,ke=Ce.length;Ze<ke;Ze++){let R=ae(Ce[Ze],se[Ze],Ge);g?me(R.x,R.y+b[u-1].y,b[u-1].x+L):me(R.x,R.y,h+L)}}}Z(),ce();function Z(){let F=s.length/3;if(f){let ye=0,L=ee*ye;for(let Ge=0;Ge<$;Ge++){let be=B[Ge];Pe(be[2]+L,be[1]+L,be[0]+L)}ye=u+m*2,L=ee*ye;for(let Ge=0;Ge<$;Ge++){let be=B[Ge];Pe(be[0]+L,be[1]+L,be[2]+L)}}else{for(let ye=0;ye<$;ye++){let L=B[ye];Pe(L[2],L[1],L[0])}for(let ye=0;ye<$;ye++){let L=B[ye];Pe(L[0]+ee*u,L[1]+ee*u,L[2]+ee*u)}}n.addGroup(F,s.length/3-F,0)}function ce(){let F=s.length/3,ye=0;_e(G,ye),ye+=G.length;for(let L=0,Ge=C.length;L<Ge;L++){let be=C[L];_e(be,ye),ye+=be.length}n.addGroup(F,s.length/3-F,1)}function _e(F,ye){let L=F.length;for(;--L>=0;){let Ge=L,be=L-1;be<0&&(be=F.length-1);for(let Fe=0,Ce=u+m*2;Fe<Ce;Fe++){let Ze=ee*Fe,ke=ee*(Fe+1),R=ye+Ge+Ze,w=ye+be+Ze,j=ye+be+ke,I=ye+Ge+ke;Je(R,w,j,I)}}}function me(F,ye,L){c.push(F),c.push(ye),c.push(L)}function Pe(F,ye,L){qe(F),qe(ye),qe(L);let Ge=s.length/3,be=M.generateTopUV(n,s,Ge-3,Ge-2,Ge-1);ot(be[0]),ot(be[1]),ot(be[2])}function Je(F,ye,L,Ge){qe(F),qe(ye),qe(Ge),qe(ye),qe(L),qe(Ge);let be=s.length/3,Fe=M.generateSideWallUV(n,s,be-6,be-3,be-2,be-1);ot(Fe[0]),ot(Fe[1]),ot(Fe[3]),ot(Fe[1]),ot(Fe[2]),ot(Fe[3])}function qe(F){s.push(c[F*3+0]),s.push(c[F*3+1]),s.push(c[F*3+2])}function ot(F){r.push(F.x),r.push(F.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return _v(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new el[s.type]().fromJSON(s)),new i(n,e.options)}},xv={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new Le(r,a),new Le(o,c),new Le(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[s*3],p=e[s*3+1],y=e[s*3+2],x=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new Le(a,1-c),new Le(l,1-h),new Le(f,1-y),new Le(x,1-d)]:[new Le(o,1-c),new Le(u,1-h),new Le(p,1-y),new Le(m,1-d)]}};function _v(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var $a=class i extends nl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Xa=class i extends kt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new H,f=new H,p=[],y=[],x=[],m=[];for(let d=0;d<=n;d++){let M=[],b=d/n,g=0;d===0&&a===0?g=.5/t:d===n&&c===Math.PI&&(g=-.5/t);for(let k=0;k<=t;k++){let _=k/t;h.x=-e*Math.cos(s+_*r)*Math.sin(a+b*o),h.y=e*Math.cos(a+b*o),h.z=e*Math.sin(s+_*r)*Math.sin(a+b*o),y.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(_+g,1-b),M.push(l++)}u.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){let b=u[d][M+1],g=u[d][M],k=u[d+1][M],_=u[d+1][M+1];(d!==0||a>0)&&p.push(b,g,_),(d!==n-1||c<Math.PI)&&p.push(g,k,_)}this.setIndex(p),this.setAttribute("position",new St(y,3)),this.setAttribute("normal",new St(x,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var br=class i extends kt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],u=new H,h=new H,f=new H;for(let p=0;p<=n;p++)for(let y=0;y<=s;y++){let x=y/s*r,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(y/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let y=1;y<=s;y++){let x=(s+1)*p+y-1,m=(s+1)*(p-1)+y-1,d=(s+1)*(p-1)+y,M=(s+1)*p+y;a.push(x,m,M),a.push(m,d,M)}this.setIndex(a),this.setAttribute("position",new St(o,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var bn=class extends wi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lh,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qa=class extends bn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new st(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new st(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new st(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ya(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function bv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Bs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rl=class extends Bs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:du,endingEnd:du}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case fu:r=e,o=2*t-n;break;case pu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case fu:a=e,c=2*n-t;break;case pu:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,y=(n-t)/(s-t),x=y*y,m=x*y,d=-f*m+2*f*x-f*y,M=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*y+1,b=(-1-p)*m+(1.5+p)*x+.5*y,g=p*m-p*x;for(let k=0;k!==o;++k)r[k]=d*a[u+k]+M*a[l+k]+b*a[c+k]+g*a[h+k];return r}},al=class extends Bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*h+a[c+f]*u;return r}},ol=class extends Bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Nn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ya(t,this.TimeBufferType),this.values=ya(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ya(e.times,Array),values:ya(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Sa:t=this.InterpolantFactoryMethodDiscrete;break;case Ic:t=this.InterpolantFactoryMethodLinear;break;case mo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sa;case this.InterpolantFactoryMethodLinear:return Ic;case this.InterpolantFactoryMethodSmooth:return mo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&bv(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===mo,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let h=o*n,f=h-n,p=h+n;for(let y=0;y!==n;++y){let x=t[h+y];if(x!==t[f+y]||x!==t[p+y]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Ic;var Ji=class extends Nn{constructor(e,t,n){super(e,t,n)}};Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Sa;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends Nn{};cl.prototype.ValueTypeName="color";var ll=class extends Nn{};ll.prototype.ValueTypeName="number";var ul=class extends Bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)Mi.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ya=class extends Nn{InterpolantFactoryMethodLinear(e){return new ul(this.times,this.values,this.getValueSize(),e)}};Ya.prototype.ValueTypeName="quaternion";Ya.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends Nn{constructor(e,t,n){super(e,t,n)}};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Sa;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends Nn{};hl.prototype.ValueTypeName="vector";var dl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let p=l[h],y=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return y}return null}}},Mv=new dl,fl=class{constructor(e){this.manager=e!==void 0?e:Mv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};fl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Za=class extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},zs=class extends Za{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},$o=new Mt,yh=new H,vh=new H,pl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(yh),vh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vh),t.updateMatrixWorld(),$o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($o),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ml=class extends pl{constructor(){super(new Da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ri=class extends Za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new ml}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Cl="\\[\\]\\.:\\/",Sv=new RegExp("["+Cl+"]","g"),Il="[^"+Cl+"]",wv="[^"+Cl.replace("\\.","")+"]",Ev=/((?:WC+[\/:])*)/.source.replace("WC",Il),Tv=/(WCOD+)?/.source.replace("WCOD",wv),Av=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Il),Rv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Il),Cv=new RegExp("^"+Ev+Tv+Av+Rv+"$"),Iv=["material","materials","bones","map"],gl=class{constructor(e,t,n){let s=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sv,"")}static parseTrackName(e){let t=Cv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Iv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=gl;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lx=new Float32Array(1);var xh=new Mt,Ja=class{constructor(e,t,n=0,s=1/0){this.ray=new fr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xh),this}intersectObject(e,t=!0,n=[]){return yl(e,this,n,t),n.sort(_h),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)yl(e[s],this,n,t);return n.sort(_h),n}};function _h(i,e){return i.distance-e.distance}function yl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)yl(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vl);var Yh=[{x:-6.25,minX:-8.15,maxX:-4.35,minZ:-2.1,maxZ:2.3},{x:6.25,minX:4.35,maxX:8.15,minZ:-2.1,maxZ:2.3}],Pv=[{id:"west-north",axis:"vertical",start:[-7,14],end:[-7,-14]},{id:"west-south",axis:"vertical",start:[-5.5,-14],end:[-5.5,14]},{id:"east-north",axis:"vertical",start:[5.5,14],end:[5.5,-14]},{id:"east-south",axis:"vertical",start:[7,-14],end:[7,14]},{id:"boulevard-east",axis:"horizontal",start:[-19,-.65],end:[19,-.65]},{id:"boulevard-west",axis:"horizontal",start:[19,.85],end:[-19,.85]}],Zh=.8,Dv=.35,Lv=.025;function Nv(i){let e=i.axis==="vertical",t=(e?i.width:i.length)/2,n=(e?i.length:i.width)/2;return{minX:i.x-t,maxX:i.x+t,minZ:i.z-n,maxZ:i.z+n}}function Uv(i,e,t=0){return i.minX<e.maxX+t&&i.maxX>e.minX-t&&i.minZ<e.maxZ+t&&i.maxZ>e.minZ-t}function Jh(){let i=0,e=0,t="horizontal",n=!1,s=Pv.map(u=>{let h=u.end[0]-u.start[0],f=u.end[1]-u.start[1],p=Math.hypot(h,f),y=h/p,x=f/p,m=Yh.filter(d=>u.axis==="horizontal"||u.start[0]>d.minX&&u.start[0]<d.maxX).map(d=>{let M=u.axis==="horizontal"?(d.minX-u.start[0])/y:(d.minZ-u.start[1])/x,b=u.axis==="horizontal"?(d.maxX-u.start[0])/y:(d.maxZ-u.start[1])/x;return{entry:Math.min(M,b),exit:Math.max(M,b)}}).sort((d,M)=>d.entry-M.entry);return{...u,length:p,ux:y,uz:x,gates:m}}),r=s.flatMap((u,h)=>[0,1].map(f=>{let p=h===4&&f===0?"bus":h===2&&f===1?"truck":"car";return{id:u.id+"-"+f,lane:u.id,axis:u.axis,s:f===0?2:u.axis==="horizontal"?10:8,x:0,z:0,heading:Math.atan2(u.ux,u.uz),length:p==="bus"?2.5:p==="truck"?2.1:1.65,width:p==="car"?.83:.9,type:p,speed:0,stopped:!1,active:!0,distanceTravelled:0,cruiseSpeed:p==="bus"?2.1:p==="truck"?2.25:2.6}})),a=new Map(s.map(u=>[u.id,r.filter(h=>h.lane===u.id)]));function o(u,h){u.x=h.start[0]+h.ux*u.s,u.z=h.start[1]+h.uz*u.s}for(let u of s)for(let h of a.get(u.id))o(h,u);function c(){return r.some(u=>u.active&&Yh.some(h=>Uv(Nv(u),h,.1)))}function l(u){i+=u,e+=u,!n&&e>=9?(n=!0,e=0):n&&e>=1.5&&!c()&&(t=t==="horizontal"?"vertical":"horizontal",n=!1,e=0);for(let h of s){let f=a.get(h.id).filter(p=>p.active).sort((p,y)=>y.s-p.s);for(let p=0;p<f.length;p++){let y=f[p],x=1/0,m=f[p-1];if(m&&(x=m.s-m.length/2-y.length/2-Zh),n||t!==h.axis){for(let _ of h.gates)if(y.s+y.length/2<=_.entry+.001){x=Math.min(x,_.entry-y.length/2-Dv);break}}let d=Math.max(0,x-y.s),M=Math.sqrt(2*2.8*d),b=Math.min(y.cruiseSpeed,M),g=b>y.speed?1.6:4;y.speed+=Math.max(-g*u,Math.min(g*u,b-y.speed));let k=Math.min(d,y.speed*u);y.s+=k,y.distanceTravelled+=k,y.stopped=k<5e-4,o(y,h),y.s-y.length/2>h.length+.1&&(y.active=!1,y.speed=0,y.stopped=!0)}for(let p of a.get(h.id).filter(y=>!y.active))a.get(h.id).every(m=>!m.active||m.s-m.length/2>-.2+p.length/2+Zh)&&(p.s=-.2,p.active=!0,p.speed=0,o(p,h))}}return{vehicles:r,get time(){return i},getSignal(u){return n?"clear":t},step(u){if(!Number.isFinite(u)||u<=0)return;let h=Math.min(u,30);for(;h>1e-6;){let f=Math.min(Lv,h);l(f),h-=f}}}}function Kh(i,{onSelect:e=()=>{},onTraffic:t=()=>{},photoFor:n=()=>null}={}){let s={focus(){},reset(){},zoom(){},setNight(){},setPaused(){},setOwned(){},setAssets(){},setDistrict(){},setView(){},getView(){return"overview"},move(){},renderBusinessThumbnail(){return null},destroy(){}},r;try{r=new Fs({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{let P=document.createElement("div");return P.style.cssText="position:absolute;inset:0;display:grid;place-content:center;text-align:center;padding:40px;background:#dae8e0;color:#304c43;",P.innerHTML='<span style="font-size:42px">\u25C8</span><strong style="font-size:20px;margin:15px">Your city is ready</strong><span>3D is unavailable in this browser. You can still manage your empire using the panels.</span>',i.append(P),{...s,destroy(){P.remove()}}}r.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),r.shadowMap.enabled=!0,r.shadowMap.type=Mr,r.outputColorSpace=Ft,r.toneMapping=Sr,r.toneMappingExposure=1.02,r.domElement.style.cssText="width:100%;height:100%;display:block;touch-action:pan-y pinch-zoom;cursor:grab;outline:none",r.domElement.tabIndex=0,r.domElement.setAttribute("aria-label","Interactive 3D city. Drag to rotate, scroll to zoom, or select a building."),i.append(r.domElement);let a=new ks,o=20261028,c=()=>(o=o*1664525+1013904223>>>0,o/4294967296);function l(T){let P=document.createElement("canvas");P.width=1024,P.height=512;let z=P.getContext("2d"),V=z.createLinearGradient(0,0,0,512);if(T?(V.addColorStop(0,"#0a1424"),V.addColorStop(.55,"#172842"),V.addColorStop(.85,"#2c3a58"),V.addColorStop(1,"#4a4a62")):(V.addColorStop(0,"#6fa6d2"),V.addColorStop(.42,"#bcd6e3"),V.addColorStop(.72,"#f3dcbc"),V.addColorStop(1,"#f2b97f")),z.fillStyle=V,z.fillRect(0,0,1024,512),T)for(let Ee=0;Ee<320;Ee++){let we=c();z.fillStyle=`rgba(255,250,235,${.25+c()*.7})`;let Ne=we>.97?2.2:we>.85?1.5:1;z.fillRect(c()*1024,c()*330,Ne,Ne)}else{let Ee=z.createRadialGradient(700,430,10,700,430,330);Ee.addColorStop(0,"rgba(255,236,190,.95)"),Ee.addColorStop(.25,"rgba(255,214,150,.45)"),Ee.addColorStop(1,"rgba(255,200,140,0)"),z.fillStyle=Ee,z.fillRect(0,0,1024,512);for(let we=0;we<11;we++){let Ne=c()*1024,Qe=40+c()*220,Ye=90+c()*190,mt=14+c()*26;z.save(),z.translate(Ne,Qe),z.scale(1,mt/Ye);let _t=z.createRadialGradient(0,0,0,0,0,Ye);_t.addColorStop(0,`rgba(255,248,238,${.5+c()*.3})`),_t.addColorStop(1,"rgba(255,248,238,0)"),z.fillStyle=_t,z.beginPath(),z.arc(0,0,Ye,0,Math.PI*2),z.fill(),z.restore()}}let de=new Ti(P);return de.colorSpace=Ft,de}function u(T){let P=document.createElement("canvas");P.width=512,P.height=256;let z=P.getContext("2d"),V=z.createLinearGradient(0,0,0,256);T?(V.addColorStop(0,"#0d1a2e"),V.addColorStop(.5,"#2b3a58"),V.addColorStop(.52,"#6a5a4a"),V.addColorStop(1,"#141a22")):(V.addColorStop(0,"#5d97c9"),V.addColorStop(.45,"#e9dcc6"),V.addColorStop(.5,"#ffd7a0"),V.addColorStop(.53,"#9a8f78"),V.addColorStop(1,"#4c5a52")),z.fillStyle=V,z.fillRect(0,0,512,256);let de=z.createRadialGradient(330,118,2,330,118,T?40:70);de.addColorStop(0,T?"rgba(255,214,150,.5)":"rgba(255,250,230,1)"),de.addColorStop(1,"rgba(255,220,170,0)"),z.fillStyle=de,z.fillRect(0,0,512,256);let Ee=new Ti(P);return Ee.mapping=Xi,Ee.colorSpace=Ft,Ee}let h={day:l(!1),night:l(!0)},f=new Os(r),p=u(!1),y=u(!0),x={day:f.fromEquirectangular(p).texture,night:f.fromEquirectangular(y).texture};p.dispose(),y.dispose(),f.dispose();let m=new st("#ecdcc4"),d=new st("#1c2a3d");a.background=h.day,a.fog=new Na(m.clone(),130,330);let M=[],b=[],g=[],k=new Ht(32,1,1,800),_=124,A=.41,D=7,S=new Ht(62,1,.12,350),v=k,C="overview",W=new H(3.8,2.05,12.6),B=0,G=0,ae=new Set,ee=[[-16.9,-9.9,4.4,10.4],[-16.8,-9.4,-12.3,-3.9],[-3.45,3.65,-11.95,-3.45],[9.35,16.85,-12.4,-3.8],[9.6,17,3.75,10.45]],$=new zs("#d6e8fb","#c49b6c",1.75);a.add($);let N=new Ri("#ffc888",5);N.position.set(-40,33,22),N.target.position.set(0,0,-9),a.add(N.target),N.castShadow=!0,N.shadow.mapSize.set(2048,2048),N.shadow.camera.left=-46,N.shadow.camera.right=46,N.shadow.camera.top=46,N.shadow.camera.bottom=-46,N.shadow.camera.near=1,N.shadow.camera.far=150,N.shadow.normalBias=.035,N.shadow.bias=-15e-5,a.add(N);let K=new Ri("#b9d9f2",.8);K.position.set(34,18,-24),a.add(K);let J={},se=(T,P={})=>{let z=T+JSON.stringify(P);return J[z]||(J[z]=new bn({color:T,roughness:.85,...P}))},he={land:"#e6e7d9",sidewalk:"#e2e4dc",road:"#626f70",line:"#cbd5cc",white:"#f8f2de",glass:"#6b9e9a",glassDark:"#3d686d",brick:"#d99779",green:"#82a16d",leaf:"#4d856a",trunk:"#92775b",dark:"#314e50"},ge=[],Z={},ce=[],_e=[],me=[],Pe=[],Je=[],qe=[],ot=Jh();function F(T,P,z,V,de=0,Ee=0,we=0,Ne=a,Qe={}){let Ye=new It(new Vn(T,P,z),se(V,Qe));return Ye.position.set(de,Ee,we),Ye.castShadow=Math.min(T,P,z)>.055,Ye.receiveShadow=!0,Ne.add(Ye),Ye}function ye(T,P,z,V,de,Ee,we,Ne=a,Qe=10){let Ye=new It(new Yi(T,P,z,Qe),se(V));return Ye.position.set(de,Ee,we),Ye.castShadow=!0,Ye.receiveShadow=!0,Ne.add(Ye),Ye}function L(T,P,z,V,de,Ee=a,we=1){let Ne=new It(new $a(T,we),se(P));return Ne.position.set(z,V,de),Ne.castShadow=!0,Ee.add(Ne),Ne}function Ge(T,P,z){let V=new Ct;return V.position.set(P,.49,z),V.userData.business=T,a.add(V),Z[T]=V,V}function be(T,P){T.traverse(z=>{z.isMesh&&(z.userData.business=P,ge.push(z))})}function Fe(T,P,z,V){F(P+.18,.15,z+.18,he.white,0,V,0,T);for(let de of[-P/2,P/2])F(.12,.38,z,he.white,de,V+.2,0,T);for(let de of[-z/2,z/2])F(P,.38,.12,he.white,0,V+.2,de,T)}function Ce(T,P,z,V){F(.9,.4,.7,"#a8b4af",P,z,V,T),ye(.2,.2,.03,"#6d8280",P,z+.22,V,T,12)}function Ze(T,P,z,V,de,Ee,we=he.glass){for(let Ne=0;Ne<Ee;Ne++){let Qe=1.2+Ne*(V-1.7)/Math.max(1,Ee-1);for(let mt=0;mt<de;mt++){let _t=-P/2+.6+mt*(P-1.2)/Math.max(1,de-1);for(let Nt of[-z/2-.014,z/2+.014]){let rn=F((P-.9)/de*.7,.68,.025,we,_t,Qe,Nt,T,{metalness:.2,roughness:.25});Pe.push(rn)}}let Ye=Math.max(2,Math.floor(z));for(let mt=0;mt<Ye;mt++){let _t=-z/2+.55+mt*(z-1.1)/(Ye-1);for(let Nt of[-P/2-.014,P/2+.014]){let rn=F(.025,.68,(z-.8)/Ye*.68,we,Nt,Qe,_t,T,{metalness:.2,roughness:.25});Pe.push(rn)}}}}function ke(T,P,z=1,V=a,de=.52){let Ee=new Ct;return Ee.position.set(T,de,P),Ee.scale.setScalar(z),V.add(Ee),ye(.1,.16,1.2,he.trunk,0,.6,0,Ee,7),L(.9,he.leaf,0,1.65,0,Ee,1),L(.61,"#6f9a74",.25,2.2,.1,Ee,1),Ee}function R(T,P,z=1){let V=new Ct;V.position.set(T,.55,P),V.scale.setScalar(z),a.add(V),ye(.1,.13,1.2,he.trunk,0,.6,0,V),ye(0,.8,1.8,"#527b64",0,1.7,0,V,7),ye(0,.6,1.5,"#6b9271",0,2.4,0,V,7)}function w(T,P,z=0){let V=new Ct;V.position.set(T,.6,P),V.rotation.y=z,a.add(V),F(1.2,.12,.4,"#ad8b68",0,.45,0,V),F(1.2,.5,.1,"#ad8b68",0,.7,-.22,V);for(let de of[-.4,.4])F(.1,.45,.3,he.dark,de,.2,0,V)}function j(T,P){let z=new Ct;z.position.set(T,.55,P),a.add(z),ye(.04,.06,2.7,"#61716b",0,1.35,0,z,6),F(.48,.09,.27,"#4d5f59",.17,2.7,0,z);let V=F(.34,.045,.22,"#fff4cc",.17,2.64,0,z,{emissive:"#ffcf73",emissiveIntensity:.1});Je.push(V)}function I(T,P,z,V,de,Ee,we,Ne,Qe){let Ye=document.createElement("canvas");Ye.width=512,Ye.height=128;let mt=Ye.getContext("2d");mt.fillStyle=P,mt.fillRect(0,0,512,128),mt.fillStyle=z,mt.font="600 47px sans-serif",mt.textAlign="center",mt.textBaseline="middle",mt.fillText(T,256,68);let _t=new Ti(Ye);_t.colorSpace=Ft;let Nt=new It(new Ei(V,de),new Ns({map:_t}));Nt.position.set(Ee,we,Ne),Qe.add(Nt)}let O=F(460,.25,460,"#2f8e9c",0,-.45,0,a,{metalness:.35,roughness:.16});O.receiveShadow=!0;for(let[T,P,z]of[[48,37,0],[58,30,-27.3]]){let V=F(T,.02,P,"#7cc9c0",0,-.31,z,a,{transparent:!0,opacity:.5,roughness:.3});V.castShadow=!1}F(42,.7,31,"#b5c9be",0,-.05,0),F(41.7,.22,30.7,he.land,0,.39,0),F(42.2,.13,1.1,"#e6e8d9",0,.52,15),F(42.2,.13,1.1,"#e6e8d9",0,.52,-15);for(let T of[-20.5,20.5])F(1,.14,30,he.sidewalk,T,.53,0);for(let T of[-6.25,6.25]){F(3.3,.035,29.6,he.road,T,.525,0);for(let P=-14;P<15;P+=2.5)F(.08,.012,.9,he.line,T,.55,P)}F(40.5,.04,3.3,he.road,0,.53,.1);for(let T=-19;T<20;T+=2.5)Math.abs(Math.abs(T)-6.25)>2.2&&F(.85,.012,.08,he.line,T,.558,.1);for(let T of[-6.25,6.25]){for(let P of[-2.2,2.4])for(let z=-2;z<=2;z++)F(.29,.015,1.05,"#dbe1d5",T+z*.53,.559,P);for(let P of[-1,1])for(let z=-2;z<=2;z++)F(1.05,.015,.29,"#dbe1d5",T+P*2.1,.559,.1+z*.53)}for(let T of[-8.6,-3.9,3.9,8.6])for(let P of[-12,-4,4,12])j(T,P);for(let T of[-17,-12,-2,2,12,17])j(T,13.5);F(52,.7,24,"#a5bbad",0,-.05,-27.3),F(51.8,.22,23.8,"#dddcc9",0,.39,-27.3),F(52.2,.14,.7,"#e6e7d9",0,.55,-39.1);for(let T of[-25.4,25.4])F(.7,.14,24,"#deded0",T,.55,-27.3);F(51,.04,3.3,he.road,0,.54,-25.3);for(let T of[-6.25,6.25]){F(3.3,.04,24,he.road,T,.54,-27);for(let P=-38;P<-15;P+=2.4)F(.08,.014,.9,he.line,T,.57,P)}for(let T=-24;T<25;T+=2.4)Math.abs(Math.abs(T)-6.25)>2&&F(.9,.015,.08,he.line,T,.57,-25.3);let X=[];function fe(T,P,z,V,de,Ee,we="apartments"){let Ne=new Ct;Ne.position.set(T,.5,P),a.add(Ne),X.push(Ne),ee.push([T-z/2,T+z/2,P-V/2,P+V/2]),F(z,de,V,Ee,0,de/2,0,Ne),Fe(Ne,z,V,de+.05);let Qe=Math.max(2,Math.floor(de/1.4));if(Ze(Ne,z,V,de,Math.max(2,Math.floor(z/1.25)),Qe,we==="office"?"#527e89":"#748e8b"),we==="office")for(let Ye=2;Ye<de;Ye+=2)F(z+.1,.12,V+.1,"#c7cfc7",0,Ye,0,Ne);else for(let Ye=2.2;Ye<de;Ye+=1.7)F(z+.3,.1,.8,"#d8d3bd",0,Ye,V/2+.3,Ne),F(z,.35,.045,"#acb9a8",0,Ye+.17,V/2+.65,Ne);return Ce(Ne,z/2-1,de+.4,-V/2+1),de>12&&(F(z*.6,1.3,V*.6,"#a4b2aa",0,de+.7,0,Ne),ye(.035,.06,2,"#8faaa0",0,de+2.3,0,Ne,6)),we==="shop"&&(F(z*.85,1.65,.06,"#315863",0,1,V/2+.04,Ne),F(z+.25,.15,1,"#ba8973",0,2.25,V/2+.35,Ne)),Ne}function oe(T,P,z,V,de,Ee,we,Ne){return P.userData.business=T,Z[T]=P,I(z,V,de,Math.min(Ee*.85,5.4),.5,0,we+.8,Ne/2-.12,P),be(P,T),P}fe(-19,-20,6.2,6.4,6.4,"#c5aa95"),fe(-12,-20,5.1,6.4,9.3,"#dad2bd"),fe(0,-20,7.2,6.1,4.1,"#dbd7c1","shop"),I("VELORA UNIVERSITY","#dbd7c1","#48625f",6,.5,0,3.5,-16.93,a),fe(12,-20,5.2,6.1,7.6,"#bbb8a3"),oe("market",fe(19,-20,6.2,6.1,5.4,"#ceae97","shop"),"NORTHSIDE GROCER","#ceae97","#5b4a3a",6.2,5.4,6.1),oe("logistics",fe(-19.4,-32.5,7.5,9,13.8,"#b7c1b6","office"),"VELO LOGISTICS","#b7c1b6","#3f5a4c",7.5,13.8,9),oe("tech",fe(-10.9,-32.2,4.5,8.5,18.1,"#a2b7b4","office"),"VELORA LABS","#a2b7b4","#2f4d55",4.5,18.1,8.5),oe("skyline",fe(0,-32.4,7.8,8.8,23.6,"#8ba7a5","office"),"SKYLINE EXCHANGE","#8ba7a5","#21403f",7.8,23.6,8.8),oe("apartments",fe(12,-32,6.2,8.6,12,"#d0c6ae"),"PARKVIEW","#d0c6ae","#5c5444",6.2,12,8.6),fe(20,-32.2,6.2,8.7,16.6,"#b5b3a1");let pe=new Ct;pe.position.set(-9,.55,-15.1),a.add(pe),F(3,.12,1.4,"#596f69",0,2.1,0,pe);for(let T of[-1.35,1.35])F(.08,2.05,.08,"#6b827a",T,1,0,pe);F(2.8,1.5,.045,"#c2dbce",0,1.05,-.5,pe,{transparent:!0,opacity:.42}),F(2.2,.12,.45,"#9c8d6e",0,.5,-.15,pe),I("VELORA TRANSIT","#35584c","#e4efd1",2.3,.33,0,1.9,.72,pe);for(let T of[-22,-17,-11,11,17,23])ke(T,-15.5,.75),ke(T,-37.8,.75),j(T,-23),j(T,-27.6);for(let T of[-3.8,3.8])for(let P of[-16,-24,-29,-37])j(T,P);for(let T=0;T<5;T++)ye(.035,.035,.7,"#526c65",-1.8+T*.8,.95,-15.7,a,6),F(.04,.04,.65,"#526c65",-1.8+T*.8,1.3,-15.7);for(let[T,P]of[[-23,-21.8],[22,-22.3],[-2,-23.2],[2,-23.2]])w(T,P);for(let T of[-6.25,6.25])for(let P of["vertical","horizontal"])for(let z of[-1,1]){let V=T+(P==="vertical"?z*2.1:z*2.7),de=P==="vertical"?z*2.8:z*2,Ee=new Ct;Ee.position.set(V,.56,de),Ee.rotation.y=P==="horizontal"?Math.PI/2:0,a.add(Ee),ye(.045,.065,2.7,"#465b55",0,1.35,0,Ee,6),F(.34,.82,.28,"#293e38",0,2.65,0,Ee);let we=L(.092,"#542b26",0,2.89,.15,Ee,1),Ne=L(.092,"#275a42",0,2.41,.15,Ee,1);we.material=new bn({color:"#ea6550",emissive:"#ff3922",emissiveIntensity:0}),Ne.material=new bn({color:"#5ca971",emissive:"#48f58e",emissiveIntensity:0}),qe.push({junction:T,axis:P,red:we,green:Ne})}let Se=Ge("cafe",-13.4,7.4);F(7,2.8,6,"#e2a288",0,1.4,0,Se),Fe(Se,7,6,2.86),F(5.8,1.75,.08,he.glassDark,0,1.2,3.03,Se,{emissive:"#ffb463",emissiveIntensity:.32,metalness:.3,roughness:.18});for(let T of[-2.9,-1,1,2.9])F(.12,1.85,.15,he.white,T,1.2,3.1,Se);for(let T=0;T<9;T++)F(.7,.16,1,T%2?"#fff5dc":"#d47562",-2.8+T*.7,2.45,3.4,Se);I("CORNER CAF\xC9","#e2a288","#654a3b",4.8,.48,0,2.73,3.12,Se),F(1.5,1.8,.05,he.glassDark,-3.53,1.2,0,Se).rotation.y=Math.PI/2;for(let T of[-2,1.6]){ye(.55,.55,.1,"#d9c4a1",T,.7,4.5,Se),ye(.07,.07,.65,he.dark,T,.34,4.5,Se);for(let P of[-1,1])F(.4,.1,.4,"#74866a",T+P*.75,.4,4.5,Se),F(.08,.35,.4,"#74866a",T+P*.92,.62,4.5,Se)}F(5.8,.22,1.15,"#7c8f67",0,3.06,-1.9,Se);for(let T of[-2,-.7,.7,2])L(.5,"#7c9b63",T,3.45,-1.9,Se);Ce(Se,2.4,3.15,1.6),be(Se,"cafe");let le=Ge("studio",-13.1,-8.1);F(7.4,6.4,8.4,"#e7e2cd",0,3.2,0,le),Ze(le,7.4,8.4,6,5,5);for(let T of[.6,2.05,3.4,4.8,6.4])F(7.65,.16,8.65,"#f7efd9",0,T,0,le);Fe(le,7.4,8.4,6.5),F(4.6,1.9,5.4,"#c7d1c4",-.7,7.45,-.6,le),Ze(le,4.6,5.4,1.6,3,1),Fe(le,4.6,5.4,8.42);for(let T of[-2.2,-.7,.8]){let P=F(1.2,.08,1.7,"#426671",T,8.72,-.9,le,{metalness:.3});P.rotation.x=.24}I("CREATIVE STUDIO","#e7e2cd","#43645b",3.2,.5,0,.7,4.22,le),Ce(le,2.5,6.8,2.4),be(le,"studio");let xe=Ge("tower",.1,-7.7);F(7.1,2,8.5,"#e6e7d9",0,1,0,xe),F(5.7,12.9,6.7,"#76aaa6",0,8.05,-.2,xe,{metalness:.28,roughness:.23});for(let T of[-2.9,-1.95,-.98,0,.98,1.95,2.9])for(let P of[-3.62,3.22])F(.13,13.2,.18,"#e6e5d3",T,8.06,P,xe);for(let T of[-2.93,2.93])for(let P of[-2.7,-1.7,-.7,.3,1.3,2.3])F(.18,13.2,.11,"#e4e6d5",T,8.06,P,xe);for(let T=2.2;T<14.8;T+=1.25)F(5.95,.075,6.95,"#ccdbce",0,T,-.2,xe);Fe(xe,5.95,6.95,14.65),F(3.5,1.9,4.1,"#dfe5d6",0,15.6,-.2,xe),Fe(xe,3.5,4.1,16.6),F(2.9,.65,3.5,"#5b8580",0,17,-.2,xe),ye(.04,.08,2.4,"#8faaa0",0,18.5,-.2,xe,8);for(let T of[-2.5,-1.25,0,1.25,2.5])F(.85,1.45,.04,he.glassDark,T,.85,4.28,xe,{emissive:"#ffb463",emissiveIntensity:.32,metalness:.3,roughness:.18});I("VELORA","#e6e7d9","#456b60",3.1,.48,0,1.77,4.3,xe),be(xe,"tower");let Te=Ge("hotel",13.1,-8.1);F(7.5,9.1,8.6,"#ece6d4",0,4.55,0,Te),Ze(Te,7.5,8.6,8.7,5,7,"#739a96");for(let T=2;T<=8.6;T+=1.35){F(7.95,.13,1.2,he.white,0,T,4.6,Te),F(7.8,.38,.05,"#acbfb4",0,T+.2,5.12,Te,{transparent:!0,opacity:.65});for(let P of[-3.8,-1.28,1.28,3.8])F(.06,.45,1.05,"#d8e0d0",P,T+.22,4.6,Te)}Fe(Te,7.8,8.8,9.2),F(5.4,.13,3.7,"#fff4da",-.2,9.35,0,Te),F(4.7,.14,3,"#61c3c0",-.2,9.44,0,Te,{metalness:.2,roughness:.2});for(let T of[-2.8,2.8])for(let P of[-2.7,0,2.7])F(.55,.17,1.2,"#f5dcac",T,9.45,P,Te);I("HARBOR HOTEL","#ece6d4","#5c6758",5,.55,0,1.85,4.34,Te),F(5,.2,1.5,"#536e65",0,1.55,4.8,Te),be(Te,"hotel");let Oe=Ge("restaurant",13.3,7.1);F(7.4,2.7,6.7,"#dddbc6",0,1.35,0,Oe),Fe(Oe,7.5,6.8,2.8),F(6.6,1.75,.055,he.glassDark,0,1.12,3.37,Oe,{emissive:"#ffb463",emissiveIntensity:.32,metalness:.3,roughness:.18});for(let T of[-3.1,-1.55,0,1.55,3.1])F(.12,1.85,.1,he.white,T,1.15,3.43,Oe);I("THE GREENHOUSE","#dddbc6","#52674b",4.7,.45,0,2.48,3.42,Oe),F(6,.13,1.2,"#6a8164",0,2.08,3.85,Oe);for(let T of[-2,1.6]){ye(.5,.5,.1,"#e4c49c",T,3.35,0,Oe),ye(.06,.06,.55,he.dark,T,3.07,0,Oe),ye(.025,.025,1.6,"#8b7c63",T,3.7,0,Oe),ye(.05,1.15,.35,"#f5e7be",T,4.58,0,Oe,8);for(let P of[-.7,.7])F(.42,.1,.42,"#8d9c74",T,3.18,P,Oe)}for(let T of[-3.1,3.1])for(let P of[-2.8,2.8])F(.6,.4,.6,"#c2bb9e",T,3.13,P,Oe),L(.45,"#7a9765",T,3.6,P,Oe);be(Oe,"restaurant"),F(8.5,.11,10.6,"#96ae7e",0,.58,7.7),F(1.5,.035,10.6,"#d6cead",0,.65,7.7),F(8.5,.035,1.4,"#d6cead",0,.655,7.6),ye(1.55,1.6,.26,"#e6e4ce",0,.8,7.6,a,32),ye(1.3,1.3,.07,"#80c7bc",0,.96,7.6,a,32),ye(.23,.35,.65,"#d5dfcb",0,1.25,7.6,a,12),L(.18,"#c4ece0",0,1.7,7.6,a,1);for(let[T,P,z]of[[-2.7,4.1,1],[2.7,4,1.1],[-2.8,11.2,1.15],[2.8,11.1,.9],[-3.1,8.2,.8],[3.1,8.5,.9]])ke(T,P,z);w(-2,6.2),w(2,9.2,Math.PI),w(-2.2,10.1,Math.PI/2);function re(T,P,z=3.4,V=.25,de=a,Ee=.55){let we=new Ct;we.position.set(T,Ee,P),we.rotation.y=c()*Math.PI*2,de.add(we);let Ne=5,Qe=0,Ye=0;for(let mt=0;mt<Ne;mt++){let _t=(mt+1)/Ne,Nt=V*_t*_t*z*.35,rn=z*_t,Fd=ye(.12-.04*_t,.15-.04*_t,z/Ne+.05,"#9a7d5c",(Qe+Nt)/2,(Ye+rn)/2,0,we,7);Fd.rotation.z=-Math.atan2(Nt-Qe,rn-Ye),Qe=Nt,Ye=rn}for(let mt=0;mt<8;mt++){let _t=mt/8*Math.PI*2+c()*.3,Nt=new Ct;Nt.position.set(Qe,Ye,0),Nt.rotation.y=_t,we.add(Nt);let rn=L(1,mt%2?"#4f8a4f":"#5f9a57",0,0,0,Nt,1);rn.scale.set(.16,.06,1.05),rn.position.set(0,-.18,.82),rn.rotation.x=.42}return L(.16,"#7b6a44",Qe,Ye-.08,0,we,1),we}for(let T=0;T<12;T++){let P=-19+T*11.3%38;Math.abs(Math.abs(P)-6.25)>2.4?re(P,14.85,2.6+c()*1.2,.2+c()*.3):ke(P,13.6,.53)}for(let T of[-19,19])for(let P of[-12,-7,-2,3,8])re(T+(T<0?-.4:.4),P,2.8+c()*1.4,.15+c()*.35);for(let[T,P]of[[9.6,-2.9],[16.6,-2.9],[-16.8,-2.9],[-9.9,-2.9]])re(T,P,3.2+c(),.15+c()*.2);function He(T,P,z=1,V=a,de=.62){let Ee=new Ct;Ee.position.set(T,de,P),Ee.scale.setScalar(z),V.add(Ee),F(.9,.32,.9,"#d8cdb5",0,.16,0,Ee);for(let we=0;we<5;we++)L(.22+c()*.08,["#d9568f","#ef8cb4","#f4b24a","#ffffff","#c94f7c"][we],(c()-.5)*.55,.48+c()*.12,(c()-.5)*.55,Ee,1);return L(.3,"#5d8a52",0,.4,0,Ee,1),Ee}for(let[T,P]of[[-9.2,12.4],[-4.6,12.4],[4.6,12.4],[9.2,12.4],[-17.5,3.2],[-9.3,3.2],[9.4,2.9],[17.4,2.9],[-2.6,-2.9],[2.6,-2.9]])He(T,P,.8);for(let T of[-2,2])ke(T,-13.2,.8);let Me=Ge("marina",14.8,19.1);F(10,.23,1.2,"#afaa85",-1,0,-2.2,Me),F(1.2,.23,6,"#afaa85",3.4,0,.2,Me);for(let T=0;T<13;T++)F(.04,.015,1.21,"#8f9177",-5.6+T*.77,.13,-2.2,Me);for(let T of[-5.7,-2.8,0,3.2])ye(.09,.1,.7,"#d7d7b8",T,.2,-2.7,Me,8);let Ie=new Ct;Ie.position.set(-1.1,-.17,.65),Ie.rotation.y=-.13,Me.add(Ie);let U=new si;U.moveTo(-1.1,-2.7),U.lineTo(1.1,-2.7),U.lineTo(1.3,1.4),U.quadraticCurveTo(1.1,3.3,0,4),U.quadraticCurveTo(-1.1,3.3,-1.3,1.4),U.closePath();let ve=new It(new Ai(U,{depth:.7,bevelEnabled:!0,bevelSize:.15,bevelThickness:.15,bevelSegments:1,steps:1}),se("#f9f5de"));ve.rotation.x=-Math.PI/2,ve.castShadow=!0,Ie.add(ve),F(1.8,.8,3.2,"#f6f2dc",0,1.05,-.3,Ie),F(1.7,.38,2.9,"#527f85",0,1.4,-.3,Ie),F(2,.13,3.5,"#fff5df",0,1.65,-.3,Ie),F(1.1,.55,1.5,"#e8e8cd",0,1.94,-.55,Ie),F(1.2,.12,1.7,"#fff9e3",0,2.26,-.55,Ie),ye(.03,.03,1.3,"#c4cebd",0,2.8,-.65,Ie,6),F(1.65,.08,1.2,"#c7b895",0,.8,-2.1,Ie),be(Me,"marina");let Q=new Ct;Q.position.set(-15,-.04,21),Q.rotation.y=.25,a.add(Q),F(1.3,.35,3.5,"#f4edd9",0,.1,0,Q),ye(.035,.035,4,"#dedfd1",0,2,0,Q,6);let ue=new kt;ue.setAttribute("position",new St([0,3.8,0,0,.8,0,0,.8,1.8],3)),ue.computeVertexNormals();let De=new It(ue,new bn({color:"#fff5d9",side:Dn}));Q.add(De);let Ue=["#a6bcc4","#8fa9a3","#7a9886"],nt=["#2a3a55","#202e47","#172238"],Et=Ue.map(T=>new bn({color:T,roughness:1,fog:!1,emissive:"#000000"}));function Lt(T,P,z,V,de){let Ee=new Wa(z,V,14,6),we=Ee.attributes.position;for(let Qe=0;Qe<we.count;Qe++){let Ye=we.getY(Qe),mt=(Ye+V/2)/V;if(mt>.02&&mt<.98){let _t=.82+c()*.3;we.setX(Qe,we.getX(Qe)*_t),we.setZ(Qe,we.getZ(Qe)*_t),we.setY(Qe,Ye+(c()-.5)*V*.05)}}Ee.computeVertexNormals();let Ne=new It(Ee,Et[de]);return Ne.position.set(T,V/2-1,P),Ne.rotation.y=c()*Math.PI,Ne.scale.z=.7+c()*.5,a.add(Ne),Ne}for(let T=0;T<3;T++){let P=[265,228,195][T];for(let z=150;z<=390;z+=[8,10,13][T]){let V=(z+c()*6)*Math.PI/180,de=P+c()*20;Lt(Math.cos(V)*de,Math.sin(V)*de,[58,46,36][T]+c()*18,[62,44,28][T]+c()*[30,20,12][T],T)}}let ft=new Vn(1,1,1),Bt=new bn({color:"#efe6d6",roughness:.9,emissive:"#ffc77a",emissiveIntensity:0}),Kt=new Oa(ft,Bt,420);Kt.userData.dynamic=!0;let An=new Xt;for(let T=0;T<420;T++){let P=(165+c()*210)*Math.PI/180,z=150+c()*26,V=.7+c()*(c()>.92?7:2.6);An.position.set(Math.cos(P)*z,V/2-.3,Math.sin(P)*z),An.scale.set(.9+c()*1.6,V,.9+c()*1.6),An.rotation.y=P,An.updateMatrix(),Kt.setMatrixAt(T,An.matrix)}a.add(Kt),g.push(Bt);let Un=new Float32Array(900*3);for(let T=0;T<900;T++){let P=(165+c()*210)*Math.PI/180,z=148+c()*30;Un[T*3]=Math.cos(P)*z,Un[T*3+1]=.4+c()*c()*7,Un[T*3+2]=Math.sin(P)*z}let Mn=new kt;Mn.setAttribute("position",new tn(Un,3));let Rn=new Fa(Mn,new gr({color:"#ffd08a",size:1.1,sizeAttenuation:!0,transparent:!0,opacity:.9,fog:!1,depthWrite:!1}));Rn.visible=!1,a.add(Rn);let qs=[];function $n(T,P,z,V=1){let de=new Ct;return de.position.set(T,-.1,P),de.rotation.y=z,de.scale.setScalar(V),de.userData.dynamic=!0,a.add(de),F(1.4,.45,3.6,"#f7f3e6",0,.1,0,de,{roughness:.35}),F(1.2,.5,1.5,"#f2eee0",0,.55,-.2,de),F(1.1,.26,1.3,"#3d6670",0,.67,-.2,de,{metalness:.5,roughness:.15}),F(1.25,.06,1.6,"#c7b28c",0,.36,1.1,de),qs.push({group:de,phase:c()*6,baseY:-.1}),de}$n(7.5,21.5,.4),$n(23,23,-.3,1.2),$n(-4,26,1.2,.9),$n(-26,17,2.4,1.1),$n(30,8,.1),$n(-30,-6,1.7,.9);let rs=[];for(let T=0;T<65;T++){let P=-45+T*13.7%90,z=17+T*4.19%28,V=F(.6+T%5*.4,.006,.04,"#b3d2c4",P,-.305,z,a,{transparent:!0,opacity:.38});V.castShadow=!1,rs.push(V)}function Nr(T,P,z){let V=new Ct;V.position.set(T,.56,P),V.userData.dynamic=!0,a.add(V),ye(.1,.13,.44,z,0,.54,0,V,7),L(.115,"#bd9272",0,.91,0,V,1),L(.12,"#51483d",0,.99,-.025,V,1);let de=[];for(let Ee of[-1,1]){let we=F(.075,.36,.09,"#40575d",Ee*.075,.2,0,V);de.push(we),F(.06,.34,.07,z,Ee*.17,.55,0,V)}return V.userData.legs=de,V}for(let T=0;T<19;T++){let P=T%3===0?"x":"z",z=[[-18,-9],[-3.2,3.2],[9,18]][Math.floor(T/3)%3],V=P==="x"?{fixed:T%2?13.1:-15.1,min:z[0],max:z[1]}:{fixed:[-8.5,8.55,-3.9,3.9][T%4],min:T%2?-13:2.5,max:T%2?-3:12.8},de=Nr(P==="x"?V.min:V.fixed,P==="x"?V.fixed:V.min,["#c99a59","#597d9b","#a96d5c","#5f8a6d","#a89e7e"][T%5]);me.push({group:de,axis:P,...V,phase:T*.73,speed:.18+T%4*.025})}function as(T,P="car"){let z=new Ct;z.userData.dynamic=!0;let V=new bn({color:T,metalness:.4,roughness:.32}),de=F(.83,.32,1.65,T,0,.4,0,z);de.material=V,z.userData.body=V;let Ee=F(.68,.29,.88,T,0,.71,-.08,z);Ee.material=V,F(.66,.19,.05,"#284c58",0,.73,.35,z).rotation.x=-.28,F(.64,.2,.05,"#284c58",0,.72,-.53,z).rotation.x=.25;for(let we of[-.347,.347])F(.025,.19,.62,"#36565d",we,.73,-.08,z),F(.035,.035,.63,"#d4ddcf",we,.84,-.08,z),F(.1,.055,.12,T,we*1.24,.65,.26,z);for(let we of[-.44,.44])for(let Ne of[-.5,.5]){let Qe=ye(.18,.18,.12,"#263a3b",we,.25,Ne,z,14);Qe.rotation.z=Math.PI/2;let Ye=ye(.095,.095,.132,"#a4b4ad",we,.25,Ne,z,12);Ye.rotation.z=Math.PI/2}F(.61,.1,.025,"#243e3b",0,.4,.84,z),F(.18,.055,.03,"#ebecd8",0,.3,.85,z);for(let we of[-.28,.28])F(.19,.07,.04,"#fff4cf",we,.53,.84,z,{emissive:"#fff2bb",emissiveIntensity:.6}),F(.15,.075,.04,"#bc443b",we,.48,-.84,z,{emissive:"#e52c21",emissiveIntensity:.35});if(P==="bus"){z.scale.set(1.06,1.35,1.4),F(.82,.62,1.5,"#d5c297",0,.92,0,z);for(let we of[-.42,.42])for(let Ne of[-.49,-.1,.29,.57])F(.024,.34,.27,"#3e6670",we,1,Ne,z);F(.75,.3,.03,"#365b61",0,1,.77,z),I("CITY 04","#263d35","#e1edb1",.56,.1,0,1.31,.79,z)}return P==="truck"&&(F(.82,.74,1.05,"#dedaca",0,.82,-.29,z),I("VELO LOGISTICS","#dedaca","#6a7e65",.68,.17,0,.92,.25,z)),a.add(z),z}for(let[T,P]of ot.vehicles.entries()){let z=as(["#dba441","#e5e5db","#b17569","#527d74","#8fa6b1","#d9cdb2","#984c45","#647c89"][T%8],P.type);_e.push({group:z,vehicle:P})}Ie.userData.dynamic=!0,Q.userData.dynamic=!0;let Ys=F(.55,.22,.025,"#91c783",.25,3.15,-.65,Ie);Ys.visible=!1;function Zs(T){ot.step(T);for(let{group:P,vehicle:z}of _e)P.visible=z.active!==!1,P.position.set(z.x,.56,z.z),P.rotation.y=z.heading;for(let P of qe){let z=ot.getSignal(P.junction)===P.axis;P.green.material.emissiveIntensity=z?2.3:0,P.red.material.emissiveIntensity=z?0:1.8}}function Ur(T){for(let P of me){let z=(P.phase+T*P.speed)%(Math.PI*2),V=(1-Math.cos(z))*.5,de=P.min+(P.max-P.min)*V,Ee=Math.sin(z)>=0;P.group.position.set(P.axis==="x"?de:P.fixed,.56,P.axis==="z"?de:P.fixed),P.group.rotation.y=P.axis==="x"?Ee?Math.PI/2:-Math.PI/2:Ee?0:Math.PI,P.group.userData.legs.forEach((we,Ne)=>we.rotation.x=Math.sin(T*6+P.phase+Ne*Math.PI)*.32)}}function Or(T){T.updateWorldMatrix(!0,!0);let P=new Mt().copy(T.matrixWorld).invert(),z=new Map;T.traverse(V=>{if(!V.isMesh||Array.isArray(V.material)||V.material.transparent||!V.visible)return;let de=V,Ee=V.userData.business||"",we=!1;for(;de&&de!==T;){if(de.userData.dynamic){we=!0;break}Ee||(Ee=de.userData.business||""),de=de.parent}if(we||Object.keys(V.geometry.attributes).sort().join(",")!=="normal,position,uv")return;let Qe=[Ee,V.material.uuid,V.castShadow,V.receiveShadow].join(":");z.has(Qe)||z.set(Qe,{meshes:[],material:V.material,businessId:Ee,castShadow:V.castShadow,receiveShadow:V.receiveShadow}),z.get(Qe).meshes.push(V)});for(let V of z.values()){if(V.meshes.length<2)continue;let de=V.meshes.map(Ne=>{let Qe=Ne.geometry.index?Ne.geometry.toNonIndexed():Ne.geometry.clone();return Qe.applyMatrix4(new Mt().multiplyMatrices(P,Ne.matrixWorld)),Qe}),Ee=new kt;for(let Ne of["position","normal","uv"]){let Qe=de[0].attributes[Ne].itemSize,Ye=de.reduce((Nt,rn)=>Nt+rn.attributes[Ne].array.length,0),mt=new Float32Array(Ye),_t=0;for(let Nt of de)mt.set(Nt.attributes[Ne].array,_t),_t+=Nt.attributes[Ne].array.length;Ee.setAttribute(Ne,new tn(mt,Qe))}Ee.computeBoundingBox(),Ee.computeBoundingSphere();let we=new It(Ee,V.material);we.castShadow=V.castShadow,we.receiveShadow=V.receiveShadow,V.businessId&&(we.userData.business=V.businessId),T.add(we);for(let Ne of V.meshes)Ne.removeFromParent(),Ne.geometry.dispose();de.forEach(Ne=>Ne.dispose())}}for(let{group:T}of _e)Or(T);Or(a),a.traverse(T=>{if(T.isMesh)for(let P of Array.isArray(T.material)?T.material:[T.material])!P||P.isMeshBasicMaterial||M.includes(P)||(P.emissive&&P.emissiveIntensity===.32&&!b.includes(P)&&b.push(P),P.metalness>=.2&&P.roughness<=.4&&(P.envMap=x.day,P.envMapIntensity=P===O.material?1.1:.9,P.needsUpdate=!0,M.push(P)))}),ge.length=0,a.traverse(T=>{T.isMesh&&T.userData.business&&ge.push(T)}),Zs(0),Ur(0);function mn(T,P,z,V,de=0,Ee=0){let we=document.createElement("button");we.className="city-place",we.type="button",we.setAttribute("aria-label",`Visit ${P}`),we.style.cssText="position:absolute;z-index:2;transform:translate(-50%,-100%);border:1px solid #ffffffcc;background:#fffffff0;box-shadow:0 3px 16px #2e50431c;border-radius:9px;padding:6px 10px;color:#2b463b;font-family:inherit;font-size:10px;font-weight:650;line-height:1.3;white-space:nowrap;cursor:pointer;backdrop-filter:blur(8px);pointer-events:auto;",we.innerHTML=`<span style="display:inline-block;width:5px;height:5px;background:#829288;border-radius:50%;margin-right:5px"></span>${P}<span style="display:block;font-size:8px;letter-spacing:.08em;font-weight:500;color:#829087;margin-top:2px">${z}</span>`,we.addEventListener("click",Qe=>{Qe.stopPropagation(),e(T)}),i.append(we);let Ne={el:we,id:T,tag:z,offset:new H(de,V,Ee)};ce.push(Ne),we.addEventListener("pointerenter",()=>ne(Ne)),we.addEventListener("focus",()=>ne(Ne)),we.addEventListener("pointerleave",ie),we.addEventListener("blur",ie)}let E=document.createElement("div");E.className="city-photo",E.setAttribute("aria-hidden","true"),i.append(E);let q=null;function ne(T){let P=n(T.id);P&&(q=T,E.innerHTML=`<img src="${P}" alt=""><span>${T.el.childNodes[1]?.textContent||""}</span>`,Y(),E.classList.add("show"))}function ie(){q=null,E.classList.remove("show")}function Y(){if(!q)return;let T=q.el;if(T.style.display==="none"){ie();return}E.style.left=T.style.left,E.style.top=`calc(${T.style.top} - ${T.offsetHeight+8}px)`}mn("cafe","Corner Caf\xE9","CAF\xC9 & TERRACE",5,0,1),mn("tower","Velora Tower","BUSINESS DISTRICT",19.2),mn("hotel","Harbor Hotel","HOTEL & RESIDENCES",11.3),mn("marina","Azure Marina","LIVE A LITTLE",4.7,0,.6),mn("studio","Creative Studio","ARTS QUARTER",9.6),mn("restaurant","The Greenhouse","GARDEN DISTRICT",5.6),mn("market","Northside Grocer","NORTH DISTRICT",6.6),mn("logistics","Velo Logistics","NORTH DISTRICT",15),mn("tech","Velora Labs","NORTH DISTRICT",19.3),mn("skyline","Skyline Exchange","FINANCIAL DISTRICT",27.4),mn("apartments","Parkview Residences","NORTH DISTRICT",13.2);let Ae=new Set(["cafe","tower","hotel","marina"]),ze=new Set(["cafe"]),We=.75,$e=.75,et=1,Ke=1,Ve=new H(0,3,-7),dt=Ve.clone(),xt=!1,it=!1,qt=!1,pt=!1,Xe=0,gn=0,yt=0,sn=0,un=0,Yt=performance.now(),ci=new Ja,Tt=new Le;function Sn(T){let P=r.domElement.getBoundingClientRect();Tt.set((T.clientX-P.left)/P.width*2-1,-(T.clientY-P.top)/P.height*2+1),ci.setFromCamera(Tt,v);let z=ci.intersectObjects(ge,!1);z.length&&e(z[0].object.userData.business)}function Di(T){pt=!0,Xe=0,gn=T.clientX,yt=T.clientY,r.domElement.setPointerCapture(T.pointerId),r.domElement.style.cursor="grabbing"}function hn(T){if(!pt)return;let P=T.clientX-gn,z=T.clientY-yt;Xe+=Math.abs(P)+Math.abs(z),C==="street"?G-=P*.006:$e-=P*.006,gn=T.clientX,yt=T.clientY}function On(T){pt&&(pt=!1,r.domElement.style.cursor="grab",r.domElement.hasPointerCapture(T.pointerId)&&r.domElement.releasePointerCapture(T.pointerId),Xe<7&&Sn(T))}function Fn(T){T.preventDefault(),C==="street"?(S.fov=Math.max(40,Math.min(80,S.fov+T.deltaY*.018)),S.updateProjectionMatrix()):Ke=Math.max(.65,Math.min(2.2,Ke-T.deltaY*.001))}function li(T,P=1.5){if(C!=="street"||!Number.isFinite(P)||P<=0)return;let z=new H(Math.sin(B),0,-Math.cos(B)),V=new H(Math.cos(B),0,Math.sin(B)),de=T==="forward"?z:T==="back"?z.negate():T==="left"?V.negate():V,Ee=Math.min(P,2),we=Math.ceil(Ee/.2);de.multiplyScalar(Ee/we);let Ne=(Qe,Ye)=>Math.abs(Qe)<=(Ye<-15.2?24:20.1)&&Ye>=-38&&Ye<=14.6&&!ee.some(([mt,_t,Nt,rn])=>Qe>mt-.35&&Qe<_t+.35&&Ye>Nt-.35&&Ye<rn+.35);for(let Qe=0;Qe<we;Qe++)Ne(W.x+de.x,W.z)&&(W.x+=de.x),Ne(W.x,W.z+de.z)&&(W.z+=de.z)}function Ud(T){let P=T.key.toLowerCase();["w","a","s","d","arrowleft","arrowright","arrowup","arrowdown","+","=","-"].includes(P)&&T.preventDefault(),C==="street"?P==="+"||P==="="||P==="-"?(S.fov=Math.max(40,Math.min(80,S.fov+(P==="-"?3:-3))),S.updateProjectionMatrix()):ae.add(P):(P==="arrowleft"&&($e-=.15),P==="arrowright"&&($e+=.15),(P==="+"||P==="=")&&(Ke=Math.min(2.2,Ke+.1)),P==="-"&&(Ke=Math.max(.65,Ke-.1)))}let Od=T=>ae.delete(T.key.toLowerCase());r.domElement.addEventListener("keyup",Od),r.domElement.addEventListener("blur",()=>ae.clear()),r.domElement.addEventListener("pointerdown",Di),r.domElement.addEventListener("pointermove",hn),r.domElement.addEventListener("pointerup",On),r.domElement.addEventListener("pointercancel",T=>{pt=!1,r.domElement.style.cursor="grab",r.domElement.hasPointerCapture(T.pointerId)&&r.domElement.releasePointerCapture(T.pointerId)}),r.domElement.addEventListener("wheel",Fn,{passive:!1}),r.domElement.addEventListener("keydown",Ud);function co(){let T=i.clientWidth||850,P=i.clientHeight||580;r.setSize(T,P,!1);let z=T/P;k.aspect=z;let V=z<1;k.fov=V?Math.min(52,32/z*.9):32,A=V?.56:.41,D=V?1:7,k.updateProjectionMatrix(),S.aspect=z,S.updateProjectionMatrix()}let Jl=new ResizeObserver(co);Jl.observe(i),co();function Kl(T){if(qt)return;if(sn=requestAnimationFrame(Kl),document.hidden||!i.offsetWidth||!i.offsetHeight){Yt=T;return}let P=Math.min(.1,(T-Yt)/1e3);if(Yt=T,xt||(un+=P,Zs(P),Ur(un)),We+=($e-We)*.09,et+=(Ke-et)*.08,Ve.lerp(dt,.07),C==="street")ae.has("arrowleft")&&(G-=P*1.2),ae.has("arrowright")&&(G+=P*1.2),B+=(G-B)*.2,(ae.has("w")||ae.has("arrowup"))&&li("forward",P*3),(ae.has("s")||ae.has("arrowdown"))&&li("back",P*3),ae.has("a")&&li("left",P*3),ae.has("d")&&li("right",P*3),v.position.copy(W),v.lookAt(W.x+Math.sin(B)*15,W.y+1.4,W.z-Math.cos(B)*15);else{let de=_*Math.cos(A);v.position.set(Ve.x+Math.sin(We)*de,Ve.y+_*Math.sin(A),Ve.z+Math.cos(We)*de),v.lookAt(Ve.x,Ve.y+D,Ve.z),v.zoom=et,v.updateProjectionMatrix()}for(let de of qs)de.group.position.y=de.baseY+Math.sin(un*.9+de.phase)*.04,de.group.rotation.z=Math.sin(un*.6+de.phase)*.02;Ie.rotation.z=Math.sin(un*.7)*.013,Ie.position.y=-.17+Math.sin(un)*.025,Q.position.y=-.04+Math.sin(un*.8)*.03;let z=i.clientWidth,V=i.clientHeight;ce.forEach(de=>{let Ee=Z[de.id].position.clone().add(de.offset).project(v);de.el.style.left=`${(Ee.x*.5+.5)*z}px`,de.el.style.top=`${(-Ee.y*.5+.5)*V}px`;let we=ze.has(de.id)||Ae.has(de.id)||C!=="street"&&et>1.3;de.el.style.display=!we||Ee.z>1||Ee.z<-1||Ee.x<-.92||Ee.x>.92||Ee.y<-.95||Ee.y>.95?"none":""}),Y(),t({vehicles:ot.vehicles,paused:xt,night:it,view:C,zoom:et,signal:ot.getSignal(-6.25),listener:C==="street"?{x:W.x,z:W.z,yaw:B}:{x:Ve.x,z:Ve.z,yaw:We}}),r.render(a,v)}return sn=requestAnimationFrame(Kl),{focus(T){let P=Z[T];P&&(dt.copy(P.position),dt.y=T==="tower"?6:T==="hotel"?4:2,Ke=1.8,C==="street"&&(W.set(Math.max(-23,Math.min(23,P.position.x)),2.05,Math.min(14.4,P.position.z+7)),B=G=T==="marina"?Math.PI:0))},reset(){dt.set(0,3,-7),Ke=1,$e=.75,W.set(3.8,2.05,12.6),B=G=0,S.fov=62,S.updateProjectionMatrix()},zoom(T){C==="street"?(S.fov=Math.max(40,Math.min(80,S.fov-T*18)),S.updateProjectionMatrix()):Ke=Math.max(.65,Math.min(2.2,Ke+T))},setNight(T){it=!!T,a.background=it?h.night:h.day,a.fog.color.copy(it?d:m),N.intensity=it?.55:5,N.color.set(it?"#a9c2ff":"#ffc888"),$.intensity=it?.75:1.75,$.color.set(it?"#5d7396":"#d6e8fb"),K.intensity=it?.35:.8,r.toneMappingExposure=it?1.1:1.02,M.forEach(P=>{P.envMap=it?x.night:x.day,P.needsUpdate=!0}),b.forEach(P=>P.emissiveIntensity=it?1.6:.32),g.forEach(P=>{P.emissiveIntensity=0,P.color.set(it?"#262f40":"#efe6d6")}),Rn.visible=it,Et.forEach((P,z)=>{P.color.set(it?"#000000":Ue[z]),P.emissive.set(it?nt[z]:"#000000")}),Object.values(J).forEach(P=>{(P.color.getHexString()==="6b9e9a"||P.color.getHexString()==="739a96")&&(P.emissive.set(it?"#d8c187":"#000000"),P.emissiveIntensity=it?.45:0)}),Je.forEach(P=>P.material.emissiveIntensity=it?2:.1)},setPaused(T){xt=!!T},setView(T){C=T==="street"?"street":"overview",v=C==="street"?S:k,ae.clear(),r.domElement.setAttribute("aria-label",C==="street"?"Street exploration. WASD to walk, arrows or drag to look around.":"Interactive 3D city. Drag to rotate, scroll to zoom, or select a building."),r.domElement.focus({preventScroll:!0}),co()},getView(){return C},move(T,P=1.5){["forward","back","left","right"].includes(T)&&li(T,P),r.domElement.focus({preventScroll:!0})},setAssets(T){let P=new Set(T);Ys.visible=P.has("yacht");let z=_e.find(V=>V.vehicle.type==="car");z&&(z.group.userData.body.color.set(P.has("supercar")?"#b34231":P.has("roadster")?"#dcab4c":"#dba441"),z.group.userData.body.metalness=P.has("supercar")?.7:.4)},renderBusinessThumbnail(T,{width:P=640,height:z=360}={}){let V=Z[T];if(!V)return null;let de=r.getSize(new Le),Ee=r.getPixelRatio();try{let we=new Ht(34,P/z,.1,250),Ne=new pn().setFromObject(V),Qe=Ne.getSize(new H),Ye=Ne.getCenter(new H),_t=Math.max(Qe.x,Qe.z,Qe.y*.9)*1.55+6;return we.position.set(Ye.x+_t*.55,Ye.y+_t*.5,Ye.z+_t*.75),we.lookAt(Ye),r.setPixelRatio(1),r.setSize(P,z,!1),r.render(a,we),r.domElement.toDataURL("image/png")}catch{return null}finally{r.setPixelRatio(Ee),r.setSize(de.x,de.y,!1),r.render(a,v)}},setOwned(T){let P=new Set(T);ze=P,ce.forEach(z=>{let V=z.el.querySelector("span:last-child");V&&(V.textContent=P.has(z.id)?"YOUR BUSINESS":z.tag);let de=z.el.querySelector("span:first-child");de&&(de.style.background=P.has(z.id)?"#37a881":"#829288")})},setDistrict(T){T==="waterfront"||T==="marina"?this.focus("marina"):T==="downtown"||T==="business"?this.focus("tower"):T==="park"||T==="residential"?(dt.set(0,1.5,7),Ke=1.35):this.reset()},destroy(){qt=!0,cancelAnimationFrame(sn),Jl.disconnect(),ce.forEach(V=>V.el.remove()),E.remove(),Object.values(h).forEach(V=>V.dispose()),Object.values(x).forEach(V=>V.dispose()),r.domElement.remove();let T=new Set,P=new Set(Object.values(J)),z=new Set;a.traverse(V=>{V.geometry&&T.add(V.geometry),V.material&&(Array.isArray(V.material)?V.material:[V.material]).forEach(de=>P.add(de))}),T.forEach(V=>V.dispose()),P.forEach(V=>{for(let de of Object.values(V))de?.isTexture&&z.add(de);V.dispose()}),z.forEach(V=>V.dispose()),r.dispose()}}}var jh="velora-audio-v2",Ov={city:"./assets/audio/city-ambience.mp3",street:"./assets/audio/street-ambience.mp3"},Er={city:{city:1,wind:1,street:0,crowd:0,traffic:0,gulls:!0,birds:!1,crickets:!1,distantHorns:!0,muffle:18e3},"city-night":{city:.7,wind:.9,street:0,crowd:0,traffic:0,gulls:!1,birds:!1,crickets:!0,distantHorns:!0,muffle:18e3},street:{city:.35,wind:.1,street:1,crowd:1,traffic:1,gulls:!1,birds:!0,crickets:!1,distantHorns:!1,muffle:18e3},"street-night":{city:.25,wind:.1,street:.75,crowd:.35,traffic:1,gulls:!1,birds:!1,crickets:!0,distantHorns:!1,muffle:18e3},interior:{city:.45,wind:0,street:0,crowd:0,traffic:0,gulls:!1,birds:!1,crickets:!1,distantHorns:!1,muffle:420}},Qh=6,Fv=40;function ed(){let i=globalThis.document,e=globalThis.AudioContext||globalThis.webkitAudioContext,t={on:!!e,ambience:.8,effects:.8};try{let I=JSON.parse(globalThis.localStorage?.getItem(jh)||"null");I&&typeof I=="object"&&(typeof I.on=="boolean"&&(t.on=I.on&&!!e),Number.isFinite(I.ambience)&&(t.ambience=Math.min(1,Math.max(0,I.ambience))),Number.isFinite(I.effects)&&(t.effects=Math.min(1,Math.max(0,I.effects))))}catch{}let n=null,s=null,r=null,a=null,o=null,c=null,l=null,u=null,h=null,f=null,p={},y=[],x="city",m=!1,d=null,M=null,b=null,g=0,k=0,_=null,A=0,D=new Map,S=new Map,v={gull:0,bird:0,cricket:0,distant:0,siren:0,honk:0,beep:0},C=()=>{try{globalThis.localStorage?.setItem(jh,JSON.stringify(t))}catch{}},W=()=>n.currentTime,B=(I,O)=>I+Math.random()*(O-I),G=(I,O,X=.25)=>{if(!n||!I)return;let fe=W();I.cancelScheduledValues(fe),I.setTargetAtTime(O,fe,Math.max(.01,X/3))};function ae(I,O){let X=Math.floor(n.sampleRate*I),fe=n.createBuffer(1,X,n.sampleRate),oe=fe.getChannelData(0),pe=0,Se=0,le=0,xe=0,Te=0,Oe=0,re=0,He=0;for(let Ie=0;Ie<X;Ie++){let U=Math.random()*2-1;O==="pink"?(pe=.99886*pe+U*.0555179,Se=.99332*Se+U*.0750759,le=.969*le+U*.153852,xe=.8665*xe+U*.3104856,Te=.55*Te+U*.5329522,Oe=-.7616*Oe-U*.016898,oe[Ie]=(pe+Se+le+xe+Te+Oe+re+U*.5362)*.11,re=U*.115926):O==="brown"?(He=(He+.02*U)/1.02,oe[Ie]=He*3.5):oe[Ie]=U}let Me=Math.min(2048,X>>3);for(let Ie=0;Ie<Me;Ie++){let U=Ie/Me;oe[Ie]=oe[Ie]*U+oe[X-Me+Ie]*(1-U)}return fe}function ee(I,O=Math.random()){let X=n.createBufferSource();return X.buffer=I,X.loop=!0,X.start(0,O*I.duration),X}function $(I,O,X=.7){let fe=n.createBiquadFilter();return fe.type=I,fe.frequency.value=O,fe.Q.value=X,fe}function N(I=0){let O=n.createGain();return O.gain.value=I,O}function K(I=0){if(n.createStereoPanner){let O=n.createStereoPanner();return O.pan.value=I,O}return N(1)}function J(I,O,X,fe="sine"){let oe=n.createOscillator();oe.type=fe,oe.frequency.value=I;let pe=N(O);return oe.connect(pe),pe.connect(X),oe.start(),oe}function se(...I){for(let O=0;O<I.length-1;O++)I[O].connect(I[O+1]);return I[I.length-1]}function he(I=2.6,O=2.4){let X=Math.floor(n.sampleRate*I),fe=n.createBuffer(2,X,n.sampleRate);for(let oe=0;oe<2;oe++){let pe=fe.getChannelData(oe);for(let Se=0;Se<X;Se++)pe[Se]=(Math.random()*2-1)*Math.pow(1-Se/X,O)}return fe}function ge({freq:I=800,to:O=null,type:X="sine",start:fe=0,attack:oe=.005,hold:pe=0,decay:Se=.15,volume:le=.1,pan:xe=0,dest:Te=c,detune:Oe=0,filterFreq:re=null,wet:He=0}){if(!n)return;let Me=W()+fe,Ie=n.createOscillator();Ie.type=X,Ie.frequency.setValueAtTime(I,Me),Ie.detune.value=Oe,O&&Ie.frequency.exponentialRampToValueAtTime(O,Me+oe+pe+Se*.7);let U=N(0);U.gain.setValueAtTime(0,Me),U.gain.linearRampToValueAtTime(le,Me+oe),U.gain.setValueAtTime(le,Me+oe+pe),U.gain.exponentialRampToValueAtTime(1e-4,Me+oe+pe+Se);let ve=Ie;if(re){let ue=$("lowpass",re,.5);Ie.connect(ue),ve=ue}let Q=K(xe);if(ve.connect(U),U.connect(Q),Q.connect(Te),He>0){let ue=N(He);Q.connect(ue),ue.connect(u)}Ie.start(Me),Ie.stop(Me+oe+pe+Se+.05),Ie.onended=()=>{try{Ie.disconnect(),U.disconnect(),Q.disconnect()}catch{}}}function Z({start:I=0,duration:O=.3,volume:X=.05,type:fe="bandpass",freq:oe=2e3,q:pe=.8,pan:Se=0,dest:le=c,attack:xe=.005,color:Te="white",wet:Oe=0}){if(!n)return;let re=W()+I,He=n.createBufferSource();He.buffer=h[Te],He.loop=!0;let Me=$(fe,oe,pe),Ie=N(0),U=K(Se);if(Ie.gain.setValueAtTime(0,re),Ie.gain.linearRampToValueAtTime(X,re+xe),Ie.gain.exponentialRampToValueAtTime(1e-4,re+O),se(He,Me,Ie,U),U.connect(le),Oe>0){let ve=N(Oe);U.connect(ve),ve.connect(u)}He.start(re,Math.random()*2),He.stop(re+O+.05),He.onended=()=>{try{He.disconnect(),Me.disconnect(),Ie.disconnect(),U.disconnect()}catch{}}}function ce(I,O,X,fe=0,oe=.9){[[1,1],[2.01,.45],[3.02,.22],[4.17,.12]].forEach(([pe,Se])=>ge({freq:I*pe,start:O,volume:X*Se,decay:oe/pe**.4,pan:fe,wet:.18}))}function _e(){if(n)return;n=new e({latencyHint:"interactive"}),r=N(0);let I=n.createDynamicsCompressor();I.threshold.value=-16,I.knee.value=10,I.ratio.value=4,I.attack.value=.006,I.release.value=.25,r.connect(I),I.connect(n.destination),s=n.createAnalyser(),s.fftSize=2048,I.connect(s);let O=n.createConvolver();O.buffer=he(),u=N(1);let X=N(.55);se(u,O,X),X.connect(r),c=N(t.effects),c.connect(r),o=$("lowpass",Er[x].muffle,.5),a=N(t.ambience),se(a,o,r),l=N(0),l.connect(o),h={white:ae(3,"white"),pink:ae(5,"pink"),brown:ae(6,"brown"),pinkR:ae(5.3,"pink"),brownR:ae(6.4,"brown")},f={},f.city=N(0),f.city.connect(a);for(let[le,xe]of[[h.brown,-.7],[h.brownR,.7]]){let Te=se(ee(le),$("lowpass",240,.4),N(.9)),Oe=N(.75);J(B(.04,.07),.25,Oe.gain),se(Te,Oe,K(xe),f.city)}se(ee(h.pink),$("bandpass",140,.6),N(.35)).connect(f.city),f.wind=N(0),f.wind.connect(a);let oe=$("bandpass",650,1.1);J(.05,260,oe.frequency);let pe=N(.3);J(.085,.18,pe.gain),se(ee(h.pinkR),oe,pe,f.wind),f.street=N(0),f.street.connect(a),se(ee(h.brown),$("lowpass",520,.5),N(.75),f.street),se(ee(h.pink),$("bandpass",1300,.55),N(.12),K(.3),f.street),se(ee(h.pinkR),$("bandpass",1100,.55),N(.12),K(-.3),f.street),f.crowd=N(0),f.crowd.connect(a);let Se=N(.12);J(.31,.05,Se.gain),J(.13,.04,Se.gain),se(ee(h.pink),$("bandpass",750,1.4),$("peaking",1800,1),Se,f.crowd);for(let le=0;le<Qh;le++){let xe=n.createOscillator();xe.type="sawtooth",xe.frequency.value=40;let Te=n.createOscillator();Te.type="square",Te.frequency.value=80,Te.detune.value=9;let Oe=n.createOscillator();Oe.type="sine",Oe.frequency.value=20;let re=N(.22),He=N(.5),Me=$("lowpass",400,1.2),Ie=N(0);xe.connect(Me),Te.connect(re),re.connect(Me),Oe.connect(He),He.connect(Ie),Me.connect(Ie);let U=ee(h.white),ve=$("bandpass",900,.7),Q=N(0);se(U,ve,Q);let ue=$("lowpass",6e3,.5),De=K(0);Ie.connect(ue),Q.connect(ue),ue.connect(De),De.connect(l),xe.start(),Te.start(),Oe.start(),y.push({engine:xe,growl:Te,sub:Oe,engineFilter:Me,engineGain:Ie,tyre:U,tyreFilter:ve,tyreGain:Q,air:ue,panner:De,vehicle:null})}me(),Pe(0)}async function me(){for(let[I,O]of Object.entries(Ov))try{let X=await fetch(O,{cache:"force-cache"});if(!X.ok||!(X.headers.get("content-type")||"").includes("audio"))continue;let fe=await n.decodeAudioData(await X.arrayBuffer()),oe=ee(fe,Math.random()),pe=N(0);se(oe,pe,a),p[I]=pe,Pe(.8)}catch{}}function Pe(I=.8){if(!n)return;let O=Er[x],X=b?.paused,fe=X?.25:.45+.55*k,oe=.075*O.city*fe,pe=.3*O.street*(X?.3:.55+.45*k);G(f.city.gain,p.city?0:oe,I),G(f.street.gain,p.street?0:pe,I),p.city&&G(p.city.gain,oe*4,I),p.street&&G(p.street.gain,pe*2.5,I),G(f.wind.gain,.09*O.wind,I),G(f.crowd.gain,.5*O.crowd*(X?.5:1),I),G(l.gain,O.traffic&&!X?1:0,I*.6),G(o.frequency,O.muffle,I)}function Je(I){if(b=I,!n||n.state!=="running"||!t.on||m)return;let O=W();if(O-g<.06)return;let X=Math.min(.5,O-g);g=O;let fe=I.vehicles.filter(re=>re.active!==!1),oe=fe.length?fe.filter(re=>!re.stopped).length/fe.length:0;if(k+=(oe-k)*Math.min(1,X*1.5),I.signal!==_&&(_=I.signal,A=O),!Er[x].traffic||I.paused){y.forEach(re=>{G(re.engineGain.gain,0,.3),G(re.tyreGain.gain,0,.3),re.vehicle=null}),Pe(.6);return}let Se=I.listener||{x:0,z:0,yaw:0},le={x:Math.cos(Se.yaw||0),z:Math.sin(Se.yaw||0)},xe=fe.map(re=>({v:re,dx:re.x-Se.x,dz:re.z-Se.z})).map(re=>({...re,d:Math.hypot(re.dx,re.dz)})).filter(re=>re.d<34).sort((re,He)=>re.d-He.d).slice(0,Qh),Te=new Set(xe.map(re=>re.v.id));y.forEach(re=>{re.vehicle&&!Te.has(re.vehicle)&&(re.vehicle=null,G(re.engineGain.gain,0,.4),G(re.tyreGain.gain,0,.4))});for(let re of xe){let He=y.find(Rn=>Rn.vehicle===re.v.id)||y.find(Rn=>!Rn.vehicle);if(!He)continue;He.vehicle=re.v.id;let Me=re.v,Ie=Math.max(.6,re.d),U=Me.type!=="car",ve=S.get(Me.id)||{speed:Me.speed,stopped:Me.stopped,stoppedAt:Me.stopped?O:null,honked:!1,lastHonk:-99},Q=Math.max(0,(Me.speed-ve.speed)/Math.max(X,.016)),ue=Math.sin(Me.heading)*Me.speed,De=Math.cos(Me.heading)*Me.speed,Ue=-(ue*re.dx+De*re.dz)/Ie,nt=Math.min(1.18,Math.max(.86,1/(1-Ue/Fv))),Et=Math.min(1,Me.speed/2.6),Lt=((U?22:29)+Me.speed*(U?8:12)+Math.min(1,Q/1.6)*(U?6:10))*nt;G(He.engine.frequency,Lt,.12),G(He.growl.frequency,Lt*2,.12),G(He.sub.frequency,Lt/2,.12);let ft=1/(1+(Ie/3.2)**2);G(He.engineFilter.frequency,260+Me.speed*230+Math.min(1,Q)*500,.15),G(He.air.frequency,7e3/(1+Ie/14),.2),G(He.engineGain.gain,(U?.2:.13)*(.32+.68*Et)*ft,.12),G(He.tyreFilter.frequency,650+Me.speed*200,.2),G(He.tyreGain.gain,.07*Et**1.5*ft,.12);let Bt=(re.dx*le.x+re.dz*le.z)/Ie;He.panner.pan&&G(He.panner.pan,Math.max(-.92,Math.min(.92,Bt)),.1),Me.stopped&&!ve.stopped&&U&&re.d<26&&ot(Bt,ft),Me.stopped&&!ve.stopped&&(ve.stoppedAt=O),Me.stopped||(ve.stoppedAt=null,ve.honked=!1),Me.stopped&&ve.stoppedAt&&!ve.honked&&O-ve.stoppedAt>4.5&&O-v.honk>5&&re.d<24&&Math.random()<.35?(ve.honked=!0,v.honk=O,qe(Bt,ft,U,Math.random()<.5?2:1)):Me.stopped&&ve.stoppedAt&&O-ve.stoppedAt>4.5&&(ve.honked=!0);let Kt=Math.sin(Me.heading),An=Math.cos(Me.heading),Un=-(re.dx*Kt+re.dz*An),Mn=Math.abs(-re.dx*An+re.dz*Kt);Un>.5&&Un<7&&Mn<.9&&Me.speed>.6&&O-ve.lastHonk>2.5&&(ve.lastHonk=O,v.honk=O,qe(Bt,Math.max(ft,.35),U,0)),S.set(Me.id,{...ve,speed:Me.speed,stopped:Me.stopped})}if(O-v.honk>B(14,30)&&xe.length){let re=xe[Math.floor(Math.random()*xe.length)];v.honk=O,qe((re.dx*le.x+re.dz*le.z)/Math.max(.6,re.d),1/(1+(re.d/3.2)**2),re.v.type!=="car",1)}if([-6.25,6.25].some(re=>Math.abs(Se.x-re)<7&&Math.abs(Se.z-.1)<7)&&O-v.beep>(O-A<5&&_!=="clear"?.22:1.05)){v.beep=O;let re=O-A<5&&_!=="clear";ge({freq:re?2900:1100,type:re?"square":"triangle",decay:re?.05:.03,volume:re?.012:.02,dest:a,filterFreq:4e3})}Pe(.6)}function qe(I,O,X,fe){if(!n)return;let oe=X?B(290,330):B(395,450),pe=Math.min(.09,.05*O+.006),Se=fe===0?[[0,.55]]:fe===2?[[0,.13],[.2,.2]]:[[0,B(.18,.32)]],le=n.createWaveShaper(),xe=new Float32Array(256);for(let U=0;U<256;U++){let ve=U/128-1;xe[U]=Math.tanh(ve*2.5)}le.curve=xe;let Te=$("peaking",1800,1.2);Te.gain.value=6;let Oe=$("lowpass",3400,.7),re=K(Math.max(-.9,Math.min(.9,I))),He=N(1);se(le,Te,Oe,He,re),re.connect(l.gain.value>0?l:a);let Me=N(.25);re.connect(Me),Me.connect(u);let Ie=0;for(let[U,ve]of Se){let Q=W()+U;Ie=Math.max(Ie,U+ve);for(let ue of[1,1.26]){let De=n.createOscillator();De.type="square",De.frequency.value=oe*ue;let Ue=N(0);Ue.gain.setValueAtTime(0,Q),Ue.gain.linearRampToValueAtTime(pe,Q+.012),Ue.gain.setValueAtTime(pe,Q+ve-.03),Ue.gain.linearRampToValueAtTime(0,Q+ve),De.connect(Ue),Ue.connect(le),De.start(Q),De.stop(Q+ve+.02),De.onended=()=>{try{De.disconnect(),Ue.disconnect()}catch{}}}}setTimeout(()=>{try{le.disconnect(),Te.disconnect(),Oe.disconnect(),He.disconnect(),re.disconnect(),Me.disconnect()}catch{}},(Ie+1)*1e3)}function ot(I,O){Z({duration:.75,volume:.05*O+.004,type:"highpass",freq:2600,q:.5,pan:I,dest:l,attack:.02,wet:.1}),Z({start:.05,duration:.35,volume:.03*O,type:"bandpass",freq:5200,q:1,pan:I,dest:l})}function F(){let I=B(-.8,.8),O=B(380,460);[1,1.26].forEach(X=>ge({freq:O*X,type:"square",attack:.02,hold:B(.15,.4),decay:.08,volume:.006,pan:I,dest:a,filterFreq:700,wet:.9}))}function ye(){let I=W(),O=n.createOscillator(),X=N(0),fe=$("lowpass",1300,.5),oe=K(B(-.8,.8));O.type="triangle";for(let Se=0;Se<4;Se++)O.frequency.setValueAtTime(620,I+Se*1.6),O.frequency.linearRampToValueAtTime(1180,I+Se*1.6+.8),O.frequency.linearRampToValueAtTime(620,I+Se*1.6+1.6);X.gain.setValueAtTime(0,I),X.gain.linearRampToValueAtTime(.006,I+1.5),X.gain.setValueAtTime(.006,I+4.6),X.gain.linearRampToValueAtTime(0,I+6.4),se(O,fe,X,oe),oe.connect(a);let pe=N(1.2);oe.connect(pe),pe.connect(u),O.start(I),O.stop(I+6.5),O.onended=()=>{try{O.disconnect(),fe.disconnect(),X.disconnect(),oe.disconnect(),pe.disconnect()}catch{}}}function L(){let I=B(-.9,.9),O=2+Math.floor(Math.random()*3),X=B(.9,1.15);for(let fe=0;fe<O;fe++){let oe=W()+fe*B(.28,.4),pe=n.createOscillator(),Se=N(0),le=$("bandpass",1800,1.5),xe=K(I);pe.type="sawtooth",pe.frequency.setValueAtTime(1150*X,oe),pe.frequency.linearRampToValueAtTime(1950*X,oe+.07),pe.frequency.exponentialRampToValueAtTime(1050*X,oe+.26),Se.gain.setValueAtTime(0,oe),Se.gain.linearRampToValueAtTime(.007,oe+.03),Se.gain.exponentialRampToValueAtTime(1e-4,oe+.28),se(pe,le,Se,xe),xe.connect(a);let Te=N(.6);xe.connect(Te),Te.connect(u),pe.start(oe),pe.stop(oe+.3),pe.onended=()=>{try{pe.disconnect(),le.disconnect(),Se.disconnect(),xe.disconnect(),Te.disconnect()}catch{}}}}function Ge(){let I=B(-.9,.9),O=2+Math.floor(Math.random()*4),X=B(2800,4200);for(let fe=0;fe<O;fe++)ge({freq:X*B(.9,1.15),to:X*B(1.2,1.5),start:fe*B(.09,.16),attack:.006,decay:B(.05,.09),volume:.006,pan:I,dest:a,wet:.3})}function be(){let I=B(-.9,.9),O=3+Math.floor(Math.random()*3),X=B(4300,4700);for(let fe=0;fe<O;fe++)ge({freq:X,start:fe*.045,attack:.004,decay:.03,volume:.0045,pan:I,dest:a})}function Fe(){if(!n||n.state!=="running"||!t.on||i?.hidden)return;let I=W(),O=Er[x];O.gulls&&I>v.gull&&(v.gull=I+B(7,16),L()),O.birds&&I>v.bird&&(v.bird=I+B(3,8),Ge()),O.crickets&&I>v.cricket&&(v.cricket=I+B(.6,2.2),be()),O.distantHorns&&!b?.paused&&I>v.distant&&(v.distant=I+B(5,13),F()),(O.distantHorns||O.traffic)&&I>v.siren&&(v.siren=I+B(75,160),v.siren-I<400&&I>20&&ye())}let Ce={click(){ge({freq:920,to:620,type:"sine",decay:.085,volume:.09}),ge({freq:2400,type:"sine",decay:.03,volume:.02})},tab(){ge({freq:1046.5,type:"triangle",decay:.09,volume:.07}),ge({freq:1318.5,type:"triangle",start:.06,decay:.12,volume:.07})},open(){ge({freq:520,to:1040,type:"sine",attack:.01,decay:.16,volume:.08,wet:.15}),ge({freq:1560,type:"sine",start:.07,decay:.1,volume:.03})},close(){ge({freq:860,to:430,type:"sine",attack:.008,decay:.13,volume:.07})},toggle(){ce(1568,0,.05,0,.5)},buy(){ce(1318.5,0,.07,-.15,.8),ce(1975.5,.09,.07,.15,1),Z({start:.02,duration:.08,volume:.02,freq:6e3,q:1.2})},upgrade(){[523.25,659.25,783.99,1046.5].forEach((I,O)=>ge({freq:I,type:"triangle",start:O*.07,decay:.22,volume:.065,pan:(O-1.5)*.2,wet:.2})),ce(2093,.3,.04,0,.7)},reward(){[659.25,830.61,987.77,1318.51].forEach((I,O)=>ge({freq:I,type:"sine",start:O*.065,decay:.35,volume:.07,pan:(O-1.5)*.18,wet:.25})),[0,1,2,3].forEach(I=>ge({freq:B(2600,4200),start:.28+I*.045,decay:.06,volume:.018,pan:B(-.6,.6)}))},coin(){ge({freq:1975.5,type:"square",decay:.05,volume:.025,filterFreq:5e3}),ge({freq:2637,type:"square",start:.05,decay:.2,volume:.025,filterFreq:5e3})},error(){ge({freq:392,to:370,type:"triangle",decay:.14,volume:.07}),ge({freq:311,to:294,type:"triangle",start:.12,decay:.2,volume:.07})},work(){[0,.05,.11,.19,.24].forEach(I=>Z({start:I,duration:.025,volume:.03,freq:B(1800,2600),q:2})),ge({freq:784,type:"triangle",start:.3,decay:.14,volume:.06}),ge({freq:1046.5,type:"triangle",start:.38,decay:.24,volume:.06})},study(){Z({duration:.18,volume:.03,freq:3200,q:.6,attack:.04}),ce(1046.5,.14,.045),ce(1318.5,.24,.045)},marry(){[523.25,659.25,783.99,1046.5,1318.5,1568].forEach((I,O)=>ce(I,O*.11,.04,(O-2.5)*.12,1.4))},alert(){ge({freq:740,type:"triangle",decay:.12,volume:.06}),ge({freq:554,type:"triangle",start:.14,decay:.2,volume:.06})},pause(){ge({freq:660,to:440,type:"sine",decay:.14,volume:.06})},play(){ge({freq:440,to:880,type:"sine",decay:.14,volume:.06})},whoosh(){Z({duration:.38,volume:.03,type:"bandpass",freq:900,q:.7,attack:.12,color:"pink"})},welcome(){[392,523.25,659.25,783.99].forEach((I,O)=>ce(I*2,O*.12,.04,(O-1.5)*.2,1.2))}};function Ze(I="click"){if(!t.on||!n||n.state!=="running"||m||i?.hidden)return!1;let O=W();return O-(D.get(I)??-1)<(I==="click"?.05:.1)?!1:(D.set(I,O),(Ce[I]||Ce.click)(),!0)}async function ke(){if(m||!t.on||!e||i?.hidden)return!1;try{return clearTimeout(M),_e(),n.state!=="running"&&await n.resume(),!t.on||m?(await n.suspend(),!1):(G(r.gain,.9,.4),Pe(.8),clearInterval(d),d=setInterval(Fe,250),n.state==="running")}catch{return!1}}function R(I){!I.isTrusted||m||I.type==="keydown"&&(I.metaKey||I.ctrlKey||I.altKey)||t.on&&(!n||n.state!=="running")&&ke()}async function w(I){return m?!1:(t.on=!!I&&!!e,C(),t.on?ke():(clearInterval(d),n&&n.state==="running"&&(G(r.gain,0,.1),M=setTimeout(()=>{!t.on&&n&&n.suspend().catch(()=>{})},200)),!1))}function j(){i?.hidden?n?.state==="running"&&n.suspend().catch(()=>{}):t.on&&n&&ke()}return i?.addEventListener("pointerdown",R,{capture:!0,passive:!0}),i?.addEventListener("keydown",R,{capture:!0}),i?.addEventListener("visibilitychange",j),{get enabled(){return t.on},get active(){return t.on&&n?.state==="running"},get supported(){return!!e},get scene(){return x},get volumes(){return{ambience:t.ambience,effects:t.effects}},meter(){if(!s)return-1/0;let I=new Float32Array(s.fftSize);s.getFloatTimeDomainData(I);let O=0;for(let X of I)O+=X*X;return 10*Math.log10(O/I.length+1e-12)},toggle(){return w(!t.on)},setEnabled:w,play:Ze,syncTraffic:Je,setVolume(I,O){!["ambience","effects"].includes(I)||!Number.isFinite(O)||(t[I]=Math.min(1,Math.max(0,O)),C(),n&&G((I==="ambience"?a:c).gain,t[I],.15))},setScene(I){if(!Object.hasOwn(Er,I)||x===I)return;let O=x.startsWith("street");x=I,n&&(Pe(I.startsWith("street")!==O?1.2:.8),I.startsWith("street")!==O&&I!=="interior"&&Ze("whoosh"))},destroy(){m||(m=!0,clearInterval(d),clearTimeout(M),i?.removeEventListener("pointerdown",R,!0),i?.removeEventListener("keydown",R,!0),i?.removeEventListener("visibilitychange",j),n&&n.state!=="closed"&&n.close().catch(()=>{}))}}}var Dl={scooter:"City Scooter",roadster:"Coastal Roadster",supercar:"Veloce GT",jet:"Private Jet",yacht:"Azure Yacht",loft:"Garden Loft",penthouse:"Skyline Penthouse",villa:"Oceanfront Estate",island:"Private Island"},Pl=new Map,Tr=null,td=!1,kv={scooter:"#b5c78b",roadster:"#b85b33",supercar:"#597ba2",jet:"#f0f2eb",yacht:"#f3eee2",loft:"#e1d7c3",penthouse:"#b4bfc1",villa:"#ede4cd",island:"#f1ead6"};function Bv(){let i=document.createElement("canvas");i.width=1024,i.height=512;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#f2f5f5"),t.addColorStop(.35,"#c8d4d3"),t.addColorStop(.6,"#6e8585"),t.addColorStop(1,"#263c3b"),e.fillStyle=t,e.fillRect(0,0,1024,512),e.fillStyle="#ffffff",e.fillRect(90,50,130,190),e.fillRect(530,70,210,140),e.fillStyle="#f6ddaf",e.fillRect(820,160,105,115);let n=new Ti(i);return n.mapping=Xi,n.colorSpace=Ft,n}function nd(i){let e=new Ct,t=[],n=[],s=[],r=($,N={})=>{let K=new qa({color:$,roughness:.48,metalness:0,...N});return t.push(K),K},a=r(kv[i]||"#8faea2",{metalness:.52,roughness:.24,clearcoat:1,clearcoatRoughness:.13});s.push(a);let o=r("#f2f0e7",{roughness:.32}),c=r("#203536",{roughness:.55}),l=r("#172426",{roughness:.86}),u=r("#c9d4d0",{metalness:.9,roughness:.18}),h=r("#244a58",{metalness:.2,roughness:.13,clearcoat:1}),f=r("#ac8a5d"),p=r("#fff1c9",{emissive:"#fff1c9",emissiveIntensity:.55}),y=r("#8f2923",{emissive:"#d0412d",emissiveIntensity:.25}),x=r("#e9e3d5"),m=r("#ad8964"),d=r("#62a7b0",{metalness:.2,roughness:.16,clearcoat:1}),M=r("#4d7960",{roughness:.9});function b($,N,K=0,J=0,se=0,he=e){n.push($);let ge=new It($,N);return ge.position.set(K,J,se),ge.castShadow=!0,ge.receiveShadow=!0,he.add(ge),ge}function g($,N,K,J,se=0,he=0,ge=0,Z=e){return b(new Vn($,N,K),J,se,he,ge,Z)}function k($,N,K=0,J=0,se=0,he=null,ge=e){let Z=b(new Xa($,24,16),N,K,J,se,ge);return he&&Z.scale.set(...he),Z}function _($,N,K,J,se=0,he=0,ge=0,Z=e){return b(new Yi($,N,K,24),J,se,he,ge,Z)}function A($,N,K,J,se=e){let he=new H(...$),ge=new H(...N),Z=ge.clone().sub(he),ce=_(K,K,Z.length(),J,...he.clone().add(ge).multiplyScalar(.5).toArray(),se);return ce.quaternion.setFromUnitVectors(new H(0,1,0),Z.normalize()),ce}function D($,N,K,J,se,he=0,ge=0,Z=0,ce=e){let _e=new si,me=-$/2,Pe=-N/2;_e.moveTo(me+J,Pe),_e.lineTo(me+$-J,Pe),_e.quadraticCurveTo(me+$,Pe,me+$,Pe+J),_e.lineTo(me+$,Pe+N-J),_e.quadraticCurveTo(me+$,Pe+N,me+$-J,Pe+N),_e.lineTo(me+J,Pe+N),_e.quadraticCurveTo(me,Pe+N,me,Pe+N-J),_e.lineTo(me,Pe+J),_e.quadraticCurveTo(me,Pe,me+J,Pe);let Je=new Ai(_e,{depth:K-2*J,bevelEnabled:!0,bevelThickness:J,bevelSize:J,bevelSegments:3,curveSegments:6,steps:1});return Je.translate(0,0,-K/2+J),b(Je,se,he,ge,Z,ce)}function S($,N,K=24){let J=[],se=[];for(let[ge,Z,ce,_e]of $)for(let me=0;me<K;me++){let Pe=me/K*Math.PI*2,Je=Math.cos(Pe),qe=Math.sin(Pe);J.push(Math.sign(Je)*Math.pow(Math.abs(Je),.55)*Z,(ce+_e)/2+Math.sign(qe)*Math.pow(Math.abs(qe),.55)*(_e-ce)/2,ge)}for(let ge=0;ge<$.length-1;ge++)for(let Z=0;Z<K;Z++){let ce=ge*K+Z,_e=ge*K+(Z+1)%K,me=(ge+1)*K+Z,Pe=(ge+1)*K+(Z+1)%K;se.push(ce,_e,me,_e,Pe,me)}for(let ge=1;ge<K-1;ge++){se.push(0,ge+1,ge);let Z=($.length-1)*K;se.push(Z,Z+ge,Z+ge+1)}let he=new kt;return he.setAttribute("position",new St(J,3)),he.setIndex(se),he.computeVertexNormals(),b(he,N)}function v($,N,K,J=0){let se=new si;$.forEach(([Z,ce],_e)=>_e?se.lineTo(Z,-ce):se.moveTo(Z,-ce)),se.closePath();let he=new Ai(se,{depth:N,bevelEnabled:!0,bevelSize:.025,bevelThickness:.025,bevelSegments:2,steps:1}),ge=b(he,K,0,J,0);return ge.rotation.x=-Math.PI/2,ge}function C($,N,K,J=0){let se=new si;$.forEach(([ge,Z],ce)=>ce?se.lineTo(-ge,Z):se.moveTo(-ge,Z)),se.closePath();let he=new Ai(se,{depth:N,bevelEnabled:!1});return he.rotateY(Math.PI/2),he.translate(-N/2+J,0,0),b(he,K)}function W($,N,K=.48,J=.55){let se=b(new br(K*.76,K*.24,12,40),l,$,J,N);se.rotation.y=Math.PI/2;let he=_(K*.61,K*.61,.13,u,$,J,N);he.rotation.z=Math.PI/2;let ge=_(K*.17,K*.17,.16,c,$+Math.sign($)*.08,J,N);ge.rotation.z=Math.PI/2;for(let Z=0;Z<6;Z++){let ce=Z*Math.PI/3,_e=g(.045,K*1.1,.075,u,$+Math.sign($)*.09,J,N);_e.rotation.x=ce}return se}function B($,N,K=2.5){A([$,0,N],[$+.15,K,N],.075,m);for(let J=0;J<7;J++){let se=J/7*Math.PI*2,he=new Ct;he.position.set($+.15,K,N),he.rotation.y=se,e.add(he);let ge=k(1,M,0,-.1,.65,[.18,.09,1],he);ge.rotation.x=.18}}function G($,N,K,J=.5){k(J,M,$,N,K,[1,.8,1])}if(i==="roadster"||i==="supercar"){let $=i==="supercar";S([[-2.75,.68,.58,.83],[-2.5,.99,.56,1.07],[-1.85,1.09,.57,1.17],[-.5,1.03,.6,1.12],[.75,1.02,.61,1.12],[1.75,1.1,.56,1.08],[2.55,.97,.55,.94],[2.78,.65,.61,.82]],a),g(1.85,.12,4.7,c,0,.55,0);for(let K of[-1.09,1.09])for(let J of[-1.8,1.78])W(K,J,$?.49:.46);if(C([[-1.55,1.12],[-.95,1.81],[.55,1.79],[1.25,1.11]],1.65,h),$){C([[-1.4,1.19],[-.9,1.84],[.42,1.84],[.98,1.2]],1.58,a),C([[-1.15,1.32],[-.78,1.73],[.35,1.73],[.73,1.32]],.025,h,.824),C([[-1.15,1.32],[-.78,1.73],[.35,1.73],[.73,1.32]],.025,h,-.824),g(1.3,.055,1.25,h,0,1.865,-.15);let K=g(1.45,.04,.93,h,0,1.49,1);K.rotation.x=.63;let J=g(1.32,.035,.67,h,0,1.46,-1.24);J.rotation.x=-.67;for(let se of[-.85,.85])A([se,1.1,-2.45],[se,1.43,-2.45],.035,c);g(2.2,.075,.37,c,0,1.46,-2.45)}else{let K=g(1.6,.4,1.7,c,0,1.04,-.23);for(let he of[-.43,.43])D(.55,.52,.55,.08,r("#bda17b"),he,1.28,-.55),D(.56,.12,.75,.04,f,he,1.12,-.13);let J=g(1.68,.055,.88,h,0,1.48,.94);J.rotation.x=.58,A([-.87,1.12,1.23],[-.87,1.86,.75],.035,u),A([.87,1.12,1.23],[.87,1.86,.75],.035,u),A([-.87,1.86,.75],[.87,1.86,.75],.03,u),g(1.63,.06,.2,a,0,1.2,-1.4);let se=b(new br(.19,.025,8,24),c,-.43,1.35,.45);se.rotation.x=.65}for(let K of[-1.04,1.04]){D(.2,.13,.3,.03,a,K*1.04,1.32,.6),A([K*.88,1.2,.6],[K*1.03,1.29,.6],.025,u),g(.018,.045,.26,u,K,1.16,-.3);let J=g(.022,.17,.55,c,K*1.015,.81,-.7);J.rotation.x=.15}for(let K of[-.65,.65]){D(.49,.075,.19,.025,p,K,.96,2.59),D(.48,.075,.14,.025,y,K,.98,-2.56);let J=_(.09,.09,.23,u,K,.63,-2.72);J.rotation.x=Math.PI/2}D(1.15,.18,.08,.04,c,0,.72,2.745);for(let K=-.45;K<=.45;K+=.15)g(.025,.16,.03,u,K,.72,2.8);g(1.9,.055,.32,c,0,.56,2.54),g(1.9,.055,.28,c,0,.57,-2.53);let N=r("#ddc59b",{metalness:.45,roughness:.32});if($)for(let K of[-.11,.11])g(.075,.012,1.47,N,K,1.125,1.72)}else if(i==="scooter"){W(0,-.95,.4,.43),W(0,1.05,.4,.43),D(.62,.42,1.25,.13,a,0,.74,-.45),D(.64,.16,1.14,.07,c,0,1.06,-.5),D(.55,.13,.7,.04,a,0,.54,.3),C([[.45,.5],[.5,1.5],[.83,1.65],[1.1,1.4],[.92,.72]],.49,a),A([0,.5,1.05],[0,1.65,.76],.055,u),A([-.55,1.67,.76],[.55,1.67,.76],.045,c);let $=_(.19,.19,.13,u,0,1.58,.95);$.rotation.x=Math.PI/2;let N=_(.15,.15,.02,p,0,1.58,1.03);N.rotation.x=Math.PI/2;for(let K of[-.48,.48])A([K,1.68,.76],[K,2,.65],.022,u),k(.12,u,K,2,.65,[1,.65,.2]);g(.2,.08,.06,y,0,.84,-1.11),A([-.25,.65,-.7],[-.45,.1,-.45],.035,u)}else if(i==="jet"){let $=[[-5.3,.02],[-4.7,.2],[-3.5,.54],[-2.8,.67],[2.6,.73],[3.8,.61],[4.8,.36],[5.45,.06],[5.53,.015]].map(([J,se])=>new Le(se,J)),N=b(new Ga($,48),o,0,1.7,0);N.rotation.x=Math.PI/2;for(let J of[-1,1]){v([[J*.55,1.2],[J*5.4,-2.15],[J*5.5,-2.75],[J*1,-1.2],[J*.6,-2.5]],.1,o,1.35),v([[J*.35,-3.65],[J*2.5,-4.8],[J*2.55,-5.25],[J*.3,-4.55]],.07,o,2.02);let se=g(.06,.58,.54,a,J*5.38,1.64,-2.46);se.rotation.z=-J*.18;for(let _e=-2.4;_e<=3;_e+=.61)k(1,h,J*.684,1.93,_e,[.035,.14,.205]);let he=_(.47,.4,1.8,o,J*1.18,1.73,-3.1);he.rotation.x=Math.PI/2;let ge=_(.4,.4,.1,u,J*1.18,1.73,-2.19);ge.rotation.x=Math.PI/2;let Z=_(.34,.34,.12,c,J*1.18,1.73,-2.12);Z.rotation.x=Math.PI/2;let ce=_(.09,.13,.2,u,J*1.18,1.73,-2.02);ce.rotation.x=Math.PI/2,A([J*.8,1.28,-.5],[J*.95,.44,-.5],.06,u),W(J*.95,-.5,.3,.35)}C([[-3.7,2.23],[-4.65,4],[-5,4],[-4.75,2.1]],.12,a);let K=g(1.38,.065,7.5,a,0,1.71,-.3);K.scale.x=1.01;for(let J of[-1,1]){let se=k(1,h,J*.28,2.1,4.12,[.31,.15,.53]);se.rotation.z=-J*.2}A([0,1.1,3.3],[0,.4,3.3],.055,u),W(0,3.3,.25,.3),g(.22,.04,.13,p,0,2.4,-1.4)}else if(i==="yacht"){S([[-3.9,.9,.22,1.22],[-3.5,1.35,.1,1.37],[-1,1.47,.06,1.46],[1.8,1.4,.19,1.5],[3.3,.88,.5,1.48],[4.35,.08,.95,1.44]],o,32),v([[-1.3,-3.6],[1.3,-3.6],[1.38,1.8],[.8,3.25],[0,4.1],[-.8,3.25],[-1.38,1.8]],.06,m,1.47),D(2.25,1.1,3.8,.15,o,0,1.99,-.7),D(2.3,.46,2.85,.1,h,0,2.35,-.2),D(2.6,.12,4.2,.05,o,0,2.65,-.65),D(1.6,.65,2.1,.12,o,0,3.01,-1),D(1.65,.2,1.35,.06,h,0,3.16,-.55),D(2,.13,2.5,.05,o,0,3.38,-1);for(let $ of[-1.25,1.25]){for(let N=-3;N<=2.3;N+=.9)A([$,1.5,N],[$,1.95,N],.018,u);A([$,1.95,-3.5],[$,1.95,2.4],.022,u),A([$,1.95,2.4],[0,1.95,4],.022,u);for(let N=-2.8;N<2;N+=.65)k(.11,h,$*1.13,1.06,N,[.25,1,1])}for(let $ of[-.5,.5])D(.63,.12,1.25,.04,r("#d3c29c"),$,1.6,2.45);g(2.4,.09,.7,m,0,1,-4.1),A([0,3.45,-1.3],[0,4.2,-1.4],.035,u),k(.15,o,0,4.1,-1.4),A([-.55,3.45,-1.4],[.55,3.45,-1.4],.025,u)}else if(i==="island"){let $=r("#e8d6a8",{roughness:.95}),N=r("#7fa36a",{roughness:.9}),K=r("#4f9fae",{metalness:.15,roughness:.12,clearcoat:1,transparent:!0,opacity:.92}),J=_(9,9,.12,K,0,.06,0);J.receiveShadow=!0;let se=k(1,$,0,.1,0,[6.2,.55,5.2]),he=k(1,N,-.4,.32,-.3,[4.9,.5,4]);g(3.4,1.5,2.6,o,-.6,1.45,-.6),g(3.8,.14,3,x,-.6,2.25,-.6),g(2.2,1.1,2,o,-1.1,2.85,-.9),g(2.5,.12,2.3,x,-1.1,3.45,-.9),g(3.2,1.1,.04,h,-.6,1.4,.71),g(1.9,.8,.04,h,-1.1,2.85,.11),g(.04,1.1,2.2,h,1.12,1.4,-.6),g(2.2,.06,1.1,d,1.4,.82,1.2),g(2.5,.1,1.4,x,1.4,.76,1.2),B(-3.6,1.6,2.6),B(2.9,-2.2,3),B(3.4,1.9,2.4),B(-2.6,-2.6,2.8);for(let[Z,ce]of[[-3,-.4],[1.2,-2.4],[-1.8,2.2]])G(Z,.75,ce,.45);g(.9,.09,4,m,4.6,.45,2.2);for(let Z of[.6,2,3.6])for(let ce of[4.25,4.95])_(.06,.06,.7,m,ce,.15,Z);let ge=new Ct;ge.position.set(5.6,.32,3.4),e.add(ge),D(.9,.35,2.4,.12,o,0,0,0,ge),D(.7,.3,.8,.08,h,0,.3,-.1,ge)}else{let $=i==="villa",N=i==="penthouse",K=g(8.7,.22,7.6,x,0,.1,0);if(g(8.5,.07,7.4,r("#99ac86"),0,.25,0),$){g(4.5,2.3,3.9,o,-1.2,1.44,-.9),g(3.2,2.15,3.5,o,2.1,1.36,.1),g(4.9,.2,4.3,x,-1.2,2.67,-.9),g(3.5,.2,3.8,x,2.1,2.53,.1),g(3.3,1.8,3.2,o,-1.7,3.64,-1),g(3.6,.18,3.5,x,-1.7,4.58,-1);for(let J of[-2.65,-1.2,.25])g(1.27,1.8,.045,h,J,1.4,1.075),g(.05,1.9,.06,u,J-.65,1.4,1.1);g(2.6,1.48,.04,h,-1.7,3.68,.62),g(.04,1.58,2.4,h,3.72,1.45,.2),g(2.7,1.6,.04,h,2.1,1.4,1.87),g(4.7,.12,2,m,-.9,.37,2.43),g(3.9,.14,1.55,o,-1,.43,2.6),g(3.5,.05,1.2,d,-1,.52,2.6);for(let J of[1.3,2.2]){g(.55,.15,1.3,f,J,.5,2.9);let se=g(.55,.07,.5,f,J,.7,2.65);se.rotation.x=-.5}B(-3.7,2.7,3),B(3.5,-2.7,3.4)}else{let J=N?5:3,se=N?1.25:1.55,he=N?5.3:5.8,ge=4.5;g(he,J*se,ge,a,0,.3+J*se/2,-.5);for(let ce=0;ce<J;ce++){let _e=.4+ce*se;g(he+.35,.12,ge+.35,x,0,_e,-.5);for(let me=-he/2+.55;me<he/2;me+=1.05)g(.8,se*.69,.035,h,me,_e+se*.5,1.76),g(.8,se*.69,.035,h,me,_e+se*.5,-2.76);for(let me of[-he/2-.02,he/2+.02])for(let Pe=-2.2;Pe<1.6;Pe+=1.05)g(.035,se*.69,.75,h,me,_e+se*.5,Pe);g(he+.65,.12,.87,x,0,_e+se-.13,2),g(he+.6,.48,.04,r("#b1c4bd",{transparent:!0,opacity:.63}),0,_e+se+.13,2.41);for(let me=-he/2;me<=he/2;me+=1.07)g(.035,.5,.7,u,me,_e+se+.12,2.09)}let Z=.35+J*se;g(he+.6,.17,ge+.55,o,0,Z,-.5),g(2.5,1.2,2.8,o,-.9,Z+.68,-.9),g(2.53,.75,.035,h,-.9,Z+.64,.52),g(2.8,.13,3,x,-.9,Z+1.35,-.9),g(1.8,.1,2.7,o,1.65,Z+.15,-.65),g(1.5,.04,2.4,d,1.65,Z+.22,-.65);for(let ce of[-3.7,3.7]){B(ce,2.7,2.5);for(let _e of[-2.4,-.7,1])G(ce,.75,_e,.42)}g(4.4,.06,1.05,m,0,.31,3.05);for(let ce of[-1.5,1.5])D(.75,.15,.75,.04,f,ce,.48,3.1)}}e.updateMatrixWorld(!0);let ae=new pn().setFromObject(e),ee=ae.getCenter(new H);return e.position.x-=ee.x,e.position.z-=ee.z,e.position.y-=ae.min.y,{group:e,painted:s,dispose(){n.forEach($=>$.dispose()),t.forEach($=>$.dispose())}}}function id(i,e){let t=new Fs({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"low-power"});t.setSize(i,e,!1),t.setPixelRatio(1),t.shadowMap.enabled=!0,t.shadowMap.type=Mr,t.outputColorSpace=Ft,t.toneMapping=Sr,t.toneMappingExposure=1.15;let n=new ks;n.background=new st("#e8ece7");let s=Bv();n.environment=s,n.environmentIntensity=.65,n.add(new zs("#f4f8ff","#677962",2));let r=new Ri("#fff0d8",4);r.position.set(-6,10,7),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.camera.left=-10,r.shadow.camera.right=10,r.shadow.camera.top=10,r.shadow.camera.bottom=-10,r.shadow.camera.far=35,r.shadow.bias=-3e-4,r.shadow.normalBias=.02,n.add(r);let a=new Ri("#c6dfef",2.2);a.position.set(8,6,-8),n.add(a);let o=new Ei(200,200),c=new bn({color:"#e2e8df",roughness:.8}),l=new It(o,c);l.rotation.x=-Math.PI/2,l.position.y=-.035,l.receiveShadow=!0,n.add(l);let u=new Ht(34,i/e,.1,200);return{renderer:t,scene:n,camera:u,env:s,floorGeometry:o,floorMaterial:c,dispose(){o.dispose(),c.dispose(),s.dispose(),t.dispose(),t.forceContextLoss()}}}function sd(i,e,t=.7,n=1){let s=new pn().setFromObject(e.group),r=s.getSize(new H),a=s.getCenter(new H),o=Math.max(r.x,r.y*1.25,r.z),c=i.camera.aspect,l=o*(c<1?2.25:1.62)/n,u=["jet","yacht"].includes(e.id)?.46:.43;i.camera.position.set(a.x+Math.sin(t)*l,a.y+l*u,a.z+Math.cos(t)*l),i.camera.lookAt(a.x,a.y*.88,a.z),i.camera.updateProjectionMatrix()}function rd(i,{width:e=640,height:t=360}={}){if(!Dl[i]||td)return null;let n=`${i}:${e}:${t}`;if(Pl.has(n))return Pl.get(n);let s;try{Tr||(Tr=id(e,t));let r=Tr;r.renderer.setSize(e,t,!1),r.camera.aspect=e/t,s=nd(i),s.id=i,r.scene.add(s.group),sd(r,s,.72,1.08),r.renderer.render(r.scene,r.camera);let a=r.renderer.domElement.toDataURL("image/png");return r.scene.remove(s.group),s.dispose(),Pl.set(n,a),a}catch{return s&&(Tr?.scene.remove(s.group),s.dispose()),td=!0,null}}function ad(){Tr?.dispose(),Tr=null}function Ll(i,e){if(!Dl[e])return{destroy(){},setColor(){},reset(){}};let t,n;try{t=id(i.clientWidth||480,i.clientHeight||320),n=nd(e),n.id=e,t.scene.add(n.group)}catch{let k=document.createElement("div");return k.style.cssText="height:100%;display:grid;place-items:center;color:#617666;font-size:13px;padding:25px;text-align:center",k.textContent="This browser cannot open the 3D preview. Your purchase is still available below.",i.append(k),t?.dispose(),{destroy(){k.remove()},setColor(){},reset(){}}}let s=t.renderer.domElement;s.style.cssText="width:100%;height:100%;display:block;touch-action:pan-y pinch-zoom;cursor:grab;outline:none",s.tabIndex=0,s.setAttribute("aria-label",`${Dl[e]} 3D preview. Drag horizontally to rotate. Use plus and minus keys to zoom.`),i.append(s);let r=.72,a=1,o=!1,c=0,l=0,u=!1;function h(){l=0,!u&&(sd(t,n,r,a),t.renderer.render(t.scene,t.camera))}function f(){!l&&!u&&(l=requestAnimationFrame(h))}function p(){let g=i.clientWidth||480,k=i.clientHeight||320;t.renderer.setSize(g,k,!1),t.camera.aspect=g/k,f()}function y(g){o=!0,c=g.clientX,s.setPointerCapture(g.pointerId),s.style.cursor="grabbing"}function x(g){o&&(r-=(g.clientX-c)*.012,c=g.clientX,f())}function m(g){o=!1,s.style.cursor="grab",s.hasPointerCapture(g.pointerId)&&s.releasePointerCapture(g.pointerId)}function d(g){g.preventDefault(),a=Uh.clamp(a-g.deltaY*.001,.65,1.6),f()}function M(g){if(g.key==="ArrowLeft")r-=.12;else if(g.key==="ArrowRight")r+=.12;else if(g.key==="+"||g.key==="=")a=Math.min(1.6,a+.1);else if(g.key==="-")a=Math.max(.65,a-.1);else return;g.preventDefault(),f()}s.addEventListener("pointerdown",y),s.addEventListener("pointermove",x),s.addEventListener("pointerup",m),s.addEventListener("pointercancel",m),s.addEventListener("wheel",d,{passive:!1}),s.addEventListener("keydown",M);let b=new ResizeObserver(p);return b.observe(i),p(),{setColor(g){n.painted.forEach(k=>k.color.set(g)),f()},reset(){r=.72,a=1,f()},destroy(){u=!0,cancelAnimationFrame(l),b.disconnect(),s.removeEventListener("pointerdown",y),s.removeEventListener("pointermove",x),s.removeEventListener("pointerup",m),s.removeEventListener("pointercancel",m),s.removeEventListener("wheel",d),s.removeEventListener("keydown",M),t.scene.remove(n.group),n.dispose(),t.dispose(),s.remove()}}}var zv={business:"businesses",asset:"marketplace",partner:"partners"},Hv=["webp","png","jpg"],Ar=new Map,Nl=new Map;function Vv(i){return new Promise(e=>{let t=new Image;t.onload=()=>e(t.naturalWidth>0?i:null),t.onerror=()=>e(null),t.src=i})}function od(i,e){return`${i}:${e}`}function Qi(i,e){return Ar.get(od(i,e))||null}function Gv(i,e){let t=od(i,e);if(Ar.has(t))return Promise.resolve(Ar.get(t));if(Nl.has(t))return Nl.get(t);let n=(async()=>{let s=zv[i];if(!s||!/^[a-z0-9-]+$/.test(e))return null;for(let r of Hv){let a=await Vv(`./assets/images/${s}/${e}.${r}`);if(a)return Ar.set(t,a),a}return Ar.set(t,null),null})();return Nl.set(t,n),n}async function cd(i,e){let n=(await Promise.all(i.map(([s,r])=>Gv(s,r).then(a=>a&&[s,r,a])))).filter(Boolean);return n.length&&e?.(n),n}var ht=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ln=i=>Number.isFinite(Number(i))?Number(i):0,Ol=i=>Math.min(100,Math.max(0,ln(i))),Fl=i=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(ln(i)),Wv=i=>String(i??"").replace(/[_-]/g," ").replace(/\b\w/g,e=>e.toUpperCase()),kl='<svg viewBox="0 0 24 24" class="sim-icon" aria-hidden="true"><path d="M6 18 18 6M7 6h11v11"/></svg>',to='<svg viewBox="0 0 24 24" class="sim-icon" aria-hidden="true"><path d="M20 5c-3-3-7-1-8 2C8 0 0 6 4 12l8 9 8-9c2-3 2-5 0-7z"/></svg>',Rr='<svg viewBox="0 0 24 24" class="sim-icon" aria-hidden="true"><path d="M3 4c4-1 6 0 9 2 3-2 5-3 9-2v15c-4-1-6 0-9 2-3-2-5-3-9-2V4zM12 6v15"/></svg>',ld='<svg viewBox="0 0 24 24" class="sim-icon" aria-hidden="true"><path d="m3 8 9-5 9 5H3zM5 11v7M10 11v7M14 11v7M19 11v7M3 21h18"/></svg>',Ul=(i,e,t="")=>`<div class="sim-progress" ${t} role="progressbar" aria-label="${ht(e)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(Ol(i))}"><i style="width:${Ol(i)}%"></i></div>`;function $v(i,e){let t=Qi("partner",i.id);if(t)return`<img class="sim-photo" src="${ht(t)}" alt="Portrait of ${ht(i.name)}" loading="lazy" decoding="async">`;let n=[["#c18d6d","#3b302e","#779b85"],["#dcb493","#473c34","#8d9ba9"],["#b98264","#493327","#c38f7c"],["#8e614b","#282d2c","#8e9a77"],["#e4b692","#3c3335","#ad8b9b"],["#b68868","#684d38","#729b9c"]],[s,r,a]=n[e%n.length],o=[0,2,4].includes(e%6),c=i.color||"#e6eddf";return`<svg viewBox="0 0 300 150" role="img" aria-label="Illustrated portrait of ${ht(i.name)}"><rect width="300" height="150" fill="${ht(c)}"/><circle cx="230" cy="36" r="24" fill="#fff6df" opacity=".58"/><path d="M10 150V105l30-31 31 31v45M235 150V112l23-26 28 26v38" fill="#ffffff" opacity=".22"/><path d="M43 139V95M255 142v-34" stroke="#7b9376" stroke-width="3" opacity=".45"/><circle cx="43" cy="88" r="21" fill="#90ae8b" opacity=".55"/><circle cx="255" cy="102" r="16" fill="#90ae8b" opacity=".55"/>${o?`<path d="M111 81q-4-53 39-53 42 0 38 53l10 42h-95z" fill="${r}"/>`:""}<path d="M96 150l7-28q5-22 37-25h20q33 3 37 25l7 28" fill="${a}"/><path d="m139 91-3 14 14 17 14-17-3-14" fill="${s}"/><ellipse cx="150" cy="69" rx="27" ry="33" fill="${s}"/><path d="M121 65q-5-37 29-38 37-1 29 42l-9-26q-23 11-42 2l-3 23z" fill="${r}"/>${e===3?`<path d="M124 47q-3-23 27-23 31 0 28 22" stroke="${r}" stroke-width="13" stroke-linecap="round"/>`:""}${e===5?`<path d="M130 80q20 24 40 0-6 28-20 24-15 1-20-24" fill="${r}" opacity=".83"/>`:""}<ellipse cx="140" cy="69" rx="2" ry="2.2" fill="#3b302a"/><ellipse cx="160" cy="69" rx="2" ry="2.2" fill="#3b302a"/><path d="M145 85q6 4 12-1" stroke="#8e5b4d" stroke-width="2" stroke-linecap="round" fill="none"/><path d="m149 71-2 7 5 1" stroke="#9f6b53" stroke-width="1.5" opacity=".5" fill="none"/>${e===1?'<g fill="none" stroke="#6b736b" stroke-width="1.7"><rect x="130" y="63" width="17" height="13" rx="5"/><rect x="153" y="63" width="17" height="13" rx="5"/><path d="M147 67h6"/></g>':""}<path d="m131 107 19 16 18-16" fill="none" stroke="#ffffff" stroke-opacity=".25" stroke-width="2"/><path d="M117 150v-20M183 150v-20" stroke="#314b40" stroke-opacity=".15" stroke-width="2"/></svg>`}function ud(i){return i?`<section class="sim-event" aria-labelledby="sim-event-title" data-sim-event="${ht(i.id)}"><div class="sim-event-intro"><span class="sim-kicker">LIFE HAS OTHER PLANS</span><h2 id="sim-event-title">${ht(i.title)}</h2><p>${ht(i.description)}</p></div><div class="sim-event-choices">${(i.choices||[]).map(e=>{let t=[ln(e.cost)?`${Fl(e.cost)} cost`:"",ln(e.reward)?`+${Fl(e.reward)}`:"",ln(e.energy)?`${ln(e.energy)>0?"+":""}${e.energy} energy`:"",ln(e.happiness)?`${ln(e.happiness)>0?"+":""}${e.happiness} happiness`:""].filter(Boolean);return`<button class="sim-event-choice" data-sim-action="event" data-sim-id="${ht(e.id)}"><span><strong>${ht(e.label)}</strong><small>${ht(e.description)}</small>${t.length?`<span class="sim-choice-effects">${t.map(n=>`<span>${ht(n)}</span>`).join("")}</span>`:""}</span>${kl}</button>`}).join("")}</div></section>`:""}function hd({game:i,money:e=Fl,icon:t=()=>"",act:n,navigate:s}){let r=null,a=null,o=new Map,c=_=>e(ln(_)),l=(_,A,D="",S="primary",v=!1)=>`<button type="button" class="sim-button sim-button-${S}" data-sim-action="${A}" data-sim-id="${ht(D)}" ${v?"disabled":""}>${_}</button>`,u=(_,A,D,S="")=>`<div class="sim-stat"><span>${_}</span><strong ${S?`data-sim-value="${S}"`:""}>${A}</strong><small>${D}</small></div>`,h=(_,A)=>`<div class="sim-page" data-sim-page="${_}">${A}</div>`;function f(){let _=i.finance,A=ln(_.credit),D=ui.find(C=>C.id===r),S=A>=750?"Excellent standing":A>=680?"Good standing":A>=600?"Room to grow":"Build your credit",v=_.loans||[];return h("finance",`<div class="sim-intro"><div class="sim-intro-symbol">${ld}</div><div><span class="sim-kicker">VELORA COMMUNITY BANK</span><h2>Give your next idea a head start.</h2><p>Borrow with a plan. Every payment helps you build your financial future.</p></div></div><div class="sim-stats">${u("Your credit score",String(Math.round(A)),S,"credit")}${u("Outstanding debt",c(_.debt),`${v.length} active ${v.length===1?"loan":"loans"}`,"debt")}${u("Daily repayments",c(_.dailyRepayment),"Included in your daily expenses","repayment")}</div>${_.overdraft?`<p class="sim-warning">Your account is overdrawn by ${c(_.overdraft)} (day ${_.overdraftDays} of 7). Overdraft interest is 0.4% a day and the bank stops lending. After 7 days it repossesses your most valuable asset.</p>`:""}${D?p(D,_):""}<div class="sim-section-heading"><div><h2>Find the right funding</h2><p>Fixed interest over the full term. Missed payments hurt your credit score, and credit unlocks bigger businesses.</p></div><span class="sim-pill">IN-GAME FINANCE</span></div><div class="sim-product-grid">${ui.map((C,W)=>{let B=_.availableProducts.includes(C.id),G=C.principal*(1+C.interestRate),ae=A<C.minCredit?`Requires ${C.minCredit} credit`:v.some(ee=>ee.productId===C.id)?"Loan already active":"Not currently available";return`<article class="sim-card sim-product-card"><div class="sim-product-top"><span class="sim-number">0${W+1}</span><span class="sim-pill ${B?"sim-pill-green":""}">${B?"AVAILABLE":ht(ae)}</span></div><h3>${ht(C.name)}</h3><strong class="sim-product-amount">${c(C.principal)}</strong><p>${ht(C.description)}</p><dl class="sim-terms"><div><dt>Fixed interest</dt><dd>${Math.round(C.interestRate*100)}%</dd></div><div><dt>Loan term</dt><dd>${C.termDays} game days</dd></div><div><dt>Daily payment</dt><dd>${c(G/C.termDays)}</dd></div><div><dt>Total to repay</dt><dd>${c(G)}</dd></div></dl>${l("Review loan "+kl,"review-loan",C.id,B?"primary":"subtle",!B)}</article>`}).join("")}</div><div class="sim-section-heading"><div><h2>Your repayment plan</h2><p>Scheduled payments are automatic. Pay down the balance whenever you like.</p></div></div><div class="sim-loan-list">${v.length?v.map(C=>{let W=ui.find(G=>G.id===C.productId),B=Math.max(0,ln(C.totalRepayment)-ln(C.outstanding));return`<article class="sim-card sim-loan-card"><div class="sim-card-heading"><div><span class="sim-kicker">${ht(W?.name||"Business loan")}</span><h3>${c(C.outstanding)} remaining</h3></div><span class="sim-pill ${C.arrears?"sim-pill-warm":"sim-pill-green"}">${C.arrears?"PAYMENT OVERDUE":"ON TRACK"}</span></div>${Ul(C.totalRepayment?B/C.totalRepayment*100:100,"Loan paid off")}<div class="sim-loan-facts"><span>${c(B)} of ${c(C.totalRepayment)} repaid</span><span>${c(C.dailyRepayment)} / day</span><span>Due by day ${Math.ceil(ln(C.dueDay))}</span></div>${C.arrears?`<p class="sim-warning">${c(C.arrears)} overdue. Add funds or make a payment to protect your credit.</p>`:""}<div class="sim-repay-row"><label>Payment amount <span class="sim-input-wrap"><span>$</span><input type="number" min="1" max="${ln(C.outstanding)}" step="0.01" inputmode="decimal" value="${Math.min(1e3,ln(C.outstanding)).toFixed(2)}" aria-label="Payment amount for ${ht(W?.name||"loan")}" data-sim-repay-amount></span></label>${l("Make payment","repay-amount",C.id,"secondary")}${l("Pay in full","repay-full",C.id,"subtle")}</div></article>`}).join(""):`<div class="sim-empty">${ld}<h3>A fresh balance sheet.</h3><p>You have no outstanding loans. Keep building, at your own pace.</p></div>`}</div><p class="sim-footnote">All financing is part of the game. No real credit checks, payments, or financial products.</p>`)}function p(_,A){let D=_.principal*(1+_.interestRate);return`<section class="sim-review" aria-label="Review loan application"><div class="sim-card-heading"><div><span class="sim-kicker">BEFORE YOU BORROW</span><h2>${ht(_.name)}</h2></div>${l("Cancel","cancel-loan","","subtle")}</div><p>You receive <strong>${c(_.principal)}</strong> immediately. Repay <strong>${c(D)}</strong> over <strong>${_.termDays} game days</strong>, including ${c(D-_.principal)} interest.</p><div class="sim-review-bottom"><span>Automatic repayment: <strong>${c(D/_.termDays)} per day</strong><small>Missed payments affect your in-game credit score.</small></span>${l("Accept terms & borrow "+kl,"apply-loan",_.id,"primary",!A.availableProducts.includes(_.id))}</div></section>`}function y(){let _=i.education,A=_.enrolled,D=_.career||Xn.find(v=>v.id==="freelancer"),S=_.completed||[];return h("education",`<div class="sim-intro"><div class="sim-intro-symbol sim-lavender">${Rr}</div><div><span class="sim-kicker">VELORA LEARNING & CAREERS</span><h2>Your next chapter starts here.</h2><p>Learn a skill, earn a qualification, and turn it into a career you love.</p></div></div><div class="sim-stats">${u("Your career",ht(D?.name||"Freelancer"),"Choose your own direction")}${u("Salary per day",c(D?.salaryPerDay),D?.salaryPerDay?"Paid daily \xB7 a job uses 5 energy a day":"Freelancers only earn per shift")}${u("Qualifications",String(S.length),`${wn.length} learning paths to explore`)}</div>${A?`<section class="sim-study-card"><div><span class="sim-kicker">YOU ARE ENROLLED</span><h2>${ht(A.name)}</h2><p>${ht(A.description)}</p><div class="sim-study-progress"><span>${_.sessionsDone} of ${_.sessionsTotal} sessions complete</span><strong>${Math.round(_.progress)}%</strong></div>${Ul(_.progress,"Course completion")}</div><div class="sim-study-action">${l(Rr+(_.studiedToday?" Next session tomorrow":" Complete a study session"),"study","",_.studiedToday?"subtle":"primary",_.studiedToday)}<span>${A.energyPerSession} energy \xB7 one session per day</span><small>Current energy: <strong data-sim-value="energy">${Math.round(i.state.energy)}%</strong></small>${l("Take a break","visit-life","","subtle")}</div></section>`:`<div class="sim-note">${Rr}<p><strong>Small sessions. Lasting opportunities.</strong> One study session per game day. Qualifications unlock careers and the right to run bigger businesses.</p></div>`}<div class="sim-section-heading"><div><h2>Invest in yourself</h2><p>Tuition is paid once when you enroll. One session per day, so plan ahead.</p></div></div><div class="sim-course-grid">${wn.map((v,C)=>{let W=S.includes(v.id),B=A?.id===v.id,G=Xn.find(ae=>ae.id===v.careerId);return`<article class="sim-card sim-course-card"><div class="sim-course-top sim-course-color-${C%3}"><span>${Rr}</span><div><span class="sim-kicker">${ht(v.field)}</span><h3>${ht(v.name)}</h3></div>${W?'<span class="sim-complete-mark" aria-label="Completed">\u2713</span>':""}</div><div class="sim-course-body"><p>${ht(v.description)}</p><div class="sim-course-details"><span>${v.sessions} sessions</span><span>${v.energyPerSession} energy / session</span></div><div class="sim-course-career"><small>YOUR NEXT OPPORTUNITY</small><strong>${ht(G?.name||v.field)}</strong><span>${c(G?.salaryPerDay)} salary / day + ${c(G?.shiftPay||0)} per shift</span></div><div class="sim-course-bottom"><strong>${c(v.tuition)}<small>Tuition</small></strong>${l(W?"Completed":B?"In progress":A?"Finish current course":"Enroll now","enroll",v.id,W||B?"subtle":"primary",W||!!A)}</div></div></article>`}).join("")}</div><div class="sim-section-heading"><div><h2>Find your next role</h2><p>Salaries arrive each game day and are taxed. Work a shift in My life for extra earnings.</p></div></div><div class="sim-career-list">${Xn.map(v=>{let C=_.availableCareers.some(G=>G.id===v.id),W=D?.id===v.id,B=wn.find(G=>G.id===v.courseId);return`<article class="sim-career"><div class="sim-career-symbol">${t("briefcase")||Rr}</div><div class="sim-career-info"><h3>${ht(v.name)}</h3><p>${ht(v.description)}</p><small>${C?"Ready for your next chapter":`Requires ${ht(B?.name||"a qualification")}`}</small></div><div class="sim-career-pay"><strong>${c(v.salaryPerDay)}<small> / day salary</small></strong><span>+${c(v.shiftPay)} / shift</span></div>${l(W?"Your current role":C?"Start this career":"Qualification needed","career",v.id,W?"subtle":"secondary",W||!C)}</article>`}).join("")}</div>`)}function x(){let _=i.relationships||[],A=_.find(S=>S.isSpouse),D=_.filter(S=>S.bond>=15).length;return h("relationships",`<div class="sim-intro"><div class="sim-intro-symbol sim-rose">${to}</div><div><span class="sim-kicker">PEOPLE MAKE A PLACE A HOME</span><h2>A life worth sharing.</h2><p>Meet someone, make memories, and see where the story takes you.</p></div></div><div class="sim-stats">${u("Your chapter",A?"Married":"Meeting people",A?`Sharing life with ${ht(A.name)}`:"A good conversation is a good start")}${u("Meaningful connections",String(D),"A bond of 15 or more opens the door to dates")}${u("Happiness",`${Math.round(i.state.happiness)}%`,"Make room for the people you care about","happiness")}</div><div class="sim-note sim-note-rose">${to}<p><strong>Connection takes time.</strong> One chat per person and one date per day. Bonds fade if you ignore people. A proposal needs 80 bond and 3 dates.</p></div>${A?`<section class="sim-marriage"><span class="sim-marriage-icon">${to}</span><div><span class="sim-kicker">YOUR SHARED CHAPTER</span><h2>You & ${ht(A.name)}</h2><p>The little moments matter. Spend quality time together to keep your bond strong.</p></div>${l("Spend quality time","partner-quality",A.id,"primary")}</section>`:""}<div class="sim-section-heading"><div><h2>Meet the people of Velora</h2><p>Six adults, six different stories. Get to know them one day at a time.</p></div></div><div class="sim-partner-grid">${_.map((S,v)=>m(S,v)).join("")}</div><p class="sim-footnote">Conversations use 3 energy. Dates cost ${c(Li.date)} and 8 energy. A ring costs ${c(Li.propose)}; a wedding costs ${c(Li.marry)}. A spouse shares income and adds household costs.</p>`)}function m(_,A){let D=_.isSpouse?"YOUR SPOUSE":Wv(_.status||"New connection"),S=_.canMarry?`Plan wedding \xB7 ${c(Li.marry)}`:`Propose \xB7 ${c(Li.propose)}`;return`<article class="sim-card sim-partner-card"><div class="sim-portrait">${$v(_,A)}<span class="sim-portrait-status">${ht(D)}</span></div><div class="sim-partner-body"><div class="sim-partner-name"><h3>${ht(_.name)} <span>${_.age}</span></h3><span>${to}</span></div><p class="sim-partner-job">${ht(_.job)} \xB7 ${ht(_.personality)}</p><p class="sim-partner-description">${ht(_.description)}</p><div class="sim-interest-list">${(_.interests||[]).map(v=>`<span>${ht(v)}</span>`).join("")}</div><div class="sim-bond-label"><span>Your bond</span><strong><span data-sim-bond="${ht(_.id)}">${Math.round(_.bond)}</span> / 100 <small>\xB7 ${_.dates} ${_.dates===1?"date":"dates"}</small></strong></div>${Ul(_.bond,"Bond with "+_.name,`data-sim-bond-bar="${ht(_.id)}"`)}<div class="sim-partner-actions">${l(_.chattedToday?"Chatted today":"Have a chat","partner-chat",_.id,"secondary",_.chattedToday)}${l(_.datedToday&&!_.isSpouse?"Date done today":`Go on a date \xB7 ${c(Li.date)}`,"partner-date",_.id,"secondary",!_.canDate)}${_.isSpouse?l("Quality time together","partner-quality",_.id,"primary"):l(S,_.canMarry?"partner-marry":"partner-propose",_.id,"primary",!_.canMarry&&!_.canPropose)}</div><p class="sim-partner-hint">${_.isSpouse?"You are building a life together.":_.canMarry?"You are engaged. Your next chapter is waiting.":_.canPropose?"Your connection is strong. You can ask to share a future.":_.canDate||_.bond>=15?`A proposal needs 80 bond and 3 dates. You have <span data-sim-bond="${ht(_.id)}">${Math.round(_.bond)}</span> bond and ${_.dates} ${_.dates===1?"date":"dates"}.`:"Reach 15 bond through conversation to unlock your first date."}</p></div></article>`}function d(_){if(_==="finance"){let A=i.finance;return JSON.stringify({...A,overdraft:Math.round(A.overdraft/100)})}return _==="education"?JSON.stringify(i.education):_==="relationships"?JSON.stringify(i.relationships.map(A=>[A.id,A.status,A.dates,A.isSpouse,A.canDate,A.canPropose,A.canMarry,A.chattedToday,A.datedToday,A.bond>=15,A.bond>=80])):""}function M(_){return a=_,o.set(_,d(_)),_==="finance"?f():_==="education"?y():_==="relationships"?x():""}function b(){let _=a;document.querySelectorAll(`[data-sim-page="${_}"]`).forEach(A=>{A.outerHTML=M(_)})}function g(_){let A=_?.dataset?.simAction;if(!A)return!1;if(_.disabled)return!0;let D=_.dataset.simId;if(A==="review-loan")return r=D,b(),document.querySelector(".sim-review")?.scrollIntoView({block:"center",behavior:"smooth"}),!0;if(A==="cancel-loan")return r=null,b(),!0;if(A==="visit-life")return s("life"),!0;let S;if(A==="apply-loan")S=i.takeLoan(D),S.ok&&(r=null);else if(A==="repay-full")S=i.repayLoan(D);else if(A==="repay-amount"){let v=Number(_.closest(".sim-loan-card")?.querySelector("[data-sim-repay-amount]")?.value);S=Number.isFinite(v)&&v>0?i.repayLoan(D,v):{ok:!1,message:"Enter a payment amount greater than zero."}}else if(A==="enroll")S=i.enroll(D);else if(A==="study")S=i.study();else if(A==="career")S=i.chooseCareer(D);else if(A.startsWith("partner-"))S=i.interactPartner(D,A.slice(8));else if(A==="event")S=i.chooseEvent(D);else return!1;return S&&n(S),!0}function k(){if(!(typeof document>"u")){if(document.querySelectorAll('[data-sim-value="energy"]').forEach(_=>_.textContent=Math.round(i.state.energy)+"%"),document.querySelectorAll('[data-sim-value="happiness"]').forEach(_=>_.textContent=Math.round(i.state.happiness)+"%"),document.querySelector("[data-sim-bond]")){let _=new Map(i.relationships.map(A=>[A.id,A.bond]));document.querySelectorAll("[data-sim-bond]").forEach(A=>{let D=String(Math.round(_.get(A.dataset.simBond)||0));A.textContent!==D&&(A.textContent=D)}),document.querySelectorAll("[data-sim-bond-bar]").forEach(A=>{let D=Math.round(Ol(_.get(A.dataset.simBondBar)||0)),S=A.firstElementChild;S&&S.style.width!==D+"%"&&(S.style.width=D+"%",A.setAttribute("aria-valuenow",D))})}document.querySelectorAll("[data-sim-page]").forEach(_=>{let A=_.dataset.simPage;d(A)!==o.get(A)&&!_.contains(document.activeElement)&&(a=A,_.outerHTML=M(A))})}}return{render:M,handleClick:g,update:k}}var dd="";var Xv="https://accounts.google.com/gsi/client";function qv(i){let e=String(i||"").split(".")[1];if(!e)return null;try{let t=e.replace(/-/g,"+").replace(/_/g,"/").padEnd(Math.ceil(e.length/4)*4,"="),n=decodeURIComponent(Array.from(atob(t),s=>"%"+s.charCodeAt(0).toString(16).padStart(2,"0")).join(""));return JSON.parse(n)}catch{return null}}function fd({onSignIn:i=()=>{},onError:e=()=>{}}={}){let t=String(dd||"").trim(),n=!!t,s=null;function r(l){let u=qv(l?.credential),h=u&&["accounts.google.com","https://accounts.google.com"].includes(u.iss);if(!u||!h||u.aud!==t||!u.sub||u.exp*1e3<Date.now()){e("Google sign-in could not be verified. Please try again.");return}i({id:"google-"+String(u.sub).replace(/[^0-9a-zA-Z_-]/g,"").slice(0,64),provider:"google",name:String(u.name||u.given_name||"").slice(0,60),firstName:String(u.given_name||"").slice(0,40),picture:/^https:\/\//.test(u.picture||"")?u.picture:""})}function a(){return n?s||(s=new Promise(l=>{let u=()=>{try{globalThis.google.accounts.id.initialize({client_id:t,callback:r,auto_select:!1,cancel_on_tap_outside:!0,ux_mode:"popup",itp_support:!0}),l(!0)}catch{l(!1)}};if(globalThis.google?.accounts?.id)return u();let h=document.createElement("script");h.src=Xv,h.async=!0,h.defer=!0,h.onload=u,h.onerror=()=>{s=null,l(!1)},document.head.append(h)}),s):Promise.resolve(!1)}async function o(l){if(!l||!await a())return!1;try{return l.innerHTML="",globalThis.google.accounts.id.renderButton(l,{type:"standard",theme:"outline",size:"large",shape:"pill",text:"continue_with",logo_alignment:"left",width:Math.max(220,Math.min(400,l.clientWidth||320))}),!0}catch{return!1}}function c(){try{globalThis.google?.accounts?.id?.disableAutoSelect()}catch{}}return{enabled:n,load:a,renderButton:o,signOut:c}}var Re=i=>document.querySelector(i),pd={bank:"M3 8l9-5 9 5H3z M5 11v7 M10 11v7 M14 11v7 M19 11v7 M3 21h18",book:"M3 4c4-1 6 0 9 2 3-2 5-3 9-2v15c-4-1-6 0-9 2-3-2-5-3-9-2V4z M12 6v15",heart:"M20 5c-3-3-7-1-8 2C8 0 0 6 4 12l8 9 8-9c2-3 2-5 0-7z",sound:"M3 9h4l5-4v14l-5-4H3V9z M16 8c3 2 3 6 0 8 M19 5c5 4 5 10 0 14",mute:"M3 9h4l5-4v14l-5-4H3V9z M16 9l5 6 M21 9l-5 6",walk:"M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0 M8 10l4-3 4 4 4 1 M12 7l-2 8-5 6 M10 15l5 2v5 M8 10l-3 1v4",expand:"M8 3H3v5 M16 3h5v5 M21 16v5h-5 M3 16v5h5",overview:"M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z",business:"M4 21V7l8-4 8 4v14H4z M9 21v-5h6v5 M8 8h1 M15 8h1 M8 12h1 M15 12h1",diamond:"M3 8l4-5h10l4 5-9 13L3 8z M3 8h18 M7 3l5 18 5-18",wallet:"M20 8V5H5a2 2 0 0 0 0 4h16v11H5a2 2 0 0 1-2-2V7 M21 12h-6v5h6 M17 14.5h.01",trending:"M3 17l6-6 4 4 8-10 M15 5h6v6",down:"M3 7l6 6 4-4 8 10 M15 19h6v-6",smile:"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0 M8 14c2 3 6 3 8 0 M8 9h.01 M16 9h.01",flag:"M5 21V3 M5 4c6-4 8 4 14 0v10c-6 4-8-4-14 0",history:"M3 12a9 9 0 1 0 2.5-6.2 M3 3v5h5 M12 7v5l3 2",bell:"M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9 M10 21h4",settings:"M9 3h6l1 3 3 1 2 5-2 5-3 1-1 3H9l-1-3-3-1-2-5 2-5 3-1 1-3z M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0",help:"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0 M9 8a3 3 0 1 1 4 3c-1 0-1 2-1 3 M12 17h.01",plus:"M12 5v14 M5 12h14",sun:"M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M12 2v2 M12 20v2 M2 12h2 M20 12h2 M5 5l1.5 1.5 M17.5 17.5L19 19 M19 5l-1.5 1.5 M6.5 17.5L5 19",moon:"M20 14a8 8 0 0 1-10-10 9 9 0 1 0 10 10z",chevron:"M9 5l7 7-7 7",focus:"M8 3H3v5 M16 3h5v5 M21 16v5h-5 M3 16v5h5 M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0",mouse:"M6 8a6 6 0 0 1 12 0v8a6 6 0 0 1-12 0V8 M12 2v7",pause:"M8 5v14 M16 5v14",bolt:"M13 2L4 14h7l-1 8 10-13h-8l1-7z",coffee:"M4 8h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8z M17 8h2a3 3 0 0 1 0 6h-2 M7 3v2 M12 3v2",home:"M3 10l9-7 9 7 M5 9v12h14V9 M9 21v-7h6v7",car:"M3 11l2-6h14l2 6v8H3v-8z M3 11h18 M6 15h2 M16 15h2 M5 19v2 M19 19v2",globe:"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0 M3 12h18 M12 3c5 4 5 14 0 18-5-4-5-14 0-18z",check:"M5 12l4 4L19 6",leaf:"M20 3C6 2 1 10 6 17s17 3 14-14z M4 21L15 9",users:"M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0 M6 21v-3a6 6 0 0 1 12 0v3 M19 4a3 3 0 0 1 0 6 M21 21v-3a5 5 0 0 0-2-4",briefcase:"M3 7h18v14H3z M8 7V3h8v4 M3 12c6 3 12 3 18 0 M10 12h4v4h-4z",trophy:"M7 3h10v8a5 5 0 0 1-10 0V3 M7 5H3v4c0 3 2 4 4 4 M17 5h4v4c0 3-2 4-4 4 M12 16v5 M8 21h8",shield:"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z M9 12l2 2 4-4",wrench:"M14 6a4 4 0 0 0 5 5l-9 9a2 2 0 0 1-3-3l9-9a4 4 0 0 0-2-2z",lock:"M6 11h12v10H6z M8 11V8a4 4 0 0 1 8 0v3",tag:"M3 12V3h9l9 9-9 9-9-9z M8 8h.01",alert:"M12 3l10 18H2L12 3z M12 10v5 M12 18h.01",logout:"M15 4h4v16h-4 M10 8l-4 4 4 4 M6 12h11"},Pi='<svg class="icon arrow-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18L18 6M7 6h11v11"/></svg>',gt=i=>`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${pd[i]||pd.diamond}"/></svg>`,Yv=(i=document)=>i.querySelectorAll("[data-icon]").forEach(e=>{e.innerHTML=gt(e.dataset.icon),e.removeAttribute("data-icon")}),tt=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),je=rt,Cr=i=>(i>=0?"+":"\u2212")+je(Math.abs(i)),io=i=>String(i).padStart(2,"0"),_d="velora-active-account",ss="guest";try{let i=localStorage.getItem(_d);i&&/^[a-zA-Z0-9_-]{1,80}$/.test(i)&&(ss=i)}catch{}var Pr=i=>`${fo}:${i}`,te=new Vr({saveKey:Pr(ss)}),Ii=null,Zt="overview",es="all",Ir="All",Ci=!1,Jt,nn=null,ns=null,ro="",ao="",zl="",Dr="",bd=0,md="",gd="",ri=null,Rt=ed(),Ws=hd({game:te,money:je,icon:gt,act:Wt,navigate:Gs}),ts=fd({onSignIn:i=>ix(i),onError:i=>is(i,!1)}),Md=new Map,Sd=new Map,so=[],yd=new Set,Bl=!1;function oo(i,e,t){let n=Qi(t,i);if(n)return`<span class="render-preview has-photo" data-thumb-${t}="${i}"><img src="${tt(n)}" alt="${tt(e)}" loading="lazy"></span>`;let s=(t==="business"?Md:Sd).get(i);return`<span class="render-preview" data-thumb-${t}="${i}">${s?`<img src="${s}" alt="3D view of ${tt(e)}" loading="lazy">`:`<span class="preview-loading">${gt(t==="business"?"business":"diamond")}<span>Preparing 3D preview</span></span>`}</span>`}function Xl(i,e){let t=e+i;yd.has(t)||Qi(e,i)||(yd.add(t),so.push({id:i,type:e}),wd())}function wd(){Bl||!so.length||(Bl=!0,requestAnimationFrame(()=>{let{id:i,type:e}=so.shift(),t=null;try{t=e==="business"?Jt?.renderBusinessThumbnail?.(i,{width:560,height:330}):rd(i,{width:560,height:330})}catch{}t&&(e==="business"?Md:Sd).set(i,t),document.querySelectorAll(`[data-thumb-${e}="${i}"]`).forEach(n=>{if(!n.classList.contains("has-photo")){let s=(e==="business"?bt:jt).find(r=>r.id===i)?.name||i;n.innerHTML=t?`<img src="${t}" alt="3D view of ${tt(s)}" loading="lazy">`:`<span class="preview-loading">${gt(e==="business"?"business":"diamond")}<span>3D preview unavailable</span></span>`}}),Bl=!1,so.length?setTimeout(wd,35):ad()}))}function Ed(){let i=te.currentEvent||null,e=JSON.stringify(i);e!==zl&&(zl=e,Re("#life-event").innerHTML=ud(i))}function Td(){document.querySelectorAll('[data-action="sound"]').forEach(i=>{i.innerHTML=gt(Rt.enabled?"sound":"mute")+`<span>Sound ${Rt.enabled?"on":"off"}</span>`,i.setAttribute("aria-pressed",String(Rt.enabled)),i.setAttribute("aria-label",Rt.enabled?"Turn sound off":"Turn sound on")})}function ql(){let i=Jt?.getView?.()==="street";Rt.setScene(Zt!=="overview"?"interior":i?Ci?"street-night":"street":Ci?"city-night":"city")}function Zv(i){Jt?.setView?.(i),ql(),document.querySelectorAll("[data-view]").forEach(e=>e.classList.toggle("active",e.dataset.view===i)),Re("#street-controls").hidden=i!=="street",Re(".map-caption").innerHTML=i==="street"?`${gt("walk")} WASD or arrows to walk \xB7 drag to look \xB7 cars honk if you stand in the road`:`${gt("mouse")} Drag to explore \xB7 Scroll to zoom`}function $s(i=!1){!i&&nn==="setup"&&!te.state.playerName||(ri?.destroy(),ri=null,nn=null,Re("#modal").open&&Re("#modal").close())}function is(i,e=!0,t=""){let n=document.createElement("div");n.className=`toast${e?"":" error"}${t?" toast-"+t:""}`,n.innerHTML=gt(e?t==="market"?"trending":"check":t?"alert":"help")+`<span>${tt(i)}</span>`,Re("#modal").open&&Re("#modal-content .modal-inner")?(t||(Re("#modal-feedback")?.remove(),n.id="modal-feedback"),n.classList.add("modal-feedback"),n.setAttribute("role",e?"status":"alert"),Re("#modal-content .modal-inner").append(n),n.scrollIntoView({block:"nearest"})):Re("#toast-region").append(n),setTimeout(()=>n.remove(),t?7e3:5200)}function Wt(i,e="reward"){return i.ok&&(Wn(),Xs(),nn==="business"&&Lr(ns),nn==="life"&&Dd(),nn==="asset"&&Pd(ns),nn?.startsWith("phone-")&&Wl(nn.slice(6))),Rt.play(i.ok?e:"error"),is(i.message,i.ok),i.ok}function Jv(){let i=te.state.account,e=te.state.playerName||Ii?.name||"";return i?.picture?`<img src="${tt(i.picture)}" alt="" referrerpolicy="no-referrer">`:tt((e.trim()[0]||"V").toUpperCase())}function Ad(){let i=[["overview","overview","Overview"],["businesses","business","Businesses"],["market","diamond","Marketplace"],["life","smile","My life"],["finance","bank","Bank & loans"],["education","book","Education"],["relationships","heart","Relationships"],["goals","flag","Goals"]];Re("#navigation").innerHTML=i.map(([e,t,n])=>`<button class="nav-item ${Zt===e?"active":""}" data-page="${e}" aria-label="${n}">${gt(t)}<span class="nav-label">${n}</span></button>`).join("")}function Gs(i){Zt=i,$s(),ql(),Ad();let e={overview:["Your city. Your rules","Build something great. Live a little along the way.","Overview"],businesses:["Small beginnings. Big business","Wages, rent, tax and wear and tear are real here. Run it well.","Businesses"],market:["A little taste of the good life","Every luxury comes with upkeep. Cars lose value, homes can gain it.","Marketplace"],life:["Make a life you love","Success feels better when you have the energy to enjoy it.","My life"],goals:["Every empire starts somewhere","From your first upgrade to your first billion.","Goals"],finance:["Build a future you can afford","Loans, repayments, and decisions that shape your credit.","Bank & loans"],education:["Choose your own path","Qualifications unlock careers and bigger businesses.","Education"],relationships:["Find your people","Meet, date, and choose who you want to build a life with.","Relationships"],history:["Your story, so far","The moments behind your growing empire.","Activity"]},[t,n,s]=e[i];Re("#page-title").innerHTML=tt(t)+"<span>.</span>",Re("#page-subtitle").textContent=n,Re("#breadcrumb-page").textContent=s,Re("#overview-page").hidden=i!=="overview",Re("#alternate-page").hidden=i==="overview",Wn(),window.scrollTo({top:0,behavior:"smooth"})}function Yl(i){let e=Math.round(i);return`<span class="condition ${e<50?"poor":e<75?"fair":""}" title="Condition ${e}%"><i style="width:${e}%"></i></span>`}function Kv(i){let e=te.state.businesses[i.id]||0,t=te.state.businessState[i.id],n=te.canBuy(i.id),s=te.requirements(i.id).filter(o=>!o.met),r=e?t?.closedDays?`<span class="business-badge closed">CLOSED \xB7 ${t.closedDays}D</span>`:t?.shortDays?`<span class="business-badge closed">SHORT-STAFFED \xB7 ${t.shortDays}D</span>`:t?.campaignDays?`<span class="business-badge owned">\u25CF CAMPAIGN LIVE \xB7 ${t.campaignDays}D</span>`:'<span class="business-badge owned">\u25CF YOUR BUSINESS</span>':n?'<span class="business-badge">AVAILABLE TO BUY</span>':`<span class="business-badge locked">${gt("lock")} LOCKED</span>`,a=e?te.businessProfit(i.id):te.projectedProfit(i.id,1);return`<article class="business-card ${e?"is-owned":n?"":"is-locked"}"><button class="business-art" data-business="${i.id}" aria-label="${e?"Manage":"Explore"} ${tt(i.name)}">${oo(i.id,i.name,"business")}${r}<span class="arrow">${Pi}</span></button><div class="business-info"><div class="business-meta"><span>${tt(i.tag)}</span><span>${e?"Level "+e+" / 5":tt(i.district)}</span></div><h3>${tt(i.name)}</h3>${e?`<div class="card-condition"><small>Condition ${Math.round(t.condition)}% \xB7 Morale ${Math.round(t.morale)}%${t.insured?" \xB7 insured":""}</small>${Yl(t.condition)}</div>`:n?"":`<p class="requirement-hint">${gt("lock")} ${tt(s.map(o=>o.label).join(" \xB7 "))}</p>`}<div class="business-numbers"><div><small>${e?"Value":"Price"}</small><strong>${je(e?te.businessValue(i.id):i.price,e?te.businessValue(i.id)>=1e6:i.price>=1e7)}</strong></div><div class="income-value ${a<0?"negative":""}">${a>=0?"+":"\u2212"}${je(Math.abs(a),Math.abs(a)>=1e4)}<span> / day ${e?"profit":"est."}</span></div></div></div></article>`}function Hl(){return bt.filter(i=>es==="all"||te.state.businesses[i.id]).map(Kv).join("")}function jv(){let i=te.rates,e=te.finance.dailyRepayment,t=(n,s,r="")=>`<span class="${r}">${n}<strong>${s}</strong></span>`;return`<div class="finance-strip">${t("Revenue",je(i.revenue)+"/day")}${t("Costs & wages","\u2212"+je(i.variable+i.staff+i.insurance)+"/day")}${t("Income tax","\u2212"+je(i.tax)+"/day")}${t("Rent, living & upkeep","\u2212"+je(i.living+i.upkeep)+"/day")}${e?t("Loan repayments","\u2212"+je(e)+"/day"):""}${t("Net",Cr(te.incomePerDay)+"/day",te.incomePerDay<0?"negative":"positive")}</div>`}function Wn(){if(Dr="",Rd(),Ed(),Re("#opportunity-count").textContent=io(bt.length)+" opportunities",Zt==="overview")return;let i=Re("#alternate-page");if(["finance","education","relationships"].includes(Zt)){i.innerHTML=Ws.render(Zt);return}Zt==="businesses"&&(i.innerHTML=`${jv()}${Id()}<div class="manager-row"><div><strong>${gt("wrench")} Facilities manager</strong><small>Automatically services any business below 75% condition, for a 15% fee.</small></div><button class="button ${te.state.settings.autoService?"button-dark":"button-soft"}" data-action="auto-service" aria-pressed="${te.state.settings.autoService}">${te.state.settings.autoService?"Hired":"Hire manager"}</button></div><div class="section-heading"><div><h2>Your next big thing</h2><p>Revenue follows the economy. Wages, maintenance and tax do not wait.</p></div><div class="segmented"><button data-filter="all" class="${es==="all"?"active":""}">All businesses</button><button data-filter="owned" class="${es==="owned"?"active":""}">My portfolio</button></div></div><div class="business-grid" id="business-page-grid">${Hl()}</div>`,bt.forEach(e=>Xl(e.id,"business"))),Zt==="market"&&Vl(),Zt==="life"&&(i.innerHTML=`<div class="life-paths"><button data-page="education">${gt("book")} Education & career</button><button data-page="relationships">${gt("heart")} Love & relationships</button><button data-page="finance">${gt("bank")} Bank & loans</button></div><div class="life-page-grid"><section class="life-panel"><h2>Life happens outside the office.</h2>${Cd()}</section><section class="life-panel"><h2>Your collection <span class="small-count">${te.state.assets.length} possessions</span></h2>${te.state.assets.length?jt.filter(e=>te.state.assets.includes(e.id)).map(e=>`<div class="collection-item"><span>${gt(e.category==="Homes"?"home":e.category==="Cars"?"car":"globe")}</span><div><strong>${tt(e.name)}</strong><small>${e.category} \xB7 worth ${je(te.assetValue(e.id))} \xB7 ${je(e.upkeep)}/day upkeep</small></div></div>`).join(""):`<div class="empty-state">No home yet, so you pay ${je(te.rates.rent)} rent a day.<br><span style="font-size:11px">A home in the marketplace ends the rent.</span></div>`}<button class="button button-soft full" data-page="market" style="margin-top:20px">Explore the marketplace ${Pi}</button></section></div>`),Zt==="goals"&&(i.innerHTML=`<div class="goal-list">${te.goals.map(e=>`<article class="goal-item ${e.claimed?"claimed":""}"><div class="goal-icon">${gt(e.claimed?"check":e.id==="billionaire"?"trophy":"flag")}</div><h3>${tt(e.title)}</h3><p>${tt(e.description)}</p><div class="goal-progress"><i style="width:${Math.min(100,e.progress/e.target*100)}%"></i></div><div class="goal-item-footer"><span>${e.waived?"Covered by your startup capital":"+"+je(e.reward)+" reward"}</span><button class="button ${e.achieved&&!e.claimed?"button-dark":"button-soft"}" data-claim="${e.id}" ${!e.achieved||e.claimed?"disabled":""}>${e.waived?"Already yours":e.claimed?"Reward collected":e.achieved?"Collect reward":e.target>=1e5?je(e.progress,!0)+" / "+je(e.target,!0):"In progress"}</button></div></article>`).join("")}</div>`),Zt==="history"&&(i.innerHTML=`<div class="history-list">${te.state.history.map(e=>`<div class="history-item ${e.kind==="incident"?"is-incident":""}">${gt({business:"business",upgrade:"trending",lifestyle:"diamond",life:"smile",work:"briefcase",goal:"flag",finance:"bank",education:"book",relationship:"heart",incident:"alert",market:"trending",cheat:"bolt"}[e.kind]||"leaf")}<div>${tt(e.text)}<small>Day ${Math.floor(e.day)}</small></div></div>`).join("")}</div>`)}function Rd(){let i=te.state,e=[es,Math.floor(i.day),JSON.stringify(i.businesses),i.credit>=0?Math.floor(i.credit/10):0,Object.values(i.businessState).map(n=>[n.closedDays,n.insured?"i":"",n.shortDays,n.campaignDays,n.pricing,n.pay,Math.round(n.morale/5)].join(":")).join(),i.education.completed.length].join("|");if(e===Dr)return;Dr=e,Re("#business-grid").innerHTML=Hl();let t=Re("#business-page-grid");t&&(t.innerHTML=Hl())}function Vl(){let i=jt.filter(e=>Ir==="All"||Ir==="Owned"&&te.state.assets.includes(e.id)||e.category===Ir);Re("#alternate-page").innerHTML=`<div class="alternate-heading"><h2>Good things, within reach.</h2><div class="market-tabs">${["All","Homes","Cars","Experiences","Owned"].map(e=>`<button class="${Ir===e?"active":""}" data-market-filter="${e}">${e}</button>`).join("")}</div></div><div class="asset-grid">${i.map(e=>{let t=te.state.assets.includes(e.id),n=te.assetValue(e.id);return`<article class="asset-card"><button class="business-art asset-preview-button" data-show-asset="${e.id}" aria-label="Preview ${tt(e.name)} in 3D">${oo(e.id,e.name,"asset")}<span class="business-badge ${t?"owned":""}">${t?"\u2713 IN YOUR COLLECTION":e.category.toUpperCase()}</span><span class="preview-3d-tag">Explore in 3D</span></button><div class="business-info"><h3>${tt(e.name)}</h3><p>${tt(e.description)}</p><div class="business-numbers"><strong>${t?"Worth "+je(n,n>=1e7):je(e.price,e.price>=1e7)}</strong><span class="income-value">+${e.happiness} happiness</span></div>${t?`<button class="button button-outline full" data-sell-asset="${e.id}">${gt("tag")} Sell for ${je(Math.round(n*.92),n>=1e7)}</button>`:`<button class="button button-dark full" data-buy-asset="${e.id}">Make it yours ${Pi}</button>`}<div class="detail-footer">${je(e.upkeep)} / day upkeep \xB7 ${e.depreciation?"loses value over time":e.home?"ends rent \xB7 value follows the market":""}</div></div></article>`}).join("")}</div>${i.length?"":'<div class="empty-state">Your collection starts with one good purchase.</div>'}`,i.forEach(e=>Xl(e.id,"asset"))}function Cd(){let i=te.state.day>=te.state.nextWorkDay-1e-9;return`<div class="needs-summary" aria-label="Your current needs"><span>Energy <strong data-need="energy">${Math.round(te.state.energy)}%</strong></span><span>Happiness <strong data-need="happiness">${Math.round(te.state.happiness)}%</strong></span></div><div class="work-callout"><h3>${i?"A good day to make something.":"Shift done for today."}</h3><p>Work a ${tt(te.education.career.name)} shift to earn ${je(te.workPay)}.<br>Uses 12 energy. One paid shift per game day.</p><button class="button full" data-action="work" ${i?"":"disabled"}>${gt("briefcase")} ${i?"Get to work":"Next shift on day "+Math.ceil(te.state.nextWorkDay)} <span>+${je(te.workPay)}</span></button></div><div class="activity-list">${zr.map(e=>{let t=te.activityUsesLeft(e.id);return`<button class="activity-button" data-activity="${e.id}" ${t?"":"disabled"}><span class="activity-symbol">${gt({rest:"leaf",meal:"coffee",socialize:"users"}[e.id])}</span><div><strong>${tt(e.name)}</strong><small>${e.energy>0?"+":""}${e.energy} energy \xB7 +${e.happiness} happiness \xB7 ${t?t+" left today":"done for today"}</small></div><span>${e.cost?je(e.cost):"Free"} ${Pi}</span></button>`}).join("")}</div>`}function ai(i,e,t=null){ri?.destroy(),ri=null,nn=e,ns=t,bd=Math.floor(te.state.day),Re("#modal-content").innerHTML=i,Re("#modal").classList.toggle("modal-locked",e==="setup"),Re("#modal").setAttribute("aria-label",Re("#modal-content h2")?.textContent||"Game details"),Re("#modal").open||Re("#modal").showModal()}function oi(i,e,t,n=!0){return`<div class="modal-inner"><div class="modal-top"><div><div class="modal-eyebrow">${e}</div><h2>${i}</h2></div>${n?'<button class="close-button" data-action="close" aria-label="Close dialog">\xD7</button>':""}</div>${t}</div>`}function Gl(i,e,t,n,s){return`<div class="choice" role="group" aria-label="${tt(i)}">${e.map(([r,a])=>`<button type="button" class="${t===r?"active":""}" ${n}="${s?s+"|":""}${r}" aria-pressed="${t===r}">${tt(a)}</button>`).join("")}</div>`}function Qv(i){return i<.003?"very low":i<.01?"low":i<.02?"medium":"high"}function ex(i){let e=te.state.businessState[i],t=te.rates.byBusiness[i]||{staff:0},n=te.quitRisk(i),s=e.campaignDays?`<div class="good-note">Campaign live: sales +35% for ${e.campaignDays} more day${e.campaignDays>1?"s":""}.</div>`:`<button class="button button-soft full" data-campaign="${i}" ${e.campaignCooldown||e.closedDays?"disabled":""}>${gt("trending")} ${e.campaignCooldown?`Next campaign in ${e.campaignCooldown} day${e.campaignCooldown>1?"s":""}`:`Marketing campaign \xB7 ${je(te.campaignCost(i))} \xB7 +35% sales for 6 days`}</button>`;return`<section class="manage" aria-label="Run the business"><h3>Run the business</h3>
    <div class="manage-row"><div class="manage-label"><strong>Pricing</strong><small>${tt(an[e.pricing].note)}</small></div>${Gl("Pricing",Object.entries(an).map(([r,a])=>[r,a.label]),e.pricing,"data-pricing",i)}</div>
    <div class="manage-row"><div class="manage-label"><strong>Staff pay</strong><small>${je(t.staff)}/day in wages. ${tt(yn[e.pay].note)}</small></div>${Gl("Staff pay",Object.entries(yn).map(([r,a])=>[r,a.label]),e.pay,"data-pay",i)}</div>
    <div class="condition-row morale-row"><span>Staff morale <b>${Math.round(e.morale)}%</b></span>${Yl(e.morale)}<small>Quit risk ${Qv(n)} (${(n*100).toFixed(1)}% a day). Morale moves toward the level your pay supports and drops if the business is run down.</small></div>
    ${e.shortDays?`<p class="sim-warning">Staff quit: short-staffed for ${e.shortDays} more day${e.shortDays>1?"s":""}, sales \u221225%.</p><button class="button button-dark full" data-rehire="${i}">${gt("users")} Hire replacements now \xB7 ${je(te.rehireCost(i))}</button>`:""}
    ${s}</section>`}function Id(){let i=te.marketForecast,e=i.trend==="up"?"rising":i.trend==="down"?"falling":"steady",t=i.expert?`Analysts expect this phase to last ${i.daysLeft} more day${i.daysLeft>1?"s":""}. Then: stable ${i.odds.stable}%, boom ${i.odds.boom}%, recession ${i.odds.recession}%.`:`Expected to last ${i.range}. A Finance & Economics degree gives you exact forecasts.`,n=Object.keys(te.state.businesses).map(r=>te.state.businessState[r].pricing),s=n.every(r=>r===n[0])?n[0]:null;return`<section class="market-report economy-${i.regime}" id="market-report"><div><span class="market-eyebrow">MARKET REPORT</span><h3>${tt(i.label)} \xB7 demand ${Math.round(i.index*100)}% of normal, ${e}</h3><p>${tt(i.advice)}</p><small>${tt(t)}</small></div><div class="market-actions"><span>Pricing for all businesses</span>${Gl("Pricing for all businesses",Object.entries(an).map(([r,a])=>[r,a.label]),s,"data-pricing-all","")}</div></section>`}function Lr(i){let e=bt.find(s=>s.id===i);if(!e)return;let t=te.state.businesses[i]||0,n=nn==="business"&&ns===i?Re("#modal")?.scrollTop:0;if(t){let s=te.state.businessState[i],r=te.rates.byBusiness[i]||{revenue:0,variable:0,staff:0,insurance:0,profit:0},a=te.upgradeCost(i),o=t>=5,c=te.serviceCost(i);ai(oi(tt(e.name),tt(e.district+" / "+e.tag),`<div class="modal-art">${oo(e.id,e.name,"business")}</div>${s.closedDays?`<p class="sim-warning">Closed for ${s.closedDays} more day${s.closedDays>1?"s":""}. Staff still get paid.</p>`:""}${s.boostDays?`<p class="${s.boost>1?"good-note":"sim-warning"}">${s.boost>1?"Trending! Sales boosted":"Short-staffed: sales reduced"} for ${s.boostDays} more day${s.boostDays>1?"s":""}.</p>`:""}<div class="business-meta"><span>YOUR BUSINESS</span><span>Level ${t} of 5</span></div><div class="level-dots">${Array.from({length:5},(l,u)=>`<i class="${u<t?"filled":""}"></i>`).join("")}</div><div class="condition-row"><span>Condition <b>${Math.round(s.condition)}%</b></span>${Yl(s.condition)}<small>${s.condition<50?"Poor: sales are falling and inspections may close it.":s.condition<70?"Worn: sales are starting to suffer.":"Good shape."}</small></div>${ex(i)}<div class="pnl"><div><span>Revenue today</span><b>${je(r.revenue)}</b></div><div><span>Supplies & variable costs</span><b>\u2212${je(r.variable)}</b></div><div><span>Staff wages</span><b>\u2212${je(r.staff)}</b></div>${s.insured?`<div><span>Insurance premium</span><b>\u2212${je(r.insurance)}</b></div>`:""}<div class="total ${r.profit<0?"negative":""}"><span>Profit before tax</span><b>${Cr(r.profit)}/day</b></div></div><div class="business-actions"><button class="button button-soft" data-service="${i}" ${s.condition>=99.5?"disabled":""}>${gt("wrench")} ${s.condition>=99.5?"Fully serviced":"Service \xB7 "+je(c)}</button><button class="button ${s.insured?"button-dark":"button-soft"}" data-insure="${i}" aria-pressed="${s.insured}">${gt("shield")} ${s.insured?"Insured \xB7 "+je(te.insurancePremium(i))+"/day":"Insure \xB7 "+je(te.insurancePremium(i))+"/day"}</button></div><button class="button button-dark full" ${o?"disabled":""} data-upgrade="${i}">${o?"Top level reached":`Upgrade to level ${t+1} \xB7 ${je(a)}`} ${o?"":Pi}</button>${o?"":`<div class="detail-footer">Level ${t+1} estimate in a normal market: ${Cr(te.projectedProfit(i,t+1))}/day profit (now ${Cr(te.projectedProfit(i,t))}).</div>`}<button class="button button-outline full sell-button" data-sell-business="${i}">${gt("tag")} Sell for ${je(te.saleValue(i))}</button><div class="detail-footer">Business value ${je(te.businessValue(i))} \xB7 invested ${je(te.invested(i))}</div>`),"business",i),n&&(Re("#modal").scrollTop=n)}else{let s=te.requirements(i),r=s.every(a=>a.met);ai(oi(tt(e.name),tt(e.district+" / "+e.tag),`<div class="modal-art">${oo(e.id,e.name,"business")}</div><p class="modal-description">${tt(e.description)}</p><div class="detail-stats"><div class="detail-stat"><small>Purchase price</small><strong>${je(e.price)}</strong></div><div class="detail-stat"><small>Estimated profit at level 1</small><strong>${Cr(te.projectedProfit(i,1))}/day</strong></div></div><div class="pnl"><div><span>Revenue (normal market)</span><b>${je(te.projectedRevenue(i,1))}</b></div><div><span>Supplies & variable costs</span><b>${Math.round(e.costRate*100)}% of sales</b></div><div><span>Staff wages</span><b>\u2212${je(e.staff)}/day</b></div><div><span>Sensitivity to the economy</span><b>${e.beta>=1.2?"High":e.beta>=.8?"Medium":"Low"}</b></div></div>${s.length?`<div class="requirements"><h3>${r?"Requirements met":"Before you can buy"}</h3>${s.map(a=>`<div class="${a.met?"met":""}">${gt(a.met?"check":"lock")} ${tt(a.label)}</div>`).join("")}</div>`:""}<button class="button button-dark full" data-buy-business="${i}" ${r?"":"disabled"}>${r?"Buy this business \xB7 "+je(e.price):"Locked"} ${r?Pi:""}</button><div class="detail-footer">Profit is before income tax and changes daily with the economy, condition and luck.</div>`),"business",i)}Jt?.focus(i)}function Wl(i="home"){ai(oi("Velora Phone","CONNECTED \xB7 YOUR PERSONAL SMARTPHONE",`<div class="phone-shell"><div class="phone-status"><span>VELORA 5G</span><span>\u25CF \u25B0</span></div><div class="phone-apps"><button data-phone="home">Home</button><button data-phone="bank">Bank</button><button data-phone="education">Study</button><button data-phone="relationships">People</button></div><div class="phone-screen">${i==="bank"?Ws.render("finance"):i==="education"?Ws.render("education"):i==="relationships"?Ws.render("relationships"):`<div class="phone-welcome"><h2>Your life, connected.</h2><p>Balance: ${je(te.state.cash)} \xB7 Credit ${Math.round(te.state.credit)}</p><button class="button button-dark full" data-phone="bank">Open banking \xB7 Loans & repayments</button><button class="button button-soft full" data-phone="education">Learning & careers</button><button class="button button-soft full" data-phone="relationships">People & relationships</button></div>`}</div></div>`),"phone-"+i)}function Pd(i){let e=jt.find(r=>r.id===i);if(!e)return;let t=te.state.assets.includes(i),n=te.assetValue(i);ai(oi(tt(e.name),tt(e.category)+" / LIVE 3D SHOWROOM",`<div id="asset-showroom" class="asset-showroom"></div><div class="showroom-hint">Drag to rotate \xB7 scroll or +/\u2212 to zoom <button data-action="reset-showroom">Reset view</button></div><p class="modal-description">${tt(e.description)}</p><div class="detail-stats"><div class="detail-stat"><small>${t?"Current value":"Purchase price"}</small><strong>${je(t?n:e.price)}</strong></div><div class="detail-stat"><small>Daily upkeep</small><strong>${je(e.upkeep)}</strong></div></div>${t?`<button class="button button-outline full" data-sell-asset="${i}">${gt("tag")} Sell for ${je(Math.round(n*.92))}</button>`:`<button class="button button-dark full" data-buy-asset="${i}">Buy ${tt(e.name)} \xB7 ${je(e.price)}</button>`}`),"asset",i);let s=Qi("asset",i);s?Re("#asset-showroom").innerHTML=`<img class="showroom-photo" src="${tt(s)}" alt="${tt(e.name)}"><button class="showroom-switch" data-action="showroom-3d">View in 3D</button>`:ri=Ll(Re("#asset-showroom"),i)}function Dd(){ai(oi("A little more living.","YOUR ENERGY \xB7 "+Math.round(te.state.energy)+"% / HAPPINESS \xB7 "+Math.round(te.state.happiness)+"%",Cd()),"life")}function tx(){let i=[["Money is tight at first",`You start with ${je(15e3)}, a small caf\xE9 and ${je(te.rates.rent)} rent a day. Early on, your daily work shift pays more than your business.`],["Businesses cost money to run","Each one pays staff wages every day and loses condition. Service it or sales drop and inspectors close it. Insurance covers 80% of breakdowns, theft and lawsuits."],["Look after your staff","Set pay to Low, Market or Generous. Pay sets morale, and unhappy staff quit, cutting sales by 25% until you hire replacements."],["Ride the economy","Booms and recessions last weeks. Check the market report, switch to Budget pricing in a recession and Premium in a boom, and launch marketing when customers are spending. Profit is taxed at 0% to 38%."],["Unlock bigger deals","Large businesses need qualifications, a good credit score, or proof you can run several already. Repay loans on time to build credit."],["Don\u2019t go broke","Your balance can go negative. Overdrafts charge 0.4% a day, and after 7 days the bank repossesses your most valuable asset."],["Look after yourself","Energy and happiness fall every day. Rest once a day, eat, see friends. Unhappy owners earn less."]];ai(oi("How Velora works.","THIS IS VELORA",`<p class="modal-description">Becoming a billionaire here takes real strategy. One minute is one game day; use 3\xD7 to move faster.</p>${i.map((e,t)=>`<div class="guide-step"><span>${t+1}</span><div><strong>${e[0]}</strong><p>${e[1]}</p></div></div>`).join("")}<button class="button button-dark full" data-action="close">The city is yours ${Pi}</button><div class="detail-footer">All currency, assets, and businesses are simulated.</div>`),"guide")}function Zl(){te.setSpeed(0);let i=Ii,e=i?.name||"",t=Gr(e);ai(oi("Your story starts here.","NEW PLAYER \xB7 CHALLENGE ECONOMY",`<p class="modal-description">Start with ${je(15e3)}, a small caf\xE9 and rent to pay. Every business has wages, wear and tear, and tax. Becoming a billionaire takes real strategy.</p>${i?`<div class="account-chip">${i.picture?`<img src="${tt(i.picture)}" alt="" referrerpolicy="no-referrer">`:`<span>${tt((i.name||"G")[0])}</span>`}<div><strong>${tt(i.name||"Google account")}</strong><small>Signed in with Google \xB7 progress saved to this account on this device</small></div></div>`:ts.enabled?'<div class="google-slot" id="google-slot"><span class="google-loading">Loading Google sign-in\u2026</span></div><div class="setup-or"><span>or play as a guest</span></div>':""}<form id="setup-form" novalidate><label class="setup-label">Player name<input id="player-name" autocomplete="nickname" maxlength="40" placeholder="Enter your name" value="${tt(e)}" required></label><label class="setup-label" id="owner-code-label" ${t?"":"hidden"}>Owner passcode<input id="owner-code" type="password" inputmode="numeric" autocomplete="off" placeholder="Enter the owner passcode"></label><button class="button button-dark full" type="submit">Begin your life</button></form>`,!1),"setup"),!i&&ts.enabled&&ts.renderButton(Re("#google-slot")).then(n=>{let s=Re("#google-slot");!n&&s&&(s.innerHTML='<span class="google-loading">Google sign-in is unavailable right now. You can play as a guest.</span>')}),setTimeout(()=>Re(t?"#owner-code":"#player-name")?.focus(),60)}function vd(){let i=te.state.account,e=ss.startsWith("google-");ai(oi("Make yourself at home.","GAME SETTINGS",`<div class="settings-row"><h3>Sound & atmosphere</h3><p>City ambience from above, live road sound in street view, and playful button sounds.</p><button class="button button-soft" data-action="sound">${gt(Rt.enabled?"sound":"mute")}<span>Sound ${Rt.enabled?"on":"off"}</span></button><label class="volume-row">Ambience<input type="range" min="0" max="100" value="${Math.round(Rt.volumes.ambience*100)}" data-volume="ambience"></label><label class="volume-row">Effects<input type="range" min="0" max="100" value="${Math.round(Rt.volumes.effects*100)}" data-volume="effects"></label></div><div class="settings-row"><h3>Account</h3>${e?`<p>Signed in with Google as <strong>${tt(i?.name||te.state.playerName)}</strong>. Each Google account keeps its own save on this device. <a href="./privacy.html" target="_blank" rel="noopener">Privacy</a></p><button class="button button-soft" data-action="sign-out">${gt("logout")} Sign out</button>`:ts.enabled?'<p>Playing as a guest. Sign in with Google to keep a save tied to your account. Your guest progress moves with you if that account has no save yet. <a href="./privacy.html" target="_blank" rel="noopener">Privacy</a></p><div class="google-slot" id="settings-google-slot"><span class="google-loading">Loading Google sign-in\u2026</span></div>':"<p>Playing as a guest. Your progress saves in this browser on this device.</p>"}</div><div class="settings-row"><h3>Facilities manager</h3><p>Automatically service businesses below 75% condition, for a 15% fee.</p><button class="button ${te.state.settings.autoService?"button-dark":"button-soft"}" data-action="auto-service">${te.state.settings.autoService?"Hired \xB7 tap to dismiss":"Hire manager"}</button></div><div class="settings-row"><h3>Secret codes</h3><details class="cheat-box"><summary>Have a code?</summary><form id="cheat-form" autocomplete="off"><input id="cheat-code" type="password" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="Enter a code" aria-label="Secret code"><button class="button button-dark" type="submit">Apply</button></form><p>On a keyboard you can also just type a code while playing.</p></details></div><div class="settings-row"><h3>Your progress</h3><p>Saved automatically in this browser. Closing the game pauses time.</p><button class="button button-soft" data-action="save">Save now</button></div><div class="settings-row"><h3>A fresh start</h3><p>Reset your businesses, purchases and cash. This replaces the current save on this device.</p><button class="button button-outline danger" data-action="reset-confirm">Start over</button></div>`),"settings"),!e&&ts.enabled&&ts.renderButton(Re("#settings-google-slot")).then(t=>{!t&&Re("#settings-google-slot")&&(Re("#settings-google-slot").innerHTML='<span class="google-loading">Google sign-in is unavailable right now.</span>')})}function Ld(i){ss=i;try{localStorage.setItem(_d,i)}catch{}}function nx(i){try{return!!localStorage.getItem(Pr(i))}catch{return!1}}function ix(i){Rt.play("toggle");let e=ss==="guest"&&te.state.playerName&&!nx(i.id);if(e){let t=JSON.parse(JSON.stringify(te.state));t.account={id:i.id,provider:"google",name:i.name,picture:i.picture};try{localStorage.setItem(Pr(i.id),JSON.stringify(t))}catch{}}te.save(),Ld(i.id),Ii=i,te.switchSave(Pr(i.id)),te.state.playerName&&te.state.account?.id===i.id&&(te.state.account.picture=i.picture||te.state.account.picture,te.state.account.name=i.name||te.state.account.name,te.save()),Nd(e?"Your guest progress now lives on your Google account.":null)}function sx(){ts.signOut(),te.save(),Ld("guest"),Ii=null,te.switchSave(Pr("guest")),Nd("Signed out. You are playing as a guest.")}function Nd(i){if(ro="",ao="",zl="",Dr="",$s(!0),Gs("overview"),Jt?.reset(),Xs(),!te.state.playerName){Zl();return}te.state.speed===0&&te.setSpeed(1),is(i||`Welcome back, ${te.state.playerName}.`),Rt.play("welcome")}function rx(){let i=Re("#player-name")?.value||"",e=Ii&&ss===Ii.id?Ii:null,t=te.setPlayerName(i,Re("#owner-code")?.value||"",e?{id:e.id,provider:"google",name:e.name,picture:e.picture}:null);t.ok?($s(!0),te.setSpeed(1),Xs(),Wn(),Rt.play(te.state.ownerMode?"reward":"welcome")):Rt.play("error"),is(t.message,t.ok)}function Xs(){let i=te.state,e=i.playerName||"New player";Re(".profile strong").textContent=e,Re(".character-name").innerHTML=tt(e)+" <span>That\u2019s you</span>";let t=Jv();Re(".profile-avatar").dataset.avatar!==t&&(Re(".profile-avatar").innerHTML=t,Re(".top-avatar").innerHTML=t,Re(".profile-avatar").dataset.avatar=t),Ws.update(),Ed(),Rd(),document.querySelectorAll("[data-need]").forEach(u=>u.textContent=Math.round(i[u.dataset.need])+"%"),Re("#cash").textContent=je(i.cash),Re("#cash").classList.toggle("negative",i.cash<0);let n=te.incomePerDay;Re("#daily-income").innerHTML=(n>=0?"+":"\u2212")+je(Math.abs(n))+"<span>/ day</span>",Re("#income-tag").innerHTML=n>=0?`${Pi} After tax`:`${gt("down")} Losing money`,Re("#income-tag").classList.toggle("negative",n<0),Re("#net-worth").textContent=je(te.netWorth),Re("#business-count").innerHTML=io(Object.keys(i.businesses).length)+` <span>/ ${io(bt.length)} in the city</span>`,Re("#energy-value").textContent=Math.round(i.energy)+"%",Re("#happiness-value").textContent=Math.round(i.happiness)+"%",Re("#energy-meter").style.width=i.energy+"%",Re("#happiness-meter").style.width=i.happiness+"%",Re("#game-day").textContent="Day "+Math.floor(i.day);let s=Math.min(99,1+Math.floor(Math.log10(Math.max(1,te.netWorth/1e4))*6));Re("#character-level").textContent="LEVEL "+io(s),Re("#founder-level").textContent=te.netWorth>=1e9?"Billionaire":te.netWorth>=1e8?"City tycoon":te.netWorth>=1e6?"Millionaire":te.netWorth>=1e5?"Empire builder":i.ownerMode?"Founder & owner":"Aspiring founder";let r=te.goals.find(u=>!u.claimed);Re("#goal-title").textContent=r?r.title:"A life well built.",Re("#goal-description").textContent=r?r.description:"Every milestone complete.",Re("#goal-progress").style.width=(r?r.progress/r.target*100:100)+"%",Re("#goal-reward").textContent=r?"+"+je(r.reward)+" reward":"Your city is thriving";let a=te.market,o=Re("#economy-chip");o.className="live-indicator economy-"+a.regime,o.innerHTML=`<i></i> Economy \xB7 ${a.label} <b>${a.index.toFixed(2)}\xD7</b>`,o.title=`Market demand ${Math.round(a.index*100)}% of normal, trending ${a.trend}`,document.querySelectorAll("[data-speed]").forEach(u=>u.classList.toggle("active",+u.dataset.speed===i.speed)),Re("#cash-rate").textContent=i.cash<0?"OVERDRAWN":i.speed?"LIVE":"PAUSED",Re("#cash-rate").classList.toggle("negative",i.cash<0);let c=Object.keys(i.businesses).join();Jt&&c!==ro&&(Jt.setOwned(Object.keys(i.businesses)),ro=c),Jt?.setPaused(i.speed===0);let l=i.assets.join();if(Jt&&ao!==l&&(Jt.setAssets?.(i.assets),ao=l),nn==="business"&&Math.floor(i.day)!==bd&&!Re("#modal").contains(document.activeElement)&&Lr(ns),Zt==="goals"){let u=te.goals.map(h=>h.achieved).join();u!==md&&(md=u,Wn())}if(Zt==="businesses"&&Re("#market-report")){let u=te.marketForecast,h=[u.regime,u.daysLeft,u.range,Math.round(u.index*100),u.trend,Object.values(i.businessState).map(f=>f.pricing).join()].join("|");h!==gd&&!Re("#market-report").contains(document.activeElement)&&(gd=h,Re("#market-report").outerHTML=Id())}for(let u of te.drainAlerts())is(u.text,u.kind==="market"||u.text.includes("viral"),u.kind==="market"?"market":"incident"),Rt.play(u.kind==="market"||u.text.includes("viral")?"coin":"alert")}var ax=["buyBusiness","upgrade","buyAsset","sellAsset","activity","claim","service","insure","sellBusiness","pricing","pay","campaign","rehire","pricingAll"];function ox(i){if(i.dataset.page||i.dataset.view||i.dataset.filter||i.dataset.marketFilter||i.dataset.phone)return"tab";if(i.dataset.speed!==void 0)return+i.dataset.speed==0?"pause":"play";let e=i.dataset.action;return e==="close"?"close":i.dataset.business||i.dataset.showAsset||["phone","settings","guide","life","history","reset-confirm"].includes(e)?"open":e==="night"?"toggle":ax.some(t=>i.dataset[t]!==void 0)||["work","sound","auto-service"].includes(e)||i.type==="submit"||i.dataset.simAction&&!["review-loan","cancel-loan","visit-life"].includes(i.dataset.simAction)?null:"click"}document.addEventListener("click",async i=>{let e=i.target.closest("button");if(!e||e.disabled||e.closest("#google-slot, #settings-google-slot"))return;let t=ox(e);if(t&&Rt.play(t),e.dataset.phone){Wl(e.dataset.phone);return}if(Ws.handleClick(e))return;if(e.dataset.showAsset)return Pd(e.dataset.showAsset);if(e.dataset.view){Zv(e.dataset.view);return}if(e.dataset.move){Jt?.move?.(e.dataset.move);return}if(e.dataset.page)return Gs(e.dataset.page);if(e.dataset.business)return Lr(e.dataset.business);if(e.dataset.filter){es=e.dataset.filter,document.querySelectorAll("[data-filter]").forEach(s=>s.classList.toggle("active",s.dataset.filter===es)),Wn();return}if(e.dataset.marketFilter){Ir=e.dataset.marketFilter,Vl();return}if(e.dataset.speed!==void 0){te.setSpeed(+e.dataset.speed),Xs();return}if(e.dataset.buyBusiness){Wt(te.buyBusiness(e.dataset.buyBusiness),"buy");return}if(e.dataset.upgrade){Wt(te.upgradeBusiness(e.dataset.upgrade),"upgrade");return}if(e.dataset.service){Wt(te.serviceBusiness(e.dataset.service),"work");return}if(e.dataset.pricing){let[s,r]=e.dataset.pricing.split("|");if(e.classList.contains("active"))return;Wt(te.setPricing(s,r),"toggle");return}if(e.dataset.pay){let[s,r]=e.dataset.pay.split("|");if(e.classList.contains("active"))return;Wt(te.setStaffPay(s,r),"toggle");return}if(e.dataset.campaign){Wt(te.launchCampaign(e.dataset.campaign),"upgrade");return}if(e.dataset.rehire){Wt(te.rehireStaff(e.dataset.rehire),"coin");return}if(e.dataset.pricingAll!==void 0){if(e.classList.contains("active"))return;Wt(te.setPricingAll(e.dataset.pricingAll),"toggle"),Zt==="businesses"&&Wn();return}if(e.dataset.insure){Wt(te.setInsurance(e.dataset.insure,!te.state.businessState[e.dataset.insure]?.insured),"toggle");return}if(e.dataset.sellBusiness){if(e.dataset.confirm!=="yes"){e.dataset.confirm="yes",e.innerHTML=`${gt("alert")} Tap again to sell for ${je(te.saleValue(e.dataset.sellBusiness))}`,Rt.play("alert");return}Wt(te.sellBusiness(e.dataset.sellBusiness),"coin"),te.state.businesses[e.dataset.sellBusiness]||$s();return}if(e.dataset.buyAsset){Wt(te.buyAsset(e.dataset.buyAsset),"buy");return}if(e.dataset.sellAsset){if(e.dataset.confirm!=="yes"){e.dataset.confirm="yes",e.innerHTML=`${gt("alert")} Tap again to confirm the sale`,Rt.play("alert");return}Wt(te.sellAsset(e.dataset.sellAsset),"coin"),Zt==="market"&&Vl();return}if(e.dataset.activity){Wt(te.activity(e.dataset.activity),"reward"),Zt==="life"&&Wn();return}if(e.dataset.claim){Wt(te.claimGoal(e.dataset.claim),"reward");return}let n=e.dataset.action;if(n==="phone"){Wl();return}if(n==="sound"){if(!Rt.supported){is("Sound is unavailable in this browser.",!1);return}await Rt.toggle(),Td(),Rt.play("toggle");return}if(n==="expand-city"){Re(".city-card").classList.toggle("city-expanded"),document.body.classList.toggle("city-expanded"),e.setAttribute("aria-label",Re(".city-card").classList.contains("city-expanded")?"Close expanded city":"Expand city");return}if(n==="reset-showroom"){ri?.reset();return}if(n==="showroom-3d"){Re("#asset-showroom").innerHTML="",ri=Ll(Re("#asset-showroom"),ns);return}if(n==="opportunities"){es="all",Gs("businesses");return}if(n==="goals"||n==="history"||n==="market"){Gs(n);return}if(n==="life"&&Dd(),n==="work"&&(Wt(te.work(),"work"),Zt==="life"&&Wn()),n==="guide"&&tx(),n==="settings"&&vd(),n==="close"&&$s(),n==="auto-service"&&(Wt(te.setAutoService(!te.state.settings.autoService),"toggle"),nn==="settings"&&vd()),n==="sign-out"&&sx(),n==="night"&&(Ci=!Ci,Jt?.setNight(Ci),ql(),e.innerHTML=gt(Ci?"sun":"moon"),Re(".weather-chip").innerHTML=gt(Ci?"moon":"sun")+"<span>"+(Ci?"18\xB0 <b>Clear skies</b>":"24\xB0 <b>Sunny</b>")+"</span>"),n==="zoom-in"&&Jt?.zoom(.2),n==="zoom-out"&&Jt?.zoom(-.2),n==="reset-camera"&&Jt?.reset(),n==="save"){let s=te.save();is(s?"Progress saved. Your city will be here.":"Saving is unavailable in this browser. Keep this tab open to preserve your progress.",s)}n==="reset-confirm"&&ai(oi("A brand-new beginning?","RESET YOUR CITY",'<p class="modal-description">This erases your purchases, upgrades, goals and balance. You\u2019ll begin again with your Corner Caf\xE9 and a fresh name.</p><button class="button button-outline full" data-action="settings">Keep my city</button><button class="button button-dark full" style="margin-top:10px" data-action="reset-game">Yes, start a new game</button>'),"reset"),n==="reset-game"&&(te.reset(),Ii=ss.startsWith("google-")&&te.state.account?{id:te.state.account.id,name:te.state.account.name,picture:te.state.account.picture}:null,ro="",ao="",Gs("overview"),Jt?.reset(),Xs(),Zl())});document.addEventListener("submit",i=>{if(i.target.id==="setup-form"&&(i.preventDefault(),rx()),i.target.id==="cheat-form"){i.preventDefault();let e=Re("#cheat-code");Wt(te.applyCheat(e.value),"reward")&&(e.value="",Rt.play("coin"))}});var no="";document.addEventListener("keydown",i=>{if(i.ctrlKey||i.metaKey||i.altKey||i.key.length!==1||!/[a-z0-9]/i.test(i.key)||i.target.closest?.('input, textarea, select, [contenteditable="true"]')||!te.state.playerName)return;no=(no+i.key.toUpperCase()).slice(-24);let e=ru(no);e&&(no="",Wt(te.applyCheat(e),"reward")&&Rt.play("coin"))});Re("#modal").addEventListener("click",i=>{if(i.target===Re("#modal")){let e=Re("#modal").getBoundingClientRect();(i.clientX<e.left||i.clientX>e.right||i.clientY<e.top||i.clientY>e.bottom)&&(nn!=="setup"&&Rt.play("close"),$s())}});Re("#modal").addEventListener("cancel",i=>{if(nn==="setup"&&!te.state.playerName){i.preventDefault();return}ri?.destroy(),ri=null,nn=null});document.addEventListener("keydown",i=>{i.key==="Escape"&&document.body.classList.contains("city-expanded")&&(Re(".city-card").classList.remove("city-expanded"),document.body.classList.remove("city-expanded"))});document.addEventListener("input",i=>{i.target.id==="player-name"&&(Re("#owner-code-label").hidden=!Gr(i.target.value)),i.target.dataset.volume&&Rt.setVolume(i.target.dataset.volume,Number(i.target.value)/100)});document.addEventListener("change",i=>{i.target.dataset.volume&&Rt.play("click")});Yv();Ad();Wn();Td();try{Jt=Kh(Re("#city-view"),{onSelect:i=>{Rt.play("open"),Lr(i)},onTraffic:i=>Rt.syncTraffic(i),photoFor:i=>Qi("business",i)}),Re(".city-loading")?.remove()}catch(i){Re(".city-loading").textContent="The city view could not load. You can still build your empire below.",console.error(i)}te.subscribe(Xs);setTimeout(()=>bt.forEach(i=>Xl(i.id,"business")),500);cd([...bt.map(i=>["business",i.id]),...jt.map(i=>["asset",i.id]),...["maya","alex","sofia","noah","aria","leo"].map(i=>["partner",i])],()=>{Dr="",Wn(),nn==="business"&&Lr(ns)});var $l=performance.now();setInterval(()=>{let i=performance.now(),e=(i-$l)/1e3;$l=i,!document.hidden&&!(nn==="setup"&&!te.state.playerName)&&te.tick(Math.min(e,2))},500);document.addEventListener("visibilitychange",()=>{$l=performance.now(),document.hidden&&te.save()});window.addEventListener("pagehide",()=>te.save());setTimeout(()=>{let i=te.save();Re("#save-status").innerHTML="<span></span>"+(i?"Progress saved on this device":"Saving unavailable in this browser")},1e3);te.state.playerName||setTimeout(Zl,600);
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
