// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
  },
  {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet",
    ],
  },
  {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor",
    ],
  },
  {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language",
    ],
  },
  {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
  },
  {
    numb: 6,
    question: "What does AJAX stand for",
    answer: "Asynchronous JavaScript And XML",
    options: [
      "AutoComplete JavaScript And XML",
      "Asynchronous JavaScript And HTML",
      "Automatic JavaScript And XML",
      "Asynchronous JavaScript And XML",
    ],
  },
  {
    numb: 7,
    question: "What does XML stand for",
    answer: "extensible markup language",
    options: [
      "extensible moderate language",
      "extensive markup language",
      "extensible markup language",
      "extensible maping language",
    ],
  },
  {
    numb: 8,
    question: "What does GIF stand for",
    answer: "Graphics Interchange Format",
    options: [
      "Graphics Interchange Format",
      "Graphics Interchange Frame",
      "Graphics Internal Form",
      "Graph Interchange Format",
    ],
  },
  {
    numb: 9,
    question: "What does HTTP stand for",
    answer: "Hypertext Transfer Protocol",
    options: [
      "Hypertext Transfering Protocol",
      "Hypertext Transfer Prots",
      "Hypertext Transfer Protocol",
      "Hypertext Transfer Portals",
    ],
  },
  {
    numb: 10,
    question: "What does API stand for",
    answer: "Application Programming Interface",
    options: [
      "Application Program Input",
      "Application Program Interface",
      "Application Programming Interchange",
      "Application Programming Interface  ",
    ],
  },

  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];

