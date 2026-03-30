export interface Recipe {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tag: string;
  time: string;
  age: string;
  icon: string;
  ingredients: string[];
  steps: string[];
  notes: string[];
}

export const RECIPES: Recipe[] = [
  {
    slug: 'sweet-potato-mash',
    title: 'Sweet Potato Mash',
    description: 'Smooth, simple, and great for batch prep.',
    longDescription:
      'A soft and simple recipe that works well for make-ahead meal prep. This is a great base recipe to portion into small containers and serve throughout the week.',
    tag: 'Breakfast',
    time: '15 min',
    age: '12+ mo',
    icon: 'restaurant',
    ingredients: [
      '2 sweet potatoes',
      '1 tbsp olive oil',
      '2 to 4 tbsp warm water',
      'Optional pinch of cinnamon'
    ],
    steps: [
      'Peel and chop the sweet potatoes into small cubes.',
      'Steam or boil until very soft.',
      'Mash with olive oil and enough warm water to reach your preferred texture.',
      'Let cool slightly before serving or storing.'
    ],
    notes: [
      'Great for batch cooking.',
      'Can be stored in small prep containers.',
      'You can pair it with soft vegetables or shredded chicken later.'
    ]
  },
  {
    slug: 'banana-oat-bites',
    title: 'Banana Oat Bites',
    description: 'Soft little bites for a quick meal prep session.',
    longDescription:
      'These soft banana oat bites are easy to prep in a batch and work nicely for breakfast or a snack. They are simple, portable, and easy to portion.',
    tag: 'Snacks',
    time: '20 min',
    age: '12+ mo',
    icon: 'bakery_dining',
    ingredients: [
      '2 ripe bananas',
      '1 cup rolled oats',
      '1 egg',
      '1 tsp cinnamon'
    ],
    steps: [
      'Mash the bananas in a bowl.',
      'Mix in oats, egg, and cinnamon until combined.',
      'Scoop into small bite-sized portions on a lined tray.',
      'Bake until set and lightly golden.'
    ],
    notes: [
      'Great for freezer prep.',
      'Serve soft and cooled.',
      'Easy to make ahead for busy mornings.'
    ]
  },
  {
    slug: 'avocado-pasta',
    title: 'Avocado Pasta',
    description: 'Creamy pasta with a soft texture for easy eating.',
    longDescription:
      'A quick creamy pasta idea with a soft texture that feels fresh and simple. This recipe is good for a fast lunch option and comes together with very little prep.',
    tag: 'Lunch',
    time: '15 min',
    age: '12+ mo',
    icon: 'lunch_dining',
    ingredients: [
      '1 ripe avocado',
      '1 cup cooked pasta',
      '1 tbsp plain yogurt',
      'Small squeeze of lemon'
    ],
    steps: [
      'Cook the pasta until soft.',
      'Mash the avocado until smooth.',
      'Stir in yogurt and a small squeeze of lemon.',
      'Mix the sauce into the warm pasta and serve.'
    ],
    notes: [
      'Best served fresh.',
      'You can thin the sauce slightly if needed.',
      'Works well with small pasta shapes.'
    ]
  },
  {
    slug: 'veggie-chicken-blend',
    title: 'Veggie Chicken Blend',
    description: 'A batch-cook recipe that works well for freezer prep.',
    longDescription:
      'This is a meal prep friendly recipe with a hearty feel. It is great for making ahead and freezing in portions for later use.',
    tag: 'Dinner',
    time: '25 min',
    age: '12+ mo',
    icon: 'dinner_dining',
    ingredients: [
      '1 cooked chicken breast',
      '1 cup cooked mixed vegetables',
      '1 small potato',
      '2 tbsp low-sodium broth'
    ],
    steps: [
      'Cook and soften the vegetables and potato.',
      'Shred or finely chop the chicken.',
      'Blend or mash everything together to the texture you want.',
      'Cool and portion into prep containers.'
    ],
    notes: [
      'Excellent for freezer trays.',
      'Adjust texture to your child’s comfort level.',
      'Reheat gently before serving.'
    ]
  },
  {
    slug: 'apple-cinnamon-bowl',
    title: 'Apple Cinnamon Bowl',
    description: 'Warm and cozy with a soft spoon-friendly texture.',
    longDescription:
      'A warm recipe idea that feels cozy and simple. It is easy to prep and works nicely for breakfast or a soft snack option.',
    tag: 'Breakfast',
    time: '10 min',
    age: '12+ mo',
    icon: 'icecream',
    ingredients: [
      '1 apple, peeled and chopped',
      '1/2 tsp cinnamon',
      '2 tbsp oats',
      'Water as needed'
    ],
    steps: [
      'Cook the chopped apple with a splash of water until soft.',
      'Stir in oats and cinnamon.',
      'Cook until the mixture is soft and thickened.',
      'Cool slightly before serving.'
    ],
    notes: [
      'Nice warm breakfast option.',
      'Easy to make in a small batch.',
      'Can be mashed smoother if needed.'
    ]
  },
  {
    slug: 'pea-potato-mix',
    title: 'Pea Potato Mix',
    description: 'Mild flavor and easy to portion into prep containers.',
    longDescription:
      'A mild and simple prep recipe that works well for make-ahead meals. The texture is easy to adjust and it stores well in portions.',
    tag: 'Freezer',
    time: '18 min',
    age: '12+ mo',
    icon: 'eco',
    ingredients: [
      '1 potato',
      '1 cup peas',
      '1 tsp olive oil',
      'Warm water as needed'
    ],
    steps: [
      'Cook the potato until soft.',
      'Steam the peas until tender.',
      'Mash or blend with olive oil and warm water.',
      'Portion and store once cooled.'
    ],
    notes: [
      'Good make-ahead option.',
      'Works well in small freezer containers.',
      'Can be served alone or as a side.'
    ]
  }
];