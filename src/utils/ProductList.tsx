const certificatList = ["Non-GMO Project Verified", "Keto Certified", "Gluten free"];
const packingSizes = ["227 gm", "250 gm", "340 gm", "350 gm", "400 gm", "500 gm", "510 gm", "1 kg", "20 kg pail"];

export const AllProductsList = [
    {
        id: 1,
        categoryName: 'Peanut Butter',
        products: [
            {
                id: "C1P1",
                name: "Natural Creamy Peanut Butter",
                description: "100% natural peanut butter made with roasted peanuts. High protein, no sugar, no preservatives.",
                detailedDescription: "Our Natural Creamy Peanut Butter is made from just one simple ingredient—100% premium roasted peanuts. No added sugar, no preservatives, and absolutely no hydrogenated oils—just pure, wholesome goodness. With its luxuriously smooth texture, it spreads effortlessly on bread, blends seamlessly into smoothies, and makes a delicious dip for fruits or snacks. Every spoonful bursts with the rich, nutty flavor of real peanuts while fueling your body with plant-based protein, dietary fiber, and heart-healthy fats. A guilt-free treat, it’s perfect for athletes, fitness lovers, weight-watchers, and anyone seeking a clean and nutritious lifestyle. Whether you enjoy it on toast, in your favorite recipes, or straight from the jar, our Creamy Peanut Butter delivers natural indulgence in its purest form.",
                ingredients: "Premium Roasted Peanut only.",
                nutrition: "Per 2 tbsp (32g): Calories 199kcal, Fat 14g, Carbs 5g, Protein 9g",
                certifications: certificatList,
                sizes: packingSizes,
                recommended: true,
                cardImage: "/productsImage/natural_creamy_peanut_butter_bg.jpg",
                otherImages: [
                    "/productsImage/natural_creamy_peanut_butter.png",
                ]
            },
            {
                id: "C1P2",
                name: "Natural Crunchy Peanut Butter",
                description: "100% natural peanut butter made with roasted peanuts. High protein, no sugar, no preservatives.",
                detailedDescription: "Our Natural Crunchy Peanut Butter is crafted from 100% premium roasted peanuts—nothing else. Free from added sugar, preservatives, and hydrogenated oils, it’s pure, wholesome, and irresistibly crunchy. Every spoonful combines the rich, nutty flavor of real peanuts with the perfect crunch, making it both satisfying and nutritious. Rich in plant-based protein, dietary fiber, and heart-healthy fats, it fuels your active lifestyle while keeping you fuller for longer. Whether you spread it on toast, blend it into smoothies, drizzle it over oats, or simply enjoy it straight from the jar, our Crunchy Peanut Butter delivers natural goodness with a satisfying crunch in every bite.",
                ingredients: "Premium Roasted Peanut only.",
                nutrition: "Per 2 tbsp (32g): Calories 199kcal, Fat 14g, Carbs 5g, Protein 9g",
                certifications: certificatList,
                sizes: packingSizes,
                recommended: true,
                cardImage: "/productsImage/natural_crunchy_peanut_butter_bg.jpg",
                otherImages: [
                    "/productsImage/natural_crunchy_peanut_butter.png",
                ]
            },
            {
                id: "C1P3",
                name: "Classic Creamy Peanut Butter",
                description: "Rich, creamy & crunchy classic peanut butter. Perfect for sandwiches, smoothies & healthy snacking. Protein-packed goodness.",
                detailedDescription: "Experience the classic goodness of our Creamy Peanut Butter, crafted from 100% premium roasted peanuts—nothing more, nothing less. Free from added sugar, preservatives, and hydrogenated oils, it’s pure, natural, and packed with nutrition. With its velvety-smooth texture, it spreads effortlessly on bread, stirs seamlessly into smoothies, and adds rich flavor to baking or savory dishes. Every bite delivers authentic peanut taste while providing a powerful boost of plant-based protein, fiber, and healthy fats. Whether you’re fueling your fitness goals, managing your diet, or simply indulging in a wholesome treat, our Classic Creamy Peanut Butter is the perfect balance of nutrition and flavor.",
                ingredients: "Roasted Peanut, Sugar, Salt, Stabilizer (to  prevent oil sepration).",
                nutrition: "Per 2 tbsp (32g): Calories 190kcal, Fat 13g, Carbs 9g, Protein 8g",
                certifications: certificatList,
                sizes: packingSizes,
                recommended: false,
                cardImage: "/productsImage/crunchy.jpg",
                 otherImages: [
                    "/productsImage/natural_creamy_peanut_butter.png",
                ]
            },
            {
                id: "C1P4",
                name: "Classic Crunchy Peanut Butter",
                description: "Rich, creamy & crunchy classic peanut butter. Perfect for sandwiches, smoothies & healthy snacking. Protein-packed goodness.",
                detailedDescription: "Savor the bold nutty goodness of our Crunchy Peanut Butter, crafted from 100% roasted peanuts for an irresistible taste and texture. Free from added sugar, preservatives, and hydrogenated oils, it’s a clean, nutrient-packed spread you can feel good about. Each spoonful combines rich peanut flavor with a satisfying crunch—perfect for sandwiches, smoothies, or snacking straight from the jar. Loaded with protein, fiber, and healthy fats, it’s a delicious way to power your day with natural energy.",
                ingredients: "Roasted Peanut, Sugar, Salt, Stabilizer (to  prevent oil sepration).",
                nutrition: "Per 2 tbsp (32g): Calories 190kcal, Fat 13g, Carbs 9g, Protein 8g",
                certifications: certificatList,
                sizes: packingSizes,
                recommended: false,
                cardImage: "/productsImage/crunchy.jpg",
                 otherImages: [
                    "/productsImage/natural_creamy_peanut_butter.png",
                ]
            },
            {
                id: "C1P5",
                name: "Chocolate Creamy Peanut Butter",
                description: "Sweetened with organic honey for a delightful flavor",
                detailedDescription: "Experience indulgence redefined with our Chocolate Creamy Peanut Butter, a luscious blend of premium roasted peanuts and rich cocoa. Crafted without preservatives, hydrogenated oils, or refined sugar, this spread delivers guilt-free pleasure in every spoonful. Its smooth, melt-in-mouth texture makes it perfect for toast, pancakes, smoothies, baking, or simply enjoying straight from the jar. Packed with protein, fiber, and healthy fats, it combines nourishment with decadence—your ideal partner for both energy and indulgence.",
                ingredients: "Organic peanuts, organic honey, organic palm fruit oil, sea salt.",
                nutrition: "Per 2 tbsp (32g): Calories 210, Fat 16g, Carbs 10g, Protein 8g",
                certifications: certificatList,
                sizes: packingSizes,
                recommended: false,
                cardImage: "/productsImage/honey.jpg",
                 otherImages: [
                    "/productsImage/natural_creamy_peanut_butter.png",
                ]
            },
            {
                id: "C1P6",
                name: "Chocolate Crunchy Peanut Butter",
                description: "Sweetened with organic honey for a delightful flavor",
                detailedDescription: "Elevate your snacking with our Chocolate Crunchy Peanut Butter, where the wholesome crunch of roasted peanuts meets the irresistible richness of cocoa. Made with clean ingredients and free from preservatives, hydrogenated oils, and refined sugar, this spread is a powerhouse of nutrition and taste. Each bite offers the perfect balance of creamy chocolate flavor and satisfying nutty crunch. Spread it on toast, add it to desserts, swirl it into shakes, or enjoy it by the spoon—it’s pure, crunchy bliss packed with protein, fiber, and healthy fats.",
                ingredients: "Organic peanuts, organic honey, organic palm fruit oil, sea salt.",
                nutrition: "Per 2 tbsp (32g): Calories 210, Fat 16g, Carbs 10g, Protein 8g",
                certifications: certificatList,
                sizes: packingSizes,
                recommended: false,
                cardImage: "/productsImage/honey.jpg",
                 otherImages: [
                    "/productsImage/natural_creamy_peanut_butter.png",
                ]
            },
            {
                id: "C1P7",
                name: "Elaichi (Cardamom) Creamy Peanut Butter",
                description: "Delicious chocolate peanut butter with creamy & crunchy options. A healthy, protein-rich spread for fitness & chocolate lovers.",
                detailedDescription: "Discover a delightful fusion of tradition and nutrition with our Elaichi Creamy Peanut Butter. Made from 100% premium roasted peanuts and infused with the aromatic warmth of natural cardamom, this spread brings a unique Indian twist to a global favorite. With its silky-smooth texture, it spreads effortlessly on toast, melts beautifully into warm rotis, or adds a flavorful boost to smoothies and desserts. Packed with protein, fiber, and healthy fats, it’s a wholesome way to enjoy indulgence with a touch of exotic flavor.",
                ingredients: "Roasted Peanut, Sugar, Salt, Stabilizer (to  prevent oil sepration).",
                nutrition: "Per 2 tbsp (32g): Calories 190kcal, Fat 13g, Carbs 9g, Protein 8g",
                certifications: certificatList,
                sizes: packingSizes,
                recommended: false,
                cardImage: "/productsImage/elaichi_crunchy_peanut_butter.png",
                 otherImages: [
                    "/productsImage/elaichi_crunchy_peanut_butter.png",
                ]
            },
            {
                id: "C1P8",
                name: "Elaichi (Cardamom) Crunchy Peanut Butter",
                description: "Delicious chocolate peanut butter with creamy & crunchy options. A healthy, protein-rich spread for fitness & chocolate lovers.",
                detailedDescription: "Savor the perfect balance of crunch and tradition with our Elaichi Crunchy Peanut Butter. Crafted from roasted peanuts blended with the fragrant essence of cardamom, this spread offers a nutty bite with a hint of spice that awakens your taste buds. Free from preservatives, hydrogenated oils, and refined sugar, it’s as clean as it is delicious. Ideal for spreading on toast, swirling into milkshakes, pairing with fruits, or simply enjoying by the spoon, this protein-rich, fiber-packed spread is both nutritious and uniquely flavorful.",
                ingredients: "Roasted Peanut, Sugar, Salt, Stabilizer (to  prevent oil sepration).",
                nutrition: "Per 2 tbsp (32g): Calories 190kcal, Fat 13g, Carbs 9g, Protein 8g",
                certifications: certificatList,
                sizes: packingSizes,
                recommended: false,
                cardImage: "/productsImage/unsaulted.jpg",
                 otherImages: [
                    "/productsImage/elaichi_crunchy_peanut_butter.png",
                ]
            },
            {
                id: "C1P9",
                name: "Chocolate Crispy Peanut Butter",
                description: "Chocolate peanut butter with crispy crunch. Indulgent, protein-rich spread for snacks, desserts & fitness fuel.",
                detailedDescription: "Take your snacking to the next level with our Chocolate Crispy Peanut Butter. A delightful mix of roasted peanuts, rich cocoa, and crunchy rice crisps, it offers a unique texture that’s fun and delicious. Packed with protein and flavor, it’s perfect for quick breakfasts, post-workout snacks, or guilt-free desserts. Crunchy, chocolatey, and nutty—this spread is happiness in a jar.",
                ingredients: "Roasted Peanuts, Sugar, Salt, Dark Chocolate {Cocoa Solids, Sugar, Cocoa Butter, Emulsifier (INS322)}, Rice Crispy (Rice Flour, Wheat Flour, Milk Powder, Sugar, Salt, Cocoa Powder), Stabilizer (INS471)",
                nutrition: "Per 2 tbsp (32g): Calories 188kcal, Fat 13g, Carbs 12g, Protein 6g",
                certifications: certificatList,
                sizes: packingSizes,
                recommended: false,
                cardImage: "/productsImage/creamy.jpg",
                 otherImages: [
                    "/productsImage/natural_creamy_peanut_butter.png",
                ]
            },
            {
                id: "C1P10",
                name: "White Chocolate Crispy Peanut Butter",
                description: "Sweet white chocolate crispy peanut butter. Smooth, crunchy, and packed with protein for a delicious healthy treat						",
                detailedDescription: "Indulge in the sweet, creamy richness of our White Chocolate Crispy Peanut Butter. Crafted with premium roasted peanuts, smooth white chocolate, and crispy rice bits, it delivers a luxurious taste with a playful crunch. Perfect for spreading, baking, or enjoying straight from the spoon, this spread is a dessert lover’s dream. Nutritious, indulgent, and fun—this is not just peanut butter, it’s an experience.",
                ingredients: "Roasted Peanuts, Sugar, Salt, White Chocolate {Sugar, Vagetanle Fat}, Rice Crispy (Rice Flour, Wheat Flour, Milk Powder, Sugar, Salt), Stabilizer (INS471).",
                nutrition: "Per 2 tbsp (32g): Calories 164kcal, Fat 13g, Carbs 6g, Protein 7g",
                certifications: certificatList,
                sizes: packingSizes,
                recommended: false,
                cardImage: "/productsImage/crunchy.jpg",
            },
            {
                id: "C1P11",
                name: "Mango Chia Seeds Peanut Butter",
                description: "Refreshing mango chia peanut butter. Tropical flavor, protein-packed, rich in fiber & omega-3 for a healthy superfood spread",
                detailedDescription: "Bring tropical freshness to your snacking with our Mango Chia Seeds Peanut Butter. Made with real mango, chia seeds, and roasted peanuts, this spread is packed with protein, fiber, and omega-3 fatty acids. Sweet, nutty, and slightly crunchy, it’s a perfect blend of health and flavor. Spread on toast, add to smoothies, or enjoy straight from the jar—this superfood peanut butter is a fruity delight for your taste buds.",
                ingredients: "Roasted Peanuts 68%, Mango Paste 30% (Milk Solid, Sugar, Refined Palm Oil, Emulsifier(INS322), Natural Identical Flavor & Color), Chia Seeds, Stabilizer (E471).",
                nutrition: "Per 2 tbsp (32g): Calories 164kcal, Fat 13g, Carbs 6g, Protein 7g",
                certifications: certificatList,
                sizes: packingSizes,
                recommended: false,
                cardImage: "/productsImage/honey.jpg",
                 otherImages: [
                    "/productsImage/natural_creamy_peanut_butter.png",
                ]
            },
            {
                id: "C1P12",
                name: "Natural Creamy Peanut Butter Sugar free",
                description: "Enjoy guilt-free snacking with our zero sugar peanut butter. Made from 98% roasted peanuts & stabilizer for creamy perfection",
                detailedDescription: "Enjoy the authentic taste of peanuts in our Natural Creamy Peanut Butter – Sugar Free, crafted with 98% premium roasted peanuts and a touch of natural stabilizer for perfect smoothness. With absolutely no added sugar, no preservatives, and no hydrogenated oils, it’s a spread you can feel good about. Its silky, melt-in-mouth texture makes it ideal for spreading on toast, blending into protein shakes, or adding a nutty richness to desserts. Packed with protein, fiber, and healthy fats, this creamy delight is the perfect companion for clean eating, fitness, and everyday snacking.",
                ingredients: "Roasted Peanuts 98%, Salt, Stabilizer (E471).",
                nutrition: "Per 2 tbsp (32g): Calories 199kcal, Fat 14g, Carbs 5g, Protein 9g",
                certifications: certificatList,
                sizes: packingSizes,
                recommended: false,
                cardImage: "/productsImage/unsaulted.jpg",
                 otherImages: [
                    "/productsImage/natural_creamy_peanut_butter.png",
                ]
            },
            {
                id: "C1P13",
                name: "Natural Crunchy Peanut Butter Sugar free",
                description: "Enjoy guilt-free snacking with our zero sugar peanut butter. Made from 98% roasted peanuts & stabilizer for creamy perfection",
                detailedDescription: "Satisfy your craving for texture with our Natural Crunchy Peanut Butter – Sugar Free, made from 98% roasted peanuts and a hint of stabilizer to maintain consistency. With zero added sugar, no preservatives, and no hydrogenated oils, it’s a wholesome spread designed for health-conscious individuals. Each spoonful combines rich peanut flavor with a satisfying crunch, making it perfect for sandwiches, smoothies, or enjoying straight from the jar. High in protein, fiber, and healthy fats, this crunchy version fuels your day with natural energy and guilt-free goodness.",
                ingredients: "Roasted Peanuts 98%, Salt, Stabilizer (E471).",
                nutrition: "Per 2 tbsp (32g): Calories 199kcal, Fat 14g, Carbs 5g, Protein 9g",
                certifications: certificatList,
                sizes: packingSizes,
                recommended: false,
                cardImage: "/productsImage/unsaulted.jpg",
                 otherImages: [
                    "/productsImage/natural_creamy_peanut_butter.png",
                ]
            }
        ]
    },
    {
        id: 2,
        categoryName: 'Nut Butters',
        products: [
            {
                id: "C2P1",
                name: "Almond Butter",
                description: "Made from 100% roasted California almonds, our almond butter is rich in protein, fiber & healthy fats—pure, creamy & nutritious",
                detailedDescription: "Experience the pure taste of nature with our Almond Butter, crafted from 100% premium California almonds—slow roasted to perfection. With no added sugar, no preservatives, and no hydrogenated oils, it delivers wholesome nutrition in every spoon. Packed with plant-based protein, dietary fiber, Vitamin E, and healthy fats, almond butter is the ideal superfood spread for fitness enthusiasts, weight watchers, and anyone seeking a nutritious lifestyle. Spread it on toast, blend into smoothies, or enjoy straight from the jar—it’s creamy, nutty, and irresistibly healthy.",
                ingredients: "100% Roasted California Almond",
                nutrition: "Per 2 tbsp (32g): Calories 195kcal, Fat 18g, Carbs 6g, Protein 7g",
                certifications: certificatList,
                sizes: packingSizes,
                cardImage: "/productsImage/creamy.jpg",
                recommended: false
            },
            {
                id: "C2P2",
                name: "Cashew Butter",
                description: "Smooth, creamy cashew butter made from 100% roasted premium cashews. Naturally rich in protein, magnesium & healthy fats.",
                detailedDescription: "Delight your taste buds with the rich, creamy flavor of our Cashew Butter, made from 100% premium roasted cashews. With no added sugar, no preservatives, and no artificial ingredients, it’s a pure nut butter that’s both indulgent and healthy. Naturally packed with protein, magnesium, iron, and healthy fats, cashew butter is a delicious source of energy that supports overall wellness. Enjoy it as a spread, in desserts, smoothies, or straight from the jar—its silky smooth texture makes every spoonful irresistible.",
                ingredients: "100% Roasted Premium Cashew											",
                nutrition: "Per 2 tbsp (32g): Calories 186kcal, Fat 15g, Carbs 9g, Protein 6g",
                certifications: certificatList,
                sizes: packingSizes,
                cardImage: "/productsImage/crunchy.jpg",
                recommended: false
            },
            {
                id: "C2P3",
                name: "Tahini (Sesame Paste)",
                description: "Smooth, creamy tahini made from 100% roasted sesame seeds. Rich in protein, calcium & healthy fats—perfect for dips, dressings & spreads",
                detailedDescription: "Our Tahini is crafted from 100% premium roasted sesame seeds, stone-ground into a smooth, creamy paste. With no added sugar, preservatives, or artificial ingredients, it’s a wholesome superfood packed with plant-based protein, calcium, iron, and healthy fats. Traditionally used in Middle Eastern and Mediterranean cuisine, tahini is the key ingredient in hummus, baba ganoush, dressings, sauces, and desserts. Its nutty, earthy flavor and silky texture make it a versatile kitchen essential for both home cooks and professional chefs. Whether you’re looking for a nutritious spread, a vegan-friendly ingredient, or a natural source of energy, our 100% sesame seed tahini is the perfect choice.",
                ingredients: "100% Roasted Premium Hulled Sesame ",
                nutrition: "Per 2 tbsp (32g): Calories 191kcal, Fat 17g, Carbs 7g, Protein 5g",
                certifications: certificatList,
                sizes: packingSizes,
                cardImage: "/productsImage/honey.jpg",
                recommended: false
            }
        ]
    },
    {
        id: 3,
        categoryName: 'Rosted Peanuts',
        products: [
            {
                id: "C3P1",
                name: "Roasted Split Peanut",
                description: "Crunchy roasted split peanuts—high in protein, fiber & healthy fats. Perfect for snacking, toppings & food processing",
                detailedDescription: "Our Roasted Split Peanuts are made from premium-quality peanuts, perfectly roasted to bring out their natural flavor and crunch. Rich in plant-based protein, fiber, and essential nutrients, they are a healthy and tasty choice for both snacking and industrial use. Ideal as a standalone snack, salad topping, peanut butter, protein bar, or bakery ingredient, these roasted splits are widely used in confectionery, snack foods, trail mixes, and more. With consistent quality, crunch, and flavor, our roasted split peanuts are the go-to choice for food businesses and health-conscious consumers alike.",
                ingredients: "100% Roasted Peanut",
                nutrition: "Per 2 tbsp (32g): Calories 200, Fat 17g, Carbs 7g, Protein 9g",
                certifications: ["USDA Organic", "Non-GMO Project Verified"],
                sizes: ["40 kg bag"],
                cardImage: "/productsImage/creamy.jpg",
                recommended: false
            },
            {
                id: "C3P2",
                name: "Roasted Peanut Dices",
                description: "Premium roasted peanut dices with uniform size & rich crunch. Ideal for bakery, confectionery, snacks & toppings",
                detailedDescription: "Our crunchy organic peanut butter features finely chopped peanut pieces for that satisfying texture everyone loves. Made from premium organic peanuts with just a touch of sea salt to enhance the natural peanut flavor.",
                ingredients: "Organic peanuts, organic palm fruit oil (for stability), sea salt.",
                nutrition: "Per 2 tbsp (32g): Calories 200, Fat 17g, Carbs 7g, Protein 9g",
                certifications: ["USDA Organic", "Non-GMO Project Verified"],
                sizes: ["5 lb tub", "25 lb pail", "50 lb drum"],
                cardImage: "/productsImage/crunchy.jpg",
                recommended: false
            },
        ]
    },
    {
        id: 4,
        categoryName: 'Spread',
        products: [
            {
                id: "C4P1",
                name: "Hazealnut Chocolate Spread",
                description: "Rich, creamy hazelnut chocolate spread made with premium roasted hazelnuts & cocoa. Perfect for toast, desserts & indulgent snacking",
                detailedDescription: "Indulge in the irresistible taste of our Hazelnut Chocolate Spread, crafted with premium roasted hazelnuts and fine cocoa for a silky-smooth texture and luxurious flavor. With the perfect balance of nutty richness and chocolaty sweetness, it’s a delicious treat for both kids and adults. Ideal for spreading on toast, pancakes, waffles, or baking into cakes, cookies, and desserts, this spread is a pantry must-have for indulgent snacking. Rich in protein, healthy fats, and natural energy, it not only satisfies your sweet cravings but also adds nutritional value to your diet. Enjoy it straight from the jar or get creative in the kitchen—our Hazelnut Chocolate Spread is pure happiness in every spoon.",
                ingredients: "Hazelnut (10%), Cocoa Powder (10%), Milk Solid (3%), Palm Oil (35%), Sugar (41.2%), Salt, Emulsifier (INS471),Vanilla, Natural identical Flavor",
                nutrition: "Per 2 tbsp (32g): Calories 190, Fat 16g, Carbs 7g, Protein 8g",
                certifications: certificatList,
                sizes: packingSizes,
                cardImage: "/productsImage/creamy.jpg",
                recommended: false
            },
        ]
    },
];