const question = [
  {
    numb: 1,
    question:
      "What is the key principle of responsible consumption and production?",
    answer: "Minimizing waste and using resources efficiently",
    options: [
      "Maximizing waste to create more jobs",
      "Using resources without concern for the environment",
      "Exporting waste to developing countries",
      "Minimizing waste and using resources efficiently",
    ],
  },
  {
    numb: 2,
    question:
      "What is the main goal of Sustainable Development Goal 12 (SDG 12)?",
    answer: "Ensure sustainable consumption and production patterns",
    options: [
      "Promote unchecked consumption of resources",
      "Reduce the overall quality of life",
      "Ensure sustainable consumption and production patterns",
      "Maximize resource depletion",
    ],
  },
  {
    numb: 3,
    question:
      "Which of the following is an example of sustainable consumption?",
    answer:
      "Using a reusable water bottle instead of single-use plastic bottles",
    options: [
      "Burning plastic waste in open pits",
      "Using a reusable water bottle instead of single-use plastic bottles",
      "Purchasing disposable products for daily use",
      "Overfishing in sensitive marine ecosystems",
    ],
  },
  {
    numb: 4,
    question: "What is the concept of 'reduce, reuse, recycle' all about?",
    answer: "Minimizing waste and conserving resources",
    options: [
      "Producing more waste to stimulate economic growth",
      "Conserving waste in landfills",
      "Minimizing waste and conserving resources",
      "Reusing products without considering environmental impact",
    ],
  },
  {
    numb: 5,
    question:
      "Which of the following is a sustainable practice in clothing consumption?",
    answer: "Buying second-hand or vintage clothing",
    options: [
      "Always buying the latest fashion trends",
      "Throwing away old clothes without consideration",
      "Buying second-hand or vintage clothing",
      "Importing clothes from far-off countries",
    ],
  },
  {
    numb: 6,
    question: "What does 'fast fashion' refer to?",
    answer:
      "Mass production of inexpensive clothing designed for short-term use",
    options: [
      "Sustainable and slow clothing production",
      "Custom-made clothing for long-term use",
      "Mass production of expensive clothing",
      "Mass production of inexpensive clothing designed for short-term use",
    ],
  },
  {
    numb: 7,
    question: "How can individuals reduce food waste at home?",
    answer: "Plan meals, use leftovers, and compost food scraps",
    options: [
      "Purchase excess food to prevent running out",
      "Throw all food scraps in the trash",
      "Plan meals, use leftovers, and compost food scraps",
      "Avoid cooking at home",
    ],
  },
  {
    numb: 8,
    question:
      "What is the impact of electronic waste (e-waste) on the environment?",
    answer: "Toxic chemicals can leach into the soil and water",
    options: [
      "E-waste has no environmental impact",
      "It naturally biodegrades over time",
      "It reduces greenhouse gas emissions",
      "Toxic chemicals can leach into the soil and water",
    ],
  },
  {
    numb: 9,
    question:
      "Why is it important to support companies with sustainable supply chains?",
    answer:
      "To encourage responsible production and reduce environmental impact",
    options: [
      "To increase product prices",
      "To avoid supporting any businesses",
      "To encourage responsible production and reduce environmental impact",
      "To promote excessive consumption",
    ],
  },
  {
    numb: 10,
    question:
      "Which of the following practices promotes responsible consumption?",
    answer: "Repairing and maintaining products to extend their lifespan",
    options: [
      "Discarding products after a single use",
      "Frequently buying the latest gadgets",
      "Repairing and maintaining products to extend their lifespan",
      "Hoarding unused items",
    ],
  },
  {
    numb: 11,
    question:
      "What is the primary cause of air pollution related to industrial production?",
    answer: "Emissions from factories and power plants",
    options: [
      "Natural occurrences like volcanic eruptions",
      "Vehicular emissions only",
      "Emissions from factories and power plants",
      "Harmless chemical reactions",
    ],
  },
  {
    numb: 12,
    question:
      "How can individuals reduce their carbon footprint related to transportation?",
    answer: "Using public transportation, carpooling, or biking",
    options: [
      "Driving alone in a gas-guzzling car",
      "Using public transportation, carpooling, or biking",
      "Flying for every trip, regardless of distance",
      "Avoiding all forms of transportation",
    ],
  },
  {
    numb: 13,
    question:
      "What is the concept of a 'circular economy' in sustainable production?",
    answer: "Minimizing waste by recycling and reusing materials",
    options: [
      "Maximizing waste by discarding materials after one use",
      "Minimizing production to reduce consumption",
      "Minimizing waste by recycling and reusing materials",
      "Producing items in large quantities",
    ],
  },
  {
    numb: 14,
    question: "Why is it important to avoid single-use plastic products?",
    answer: "They contribute to plastic pollution in the environment",
    options: [
      "Single-use plastic products are easily recyclable",
      "They are more convenient than reusable options",
      "They contribute to plastic pollution in the environment",
      "Single-use plastics do not impact the environment",
    ],
  },
  {
    numb: 15,
    question: "What is the purpose of 'upcycling' in sustainable production?",
    answer: "Creating higher-value products from waste materials",
    options: [
      "Discarding waste materials",
      "Producing new items from scratch",
      "Creating higher-value products from waste materials",
      "Using waste materials in their original form",
    ],
  },
  {
    numb: 16,
    question:
      "Which of the following is a sustainable energy source for responsible production?",
    answer: "Solar power",
    options: [
      "Burning fossil fuels",
      "Nuclear power",
      "Solar power",
      "Hydroelectric power",
    ],
  },
  {
    numb: 17,
    question: "What is 'carbon offsetting' in sustainable production?",
    answer:
      "Investing in projects that reduce or capture greenhouse gas emissions",
    options: [
      "Emitting more greenhouse gases to balance the atmosphere",
      "Removing all carbon emissions from the atmosphere",
      "Investing in projects that reduce or capture greenhouse gas emissions",
      "Ignoring the concept of carbon emissions",
    ],
  },
  {
    numb: 18,
    question: "How can responsible consumption benefit the economy?",
    answer: "By creating green jobs and reducing resource depletion",
    options: [
      "By promoting resource depletion",
      "By increasing pollution",
      "By creating green jobs and reducing resource depletion",
      "By reducing employment opportunities",
    ],
  },
  {
    numb: 19,
    question:
      "What is the concept of 'life cycle assessment' in sustainable production?",
    answer:
      "Evaluating the environmental impacts of a product throughout its entire life",
    options: [
      "Evaluating only the production phase of a product",
      "Ignoring the environmental impact of products",
      "Evaluating the environmental impacts of a product throughout its entire life",
      "Evaluating the marketing of a product",
    ],
  },
  {
    numb: 20,
    question:
      "Why is it important to reduce meat consumption for sustainable living?",
    answer: "Meat production has a significant environmental footprint",
    options: [
      "Meat consumption has no impact on the environment",
      "Meat is the only sustainable source of protein",
      "Meat production has a significant environmental footprint",
      "Meat consumption helps reduce carbon emissions",
    ],
  },
  {
    numb: 21,
    question: "What is 'food miles' in the context of responsible consumption?",
    answer: "The distance food travels from its source to the consumer",
    options: [
      "The distance between grocery stores",
      "The weight of food products",
      "The distance food travels from its source to the consumer",
      "The number of food items in a meal",
    ],
  },
  {
    numb: 22,
    question: "How does 'greenwashing' relate to responsible consumption?",
    answer: "It's when companies falsely claim their products are eco-friendly",
    options: [
      "It's a technique to color products green",
      "It promotes responsible consumption",
      "It's when companies falsely claim their products are eco-friendly",
      "It involves recycling products only",
    ],
  },
  {
    numb: 23,
    question:
      "What is 'planned obsolescence' in the context of responsible production?",
    answer:
      "Designing products to have a limited lifespan to encourage frequent replacement",
    options: [
      "Designing products to last indefinitely",
      "Making products without any planning",
      "Designing products to be too expensive to produce",
      "Designing products to have a limited lifespan to encourage frequent replacement",
    ],
  },
  {
    numb: 24,
    question:
      "Why is it important to support fair trade products in responsible consumption?",
    answer: "To ensure fair wages and ethical working conditions for producers",
    options: [
      "To promote luxury products",
      "To increase product prices",
      "To ensure fair wages and ethical working conditions for producers",
      "To encourage child labor",
    ],
  },
  {
    numb: 25,
    question:
      "What is 'biodiversity' and how does it relate to responsible production?",
    answer:
      "Variety of life on Earth; responsible production should minimize harm to biodiversity",
    options: [
      "The number of businesses in a region",
      "A specific species of bird",
      "Variety of life on Earth; responsible production should minimize harm to biodiversity",
      "The concept of using only a single resource",
    ],
  },
  {
    numb: 26,
    question:
      "What is 'e-waste' and how does it impact responsible consumption?",
    answer:
      "Discarded electronic devices and their improper disposal harm the environment",
    options: [
      "Efficient electronic devices with no environmental impact",
      "Electronic devices made from sustainable materials",
      "Discarded electronic devices and their improper disposal harm the environment",
      "Electronic devices can be safely discarded in any trash bin",
    ],
  },
  {
    numb: 27,
    question:
      "What is 'sustainable agriculture' and how does it relate to responsible consumption?",
    answer:
      "Farming practices that minimize environmental impact and promote food security",
    options: [
      "Farming practices that prioritize crop yield over environmental concerns",
      "Farming practices that involve no technology",
      "Farming practices that minimize environmental impact and promote food security",
      "Farming practices that focus solely on monoculture crops",
    ],
  },
  {
    numb: 28,
    question:
      "How can individuals contribute to responsible consumption in their daily lives?",
    answer:
      "By being mindful of what they purchase and its environmental impact",
    options: [
      "By buying products without consideration",
      "By encouraging overconsumption",
      "By being mindful of what they purchase and its environmental impact",
      "By supporting businesses with no sustainability initiatives",
    ],
  },
  {
    numb: 29,
    question:
      "What is 'overconsumption,' and how does it impact responsible consumption and production?",
    answer:
      "Excessive buying and using of goods beyond what is necessary, leading to resource depletion",
    options: [
      "Careful and thoughtful purchasing of products",
      "Excessive buying and using of goods beyond what is necessary, leading to resource depletion",
      "Buying only luxury products",
      "Not buying any products at all",
    ],
  },
  {
    numb: 30,
    question:
      "Why is it important to consider the environmental impact of your clothing choices?",
    answer:
      "The fashion industry can have a significant carbon and resource footprint",
    options: [
      "Fashion has no impact on the environment",
      "It's essential to always follow the latest trends",
      "The fashion industry can have a significant carbon and resource footprint",
      "The fashion industry is completely sustainable",
    ],
  },
  {
    numb: 31,
    question:
      "What is 'sustainable seafood' and why is it important for responsible consumption?",
    answer:
      "Seafood caught or farmed in ways that consider long-term health and environmental impact",
    options: [
      "All seafood is equally sustainable",
      "Seafood is not a source of overfishing",
      "Seafood caught or farmed in ways that consider long-term health and environmental impact",
      "Sustainable seafood refers to any seafood that is canned",
    ],
  },
  {
    numb: 32,
    question:
      "What is 'zero waste' living, and how does it contribute to responsible consumption and production?",
    answer:
      "A lifestyle that aims to minimize waste generation and reduce environmental impact",
    options: [
      "A lifestyle that generates the most waste possible",
      "A lifestyle that promotes waste as a resource",
      "A lifestyle that aims to minimize waste generation and reduce environmental impact",
      "A lifestyle that doesn't consider waste at all",
    ],
  },
  {
    numb: 33,
    question:
      "What is 'fair trade' and why is it important in responsible consumption?",
    answer:
      "A trading partnership that promotes fair wages and ethical conditions for producers in developing countries",
    options: [
      "A trading partnership that always offers the lowest prices",
      "A trading partnership that primarily benefits large corporations",
      "A trading partnership that promotes fair wages and ethical conditions for producers in developing countries",
      "A trading partnership with no ethical considerations",
    ],
  },
  {
    numb: 34,
    question:
      "What is the concept of 'carbon neutrality,' and how does it relate to responsible production?",
    answer:
      "Balancing carbon emissions with carbon removal or offsetting measures",
    options: [
      "Ignoring all carbon emissions",
      "Maximizing carbon emissions to stimulate economic growth",
      "Balancing carbon emissions with carbon removal or offsetting measures",
      "Increasing carbon emissions without consequences",
    ],
  },
  {
    numb: 35,
    question:
      "How can individuals reduce their energy consumption in their daily lives?",
    answer:
      "By using energy-efficient appliances and reducing unnecessary energy use",
    options: [
      "By increasing energy consumption as much as possible",
      "By using outdated, energy-intensive appliances",
      "By using energy-efficient appliances and reducing unnecessary energy use",
      "By ignoring energy conservation practices",
    ],
  },
  {
    numb: 36,
    question:
      "What is 'sustainable transportation,' and how does it contribute to responsible consumption and production?",
    answer:
      "Transportation methods that reduce environmental impact and promote efficiency",
    options: [
      "Transportation methods that maximize fuel consumption",
      "Transportation methods that have no environmental impact",
      "Transportation methods that reduce environmental impact and promote efficiency",
      "Transportation methods that ignore environmental concerns",
    ],
  },
  {
    numb: 37,
    question:
      "What is 'environmental footprint,' and why is it important in responsible consumption and production?",
    answer: "The measure of the impact of human activities on the environment",
    options: [
      "A measure of the size of shoes worn by people",
      "A concept unrelated to responsible consumption",
      "The measure of the impact of human activities on the environment",
      "The size of a person's carbon footprint",
    ],
  },
  {
    numb: 38,
    question:
      "What is 'water scarcity,' and how does it relate to responsible consumption?",
    answer:
      "The lack of sufficient water resources to meet the needs of a region",
    options: [
      "Water scarcity is a problem only in tropical regions",
      "Using water without any concerns is sustainable",
      "The lack of sufficient water resources to meet the needs of a region",
      "Water scarcity is a myth created by environmentalists",
    ],
  },
  {
    numb: 39,
    question:
      "How can individuals reduce their waste generation in daily life?",
    answer:
      "By using products with minimal packaging and by recycling and composting",
    options: [
      "By purchasing products with excessive packaging",
      "By using products with no packaging at all",
      "By using products with minimal packaging and by recycling and composting",
      "By generating as much waste as possible",
    ],
  },
  {
    numb: 40,
    question:
      "What is 'sustainable forest management,' and why is it important for responsible consumption?",
    answer:
      "Practices that ensure the long-term health of forests and their ecosystems",
    options: [
      "Clear-cutting forests to maximize resource extraction",
      "Forests are not affected by human activity",
      "Practices that ensure the long-term health of forests and their ecosystems",
      "Exploiting forests without consideration for the environment",
    ],
  },
  {
    numb: 41,
    question:
      "What is 'life cycle analysis,' and how does it relate to responsible production?",
    answer:
      "A method for assessing the environmental impact of a product throughout its entire life cycle",
    options: [
      "A method for analyzing the lives of individuals",
      "A tool to evaluate only the production phase of a product",
      "A method for assessing the environmental impact of a product throughout its entire life cycle",
      "An analysis of marketing techniques",
    ],
  },
  {
    numb: 42,
    question:
      "What is 'sustainable packaging,' and why is it important in responsible production?",
    answer:
      "Environmentally friendly packaging that minimizes waste and environmental impact",
    options: [
      "Packaging made from non-renewable materials",
      "Packaging with no impact on the environment",
      "Environmentally friendly packaging that minimizes waste and environmental impact",
      "Packaging that primarily benefits manufacturers",
    ],
  },
  {
    numb: 43,
    question:
      "What is 'food waste,' and why is it a concern in responsible consumption?",
    answer:
      "Discarded food that contributes to resource and environmental problems",
    options: [
      "Food that is excessively expensive",
      "Food that never goes bad",
      "Discarded food that contributes to resource and environmental problems",
      "Food waste is not a real issue",
    ],
  },
  {
    numb: 44,
    question:
      "What is 'toxic waste,' and why is it a concern in responsible production?",
    answer:
      "Waste materials that can cause harm to living organisms and the environment",
    options: [
      "Waste materials that have no impact on health",
      "Toxic waste is not a real problem",
      "Waste materials that can be used for fertilizer",
      "Waste materials that can cause harm to living organisms and the environment",
    ],
  },
  {
    numb: 45,
    question:
      "How does 'sustainable farming' contribute to responsible production and consumption?",
    answer:
      "Practices that reduce environmental impact and promote healthy, ethical food production",
    options: [
      "Farming practices that maximize resource depletion",
      "Farming practices that focus solely on quantity",
      "Practices that reduce environmental impact and promote healthy, ethical food production",
      "Farming practices that have no impact on the environment",
    ],
  },
  {
    numb: 46,
    question:
      "What is 'carbon emissions' and why is it important to reduce them for responsible production?",
    answer:
      "Release of carbon dioxide into the atmosphere, contributing to climate change",
    options: [
      "Carbon emissions are unrelated to responsible production",
      "Releasing more carbon dioxide is beneficial for the environment",
      "Release of carbon dioxide into the atmosphere, contributing to climate change",
      "Carbon emissions are primarily from natural sources",
    ],
  },
  {
    numb: 47,
    question:
      "What is 'green energy' and how does it relate to responsible production?",
    answer:
      "Energy generated from renewable sources with minimal environmental impact",
    options: [
      "Energy that is colored green",
      "Energy that primarily comes from non-renewable sources",
      "Energy generated from renewable sources with minimal environmental impact",
      "Energy with no concern for the environment",
    ],
  },
  {
    numb: 48,
    question:
      "What is 'sustainable architecture' and how does it contribute to responsible production?",
    answer:
      "Designing buildings that reduce energy consumption and environmental impact",
    options: [
      "Designing buildings without any concern for the environment",
      "Buildings have no impact on resource use",
      "Designing buildings that increase energy consumption",
      "Designing buildings that reduce energy consumption and environmental impact",
    ],
  },
  {
    numb: 49,
    question:
      "What is 'environmental responsibility,' and why is it important for both consumption and production?",
    answer:
      "Acting in a way that minimizes harm to the environment and conserves resources",
    options: [
      "Being environmentally irresponsible is beneficial for the economy",
      "Environmental responsibility has no impact on resource conservation",
      "Acting in a way that minimizes harm to the environment and conserves resources",
      "Ignoring all environmental concerns",
    ],
  },
  {
    numb: 50,
    question:
      "What is 'water pollution,' and why is it a concern in responsible consumption and production?",
    answer: "Contaminants in water that can harm human health and ecosystems",
    options: [
      "Water pollution has no impact on the environment",
      "Contaminants in water are beneficial for aquatic life",
      "Contaminants in water that can harm human health and ecosystems",
      "Water pollution is not a real problem",
    ],
  },
];
