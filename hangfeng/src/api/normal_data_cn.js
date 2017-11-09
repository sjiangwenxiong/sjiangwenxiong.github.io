export default {
	nav:[
		{title:"首 &nbsp;&nbsp; 页"},
		{title:"关 &nbsp;&nbsp; 于",detail:["业务发展","品牌荣誉","合作伙伴","企业文化","发展愿景"]},
		{title:"产品展示",detail:["全部产品","航空坐骑外套","航空毛毯","无纺布产品","航空单品","其他航空用品","酒店纺织用品"]},
		{title:"新闻中心",detail:["公司动态","行业资讯","媒体焦点","通知公告"]},
		{title:"招纳贤士"},
		{title:"联系我们"}
	],
	index:[
		{
			img:require("../assets/img/banner1.jpg"),
			name:"航丰针纺织",
			desc:"完美的品质源于对细节的执着",
			en:"THE QUALITY OF PERTFCTION COMES FROM THE PERSISTENCE OF DETAIL",
			more:"查看详情"
		},
		{
			img:require("../assets/img/banner2.jpg"),
			name:"",
			desc:"诸暨航丰针纺织有限公司",
			en:"诸暨航丰针纺织有限公司成立于2004年,公司专业生产各类航空用座椅外套、毛毯、被、枕头、枕套、餐巾、桌布、无纺布头靠等系列产品，是集产品设计、开发、生产、销售于一体的航空纺织用品综合企业。",
			more:"查看详情"
		},
		{
			img:require("../assets/img/banner3.jpg"),
			name:"合作伙伴",
			desc:"领引非凡成就",
			en:"LEAD EXTRAORDINARY ACHIEVEMENT",
			more:"查看详情"
		},
		{
			img:require("../assets/img/banner4.jpg"),
			name:"航丰",
			desc:"航空纺织领导者",
			en:"Aviation Textile Leader",
			more:"查看详情"
		},
	],
	about:{
		index:{
			title:["ABOUT US","聚焦行业焦点，了解航丰最新资讯，掌握行业动态"],
			intro:[
				"航丰概况",
				"诸暨航丰针纺织有限公司坐落于浙江东部城市诸暨陶朱工业区。位于长三角经济带，西施故里，五泄之畔。公司占地面积2万多平方米，建筑面积2万平方米，绿化面积1千多平方米。",
				"公司拥有各类针纺制品生产设备以及相关配套设备，为产品质量提供了有力的保证。主要民用产品有：航空用毯、被、枕头、枕头套、餐巾、桌布、头靠等系列产品。公司特聘多名资深权威的工艺技术专业管理人员，以及具有十几年相关工作经验的生产、销售管理人员，除生产前叙各种产品以外，公司新近开发、生产各种规格的无纺布、针织、梭织布制品。"
			],
			router:{
				title:"关于航丰",
				desc:"航丰，航空纺织品领导者",
				nav:["业务展示","品牌荣誉","合作伙伴","企业文化","发展愿景"],
				data:{
					show:[
						require('../assets/img/show1.jpg'),
						require('../assets/img/show2.jpg'),
						require('../assets/img/show3.jpg')				
					],
					honor:[
						require('../assets/img/brand1.jpg'),
						require('../assets/img/brand2.jpg'),
						require('../assets/img/brand3.jpg'),
						require('../assets/img/brand4.jpg')
					],
					partner:{
						title:"我们的客户遍布世界各地，与你共赢",
						img:require('../assets/img/about_partner.png'),
						detail:{
							title:"北美地区客户",
							content:["美国联合航空","美国航空","美国美达航空","美国阿拉斯加航空","美国维珍航空","美国大陆航空","加拿大航空","夏威夷航空"],
							more:"查看更多合作伙伴"
						}
					},
					culture:{
						left:["产品创新","创新是我们永恒的主题","没有创新就没有超越"],
						right:["诚信为本","欲做强企，先树信誉"]
					},
					dev:["整合优质品牌资源，重新诠释您的实力","企业愿景是企业未来的宏伟蓝图，公司将秉承“诚信，务实，创新，超卓”的经营理念,一如既往坚持以客户满意为导向，不断完善售后服务，不断开拓，在绚烂的航空纺织品天空上增添航丰一抹浓厚的色彩。"]
				}	
			}
		}
	},
	footer:{
		icon:[
			{type:'qq',img:require('../assets/img/qq.png')},
			{type:'wx',img:require('../assets/img/wx.png')},
			{type:'blog',img:require('../assets/img/blog.png')}
		],
		nav:["首页","关于","产品展示","新闻中心","招贤纳士","联系我们"],
		msg:"版权所有© 2006-2016 LEADIN  沪ICP备10205459号"
	},
	partner_list:{
		title:["ABOUT US","聚焦行业焦点，了解航丰最新资讯，掌握行业动态"],
		nav:["欧洲地区","北美地区","南美地区","中东地区","东/南亚地区","澳洲地区","非洲地区"],
		logoList:[
			[
				{name:"德国汉莎航空",img:require('../assets/img/partner1.jpg')},
				{name:"英国航空",img:require('../assets/img/partner2.jpg')},
				{name:"法国航空",img:require('../assets/img/partner3.jpg')},
				{name:"意大利航空",img:require('../assets/img/partner4.jpg')},
				{name:"英国维珍大西洋航空",img:require('../assets/img/partner5.jpg')},
				{name:"英国汤姆森航空",img:require('../assets/img/partner6.jpg')},
				{name:"意大利子午线航空",img:require('../assets/img/partner7.jpg')},
				{name:"俄罗斯全禄航空",img:require('../assets/img/partner8.jpg')},
				{name:"爱尔兰航空",img:require('../assets/img/partner9.jpg')},
				{name:"北欧航空",img:require('../assets/img/partner10.jpg')}
			],
			[
				{name:"德国汉莎航空",img:require('../assets/img/partner1.jpg')},
				{name:"英国航空",img:require('../assets/img/partner2.jpg')},
				{name:"法国航空",img:require('../assets/img/partner3.jpg')},
				{name:"意大利航空",img:require('../assets/img/partner4.jpg')},
				{name:"英国维珍大西洋航空",img:require('../assets/img/partner5.jpg')},
				{name:"英国汤姆森航空",img:require('../assets/img/partner6.jpg')},
				{name:"意大利子午线航空",img:require('../assets/img/partner7.jpg')},
				{name:"俄罗斯全禄航空",img:require('../assets/img/partner8.jpg')},
				{name:"爱尔兰航空",img:require('../assets/img/partner9.jpg')},
			],
			[
				{name:"德国汉莎航空",img:require('../assets/img/partner1.jpg')},
				{name:"英国航空",img:require('../assets/img/partner2.jpg')},
				{name:"法国航空",img:require('../assets/img/partner3.jpg')},
				{name:"意大利航空",img:require('../assets/img/partner4.jpg')},
				{name:"英国维珍大西洋航空",img:require('../assets/img/partner5.jpg')},
				{name:"英国汤姆森航空",img:require('../assets/img/partner6.jpg')},
				{name:"意大利子午线航空",img:require('../assets/img/partner7.jpg')},
				{name:"俄罗斯全禄航空",img:require('../assets/img/partner8.jpg')},
			],
			[
				{name:"德国汉莎航空",img:require('../assets/img/partner1.jpg')},
				{name:"英国航空",img:require('../assets/img/partner2.jpg')},
				{name:"法国航空",img:require('../assets/img/partner3.jpg')},
				{name:"意大利航空",img:require('../assets/img/partner4.jpg')},
				{name:"英国维珍大西洋航空",img:require('../assets/img/partner5.jpg')},
				{name:"英国汤姆森航空",img:require('../assets/img/partner6.jpg')},
				{name:"意大利子午线航空",img:require('../assets/img/partner7.jpg')},
			],
			[
				{name:"德国汉莎航空",img:require('../assets/img/partner1.jpg')},
				{name:"英国航空",img:require('../assets/img/partner2.jpg')},
				{name:"法国航空",img:require('../assets/img/partner3.jpg')},
				{name:"意大利航空",img:require('../assets/img/partner4.jpg')},
				{name:"英国维珍大西洋航空",img:require('../assets/img/partner5.jpg')},
				{name:"英国汤姆森航空",img:require('../assets/img/partner6.jpg')},
			],
			[
				{name:"德国汉莎航空",img:require('../assets/img/partner1.jpg')},
				{name:"英国航空",img:require('../assets/img/partner2.jpg')},
				{name:"法国航空",img:require('../assets/img/partner3.jpg')},
				{name:"意大利航空",img:require('../assets/img/partner4.jpg')},
				{name:"英国维珍大西洋航空",img:require('../assets/img/partner5.jpg')},
			],
			[
				{name:"德国汉莎航空",img:require('../assets/img/partner1.jpg')},
				{name:"英国航空",img:require('../assets/img/partner2.jpg')},
				{name:"法国航空",img:require('../assets/img/partner3.jpg')},
			]
		]
	},
	products:[
		{product:"航空座椅外套",item:[
			{type:"航空座椅外套",list:[
				{name:"航空座椅外套",img:require('../assets/img/product1.jpg')}
			]}
		]},
		{product:"航空毛毯",item:[
			{type:"梭织毛毯",list:[
				{name:"梭织毛毯",img:require('../assets/img/product1.jpg')}
			]},
			{type:"针织毛毯",list:[
				{name:"针织毛毯",img:require('../assets/img/product1.jpg')}
			]}
		]},
		{product:"无纺布产品",item:[
			{type:"枕巾",list:[
				{name:"阿斯巴尼高端枕巾",img:require('../assets/img/product1.jpg')},
				{name:"尼泊尔新款枕巾",img:require('../assets/img/product2.jpg')},
				{name:"新西兰进口羊绒枕巾",img:require('../assets/img/product3.jpg')},
				{name:"阿斯巴尼高端枕巾",img:require('../assets/img/product4.jpg'),detail:{
					"面料":"100%棉",
					"指示参数":"圆柱形枕头,拉链,上下底部镶边",
					"颜色类别":"米色/咖啡色",
					"尺寸":"45*25cm",
					"安全类别":"安全",
					imgList:[
						require('../assets/img/product4.jpg'),
						require('../assets/img/product4-1.jpg'),
						require('../assets/img/product4-2.jpg'),
						require('../assets/img/product4-3.jpg')
					]
				}},
				{name:"尼泊尔新款枕巾",img:require('../assets/img/product5.jpg')},
				{name:"新西兰进口羊绒枕巾",img:require('../assets/img/product6.jpg')},
				{name:"阿斯巴尼高端枕巾",img:require('../assets/img/product7.jpg')},
				{name:"尼泊尔新款枕巾",img:require('../assets/img/product8.jpg')},
				{name:"新西兰进口羊绒枕巾",img:require('../assets/img/product9.jpg')},
			]},
			{type:"枕套",list:[
				{name:"枕套",img:require('../assets/img/product1.jpg')}
			]},
			{type:"枕头",list:[
				{name:"枕头",img:require('../assets/img/product1.jpg')}
			]},
			{type:"床单",list:[
				{name:"床单",img:require('../assets/img/product1.jpg')}
			]},
			{type:"被芯",list:[
				{name:"被芯",img:require('../assets/img/product1.jpg')}
			]},
		]},
		{product:"航空单品",item:[
			{type:"航空单品",list:[
				{name:"航空单品",img:require('../assets/img/product1.jpg')}
			]}
		]},
		{product:"其他航空用品",item:[
			{type:"其他航空用品",list:[
				{name:"其他航空用品",img:require('../assets/img/product1.jpg')}
			]}
		]},
		{product:"酒店纺织用品",item:[
			{type:"酒店纺织用品",list:[
				{name:"其他航空用品",img:require('../assets/img/product1.jpg')}
			]}
		]},
	],
	join:{
		desc:"航丰推崇“德才兼备，以德为本，尚贤用能，绩效优先”的价值主张。对德行的理解，航丰认为诚信、务实、勤奋、胸襟最为重要。对贤能的理解，航丰认为有思想、敢担当、善创新、乐育人最为重要。航丰坚信业绩是人才评鉴的唯一标准，坚持以业绩贡献大小进行人才任用。对于那些不仅能够取得优异的个人业绩，还能够带领团队创造优秀业绩的人才，航丰将推动他们成为航丰的领导者。",
		name:"职位列表",
		adv:"以下职位长期招聘，欢迎简历投递至 ：",
		header:{name:"职位名称",work:"工作职能",place:"工作地点",detail:"详情"},
		list:[
			{name:"总经理助理",work:"助理",place:"浙江-杭州",detail:[
				{type:"公司概况",list:[
					{name:"发布日期",msg:"2017年9月9日"},
					{name:"职位年薪",msg:"50-80万"},
					{name:"所属行业",msg:"互联网/移动互联网"},
					{name:"所属部门",msg:"集团人力资源部"},
					{name:"企业性质",msg:"私营·民营企业"},
					{name:"企业规模",msg:"10000人以上"},
				]},
				{type:"职位描述",list:[
					{name:"1",msg:"负责协助总经理相关业务的商务谈判公司"},
					{name:"2",msg:"负责公司项目的协调事宜,完成总经理交代事宜"},
					{name:"3",msg:"协助总经理做好公司各项经营管理工作,督促检查落实执行情况"}
				]},
				{type:"任职要求",list:[
					{name:"1",msg:"专科及以上学历,性格开朗,良好的人际沟通,协调组织能力"},
					{name:"2",msg:"擅长word,excel.ppt等办公软件"},
					{name:"3",msg:"良好的团队合作精神，为人诚实可靠，品行端正"},
					{name:"4",msg:"有驾照者优先"}
				]}
			]},
			{name:"仓库采购员",work:"采购",place:"浙江-杭州",detail:[
				{type:"公司概况",list:[
					{name:"发布日期",msg:"2017年9月9日"},
					{name:"职位年薪",msg:"50-80万"},
					{name:"所属行业",msg:"互联网/移动互联网"},
					{name:"所属部门",msg:"集团人力资源部"},
					{name:"企业性质",msg:"私营·民营企业"},
					{name:"企业规模",msg:"10000人以上"},
				]},
				{type:"职位描述",list:[
					{name:"1",msg:"负责协助总经理相关业务的商务谈判公司"},
					{name:"2",msg:"负责公司项目的协调事宜,完成总经理交代事宜"},
					{name:"3",msg:"协助总经理做好公司各项经营管理工作,督促检查落实执行情况"}
				]},
				{type:"任职要求",list:[
					{name:"1",msg:"专科及以上学历,性格开朗,良好的人际沟通,协调组织能力"},
					{name:"2",msg:"擅长word,excel.ppt等办公软件"},
					{name:"3",msg:"良好的团队合作精神，为人诚实可靠，品行端正"},
					{name:"4",msg:"有驾照者优先"}
				]}
			]},
			{name:"出纳",work:"财务",place:"浙江-杭州",detail:[
				{type:"公司概况",list:[
					{name:"发布日期",msg:"2017年9月9日"},
					{name:"职位年薪",msg:"50-80万"},
					{name:"所属行业",msg:"互联网/移动互联网"},
					{name:"所属部门",msg:"集团人力资源部"},
					{name:"企业性质",msg:"私营·民营企业"},
					{name:"企业规模",msg:"10000人以上"},
				]},
				{type:"职位描述",list:[
					{name:"1",msg:"负责协助总经理相关业务的商务谈判公司"},
					{name:"2",msg:"负责公司项目的协调事宜,完成总经理交代事宜"},
					{name:"3",msg:"协助总经理做好公司各项经营管理工作,督促检查落实执行情况"}
				]},
				{type:"任职要求",list:[
					{name:"1",msg:"专科及以上学历,性格开朗,良好的人际沟通,协调组织能力"},
					{name:"2",msg:"擅长word,excel.ppt等办公软件"},
					{name:"3",msg:"良好的团队合作精神，为人诚实可靠，品行端正"},
					{name:"4",msg:"有驾照者优先"}
				]}
			]},
			{name:"内审经理",work:"财务",place:"浙江-杭州",detail:[
				{type:"公司概况",list:[
					{name:"发布日期",msg:"2017年9月9日"},
					{name:"职位年薪",msg:"50-80万"},
					{name:"所属行业",msg:"互联网/移动互联网"},
					{name:"所属部门",msg:"集团人力资源部"},
					{name:"企业性质",msg:"私营·民营企业"},
					{name:"企业规模",msg:"10000人以上"},
				]},
				{type:"职位描述",list:[
					{name:"1",msg:"负责协助总经理相关业务的商务谈判公司"},
					{name:"2",msg:"负责公司项目的协调事宜,完成总经理交代事宜"},
					{name:"3",msg:"协助总经理做好公司各项经营管理工作,督促检查落实执行情况"}
				]},
				{type:"任职要求",list:[
					{name:"1",msg:"专科及以上学历,性格开朗,良好的人际沟通,协调组织能力"},
					{name:"2",msg:"擅长word,excel.ppt等办公软件"},
					{name:"3",msg:"良好的团队合作精神，为人诚实可靠，品行端正"},
					{name:"4",msg:"有驾照者优先"}
				]}
			]},
			{name:"商务经理",work:"商务",place:"浙江-杭州",detail:[
				{type:"公司概况",list:[
					{name:"发布日期",msg:"2017年9月9日"},
					{name:"职位年薪",msg:"50-80万"},
					{name:"所属行业",msg:"互联网/移动互联网"},
					{name:"所属部门",msg:"集团人力资源部"},
					{name:"企业性质",msg:"私营·民营企业"},
					{name:"企业规模",msg:"10000人以上"},
				]},
				{type:"职位描述",list:[
					{name:"1",msg:"负责协助总经理相关业务的商务谈判公司"},
					{name:"2",msg:"负责公司项目的协调事宜,完成总经理交代事宜"},
					{name:"3",msg:"协助总经理做好公司各项经营管理工作,督促检查落实执行情况"}
				]},
				{type:"任职要求",list:[
					{name:"1",msg:"专科及以上学历,性格开朗,良好的人际沟通,协调组织能力"},
					{name:"2",msg:"擅长word,excel.ppt等办公软件"},
					{name:"3",msg:"良好的团队合作精神，为人诚实可靠，品行端正"},
					{name:"4",msg:"有驾照者优先"}
				]}
			]},
			{name:"订单专员",work:"商务",place:"浙江-杭州",detail:[
				{type:"公司概况",list:[
					{name:"发布日期",msg:"2017年9月9日"},
					{name:"职位年薪",msg:"50-80万"},
					{name:"所属行业",msg:"互联网/移动互联网"},
					{name:"所属部门",msg:"集团人力资源部"},
					{name:"企业性质",msg:"私营·民营企业"},
					{name:"企业规模",msg:"10000人以上"},
				]},
				{type:"职位描述",list:[
					{name:"1",msg:"负责协助总经理相关业务的商务谈判公司"},
					{name:"2",msg:"负责公司项目的协调事宜,完成总经理交代事宜"},
					{name:"3",msg:"协助总经理做好公司各项经营管理工作,督促检查落实执行情况"}
				]},
				{type:"任职要求",list:[
					{name:"1",msg:"专科及以上学历,性格开朗,良好的人际沟通,协调组织能力"},
					{name:"2",msg:"擅长word,excel.ppt等办公软件"},
					{name:"3",msg:"良好的团队合作精神，为人诚实可靠，品行端正"},
					{name:"4",msg:"有驾照者优先"}
				]}
			]},
			{name:"储备干部",work:"产品",place:"浙江-杭州",detail:[
				{type:"公司概况",list:[
					{name:"发布日期",msg:"2017年9月9日"},
					{name:"职位年薪",msg:"50-80万"},
					{name:"所属行业",msg:"互联网/移动互联网"},
					{name:"所属部门",msg:"集团人力资源部"},
					{name:"企业性质",msg:"私营·民营企业"},
					{name:"企业规模",msg:"10000人以上"},
				]},
				{type:"职位描述",list:[
					{name:"1",msg:"负责协助总经理相关业务的商务谈判公司"},
					{name:"2",msg:"负责公司项目的协调事宜,完成总经理交代事宜"},
					{name:"3",msg:"协助总经理做好公司各项经营管理工作,督促检查落实执行情况"}
				]},
				{type:"任职要求",list:[
					{name:"1",msg:"专科及以上学历,性格开朗,良好的人际沟通,协调组织能力"},
					{name:"2",msg:"擅长word,excel.ppt等办公软件"},
					{name:"3",msg:"良好的团队合作精神，为人诚实可靠，品行端正"},
					{name:"4",msg:"有驾照者优先"}
				]}
			]},
		]
	},
	contact:{
		name:"联系我们",
		list:[
			{type:"电话",msg:"（+86 575）8730 6757"},
			{type:"传真",msg:"（+86 575）8730 3922"},
			{type:"企业邮箱",msg:"mi53068@hangfengtex.com"},
			{type:"地址",msg:"浙江省诸暨市陶朱街道唐三路19号"},
			{type:"邮编",msg:"311800"}
		]
	}	
}