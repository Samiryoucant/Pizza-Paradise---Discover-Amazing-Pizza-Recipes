// script.js

// Sample pizza recipes data with improved placeholder images
const pizzaRecipes = [
    {
        id: 1,
        title: "Classic Margherita",
        image: "https://placehold.co/600x400/4CAF50/FFFFFF?text=Classic+Margherita+Pizza",
        description: "The iconic Italian pizza with fresh tomatoes, mozzarella, and basil.",
        prepTime: "20 mins",
        cookTime: "15 mins",
        servings: "4 people",
        ingredients: [
            "Pizza dough (homemade or store-bought)",
            "3 ripe tomatoes, thinly sliced",
            "8 oz fresh mozzarella cheese, sliced",
            "Fresh basil leaves (about 10-12 leaves)",
            "2 tbsp extra virgin olive oil",
            "Salt and freshly ground black pepper to taste",
            "1 garlic clove, minced (optional)"
        ],
        instructions: [
            "Preheat your oven to 475°F (245°C) with a pizza stone or baking sheet inside if available.",
            "Roll out your pizza dough on a lightly floured surface to your desired thickness (about 12 inches in diameter).",
            "Carefully transfer the dough to a piece of parchment paper or a lightly floured pizza peel.",
            "Arrange the tomato slices evenly over the dough, leaving a 1-inch border around the edges.",
            "Place the mozzarella slices on top of the tomatoes, distributing them evenly.",
            "Drizzle the olive oil over the entire pizza, and sprinkle with salt, pepper, and minced garlic if using.",
            "Carefully transfer the pizza (with the parchment paper if using) to the preheated oven.",
            "Bake for 12-15 minutes, or until the crust is golden brown and the cheese is melted and bubbly.",
            "Remove from oven and immediately top with fresh basil leaves.",
            "Let cool for 2-3 minutes before slicing and serving."
        ]
    },
    {
        id: 2,
        title: "Pepperoni Delight",
        image: "https://placehold.co/600x400/D32F2F/FFFFFF?text=Pepperoni+Delight+Pizza",
        description: "Loaded with spicy pepperoni slices and melted cheese - a crowd favorite!",
        prepTime: "15 mins",
        cookTime: "12 mins",
        servings: "4 people",
        ingredients: [
            "Pizza dough (homemade or store-bought)",
            "1 cup pizza sauce (homemade or store-bought)",
            "2 cups shredded mozzarella cheese",
            "50-60 slices pepperoni (about 4 oz)",
            "1 tsp dried oregano",
            "1/2 tsp red pepper flakes (optional for heat)",
            "1 tbsp olive oil",
            "1/4 cup grated Parmesan cheese (optional)"
        ],
        instructions: [
            "Preheat your oven to 475°F (245°C) with a pizza stone or baking sheet inside.",
            "Roll out the pizza dough on a lightly floured surface to about 12-14 inches in diameter.",
            "Transfer the dough to a piece of parchment paper or lightly floured pizza peel.",
            "Spread the pizza sauce evenly over the dough, leaving a 1-inch border around the edges.",
            "Sprinkle about 1/3 of the mozzarella cheese over the sauce.",
            "Arrange the pepperoni slices in overlapping circles, covering the entire pizza.",
            "Sprinkle the remaining mozzarella cheese over the pepperoni.",
            "Add dried oregano and red pepper flakes (if using) evenly over the top.",
            "Drizzle with olive oil and sprinkle with Parmesan cheese if desired.",
            "Transfer the pizza to the preheated oven and bake for 10-12 minutes until the crust is golden and cheese is bubbly.",
            "Remove from oven and let cool for 2 minutes before slicing."
        ]
    },
    {
        id: 3,
        title: "Vegetarian Supreme",
        image: "https://placehold.co/600x400/64DD17/FFFFFF?text=Vegetarian+Supreme+Pizza",
        description: "Packed with colorful vegetables and three types of cheese for the ultimate veggie experience.",
        prepTime: "25 mins",
        cookTime: "18 mins",
        servings: "4 people",
        ingredients: [
            "Pizza dough (homemade or store-bought)",
            "3/4 cup pizza sauce",
            "1 cup shredded mozzarella cheese",
            "1/2 cup crumbled feta cheese",
            "1/4 cup grated Parmesan cheese",
            "1 bell pepper (any color), thinly sliced",
            "1 small red onion, thinly sliced",
            "1 cup mushrooms, sliced",
            "1/2 cup black olives, sliced",
            "1/2 cup cherry tomatoes, halved",
            "2 tbsp olive oil",
            "1 tsp dried Italian herbs"
        ],
        instructions: [
            "Preheat your oven to 450°F (230°C) with a pizza stone or baking sheet inside.",
            "Roll out the pizza dough on a lightly floured surface to your desired thickness.",
            "Brush the outer edge of the dough with 1 tbsp of olive oil for a golden crust.",
            "Spread the pizza sauce evenly over the dough, leaving a 1-inch border.",
            "Sprinkle the mozzarella cheese evenly over the sauce.",
            "Arrange the sliced bell peppers, red onions, mushrooms, black olives, and cherry tomatoes in an attractive pattern over the cheese.",
            "Sprinkle the crumbled feta and grated Parmesan over the vegetables.",
            "Drizzle the remaining olive oil over the top and sprinkle with dried Italian herbs.",
            "Carefully transfer the pizza to the preheated oven and bake for 15-18 minutes until the crust is golden brown and vegetables are tender.",
            "Remove from oven and let rest for 5 minutes before slicing and serving."
        ]
    },
    {
        id: 4,
        title: "BBQ Chicken",
        image: "https://placehold.co/600x400/EF6C00/FFFFFF?text=BBQ+Chicken+Pizza",
        description: "Sweet and smoky BBQ sauce with tender chicken and red onions - a perfect fusion pizza.",
        prepTime: "20 mins",
        cookTime: "15 mins",
        servings: "4 people",
        ingredients: [
            "Pizza dough (homemade or store-bought)",
            "3/4 cup BBQ sauce (plus extra for drizzling)",
            "2 cups cooked chicken breast, shredded or diced",
            "1 cup red onion, thinly sliced",
            "1 1/2 cups shredded mozzarella cheese",
            "1/4 cup fresh cilantro, chopped",
            "1 tbsp olive oil",
            "1/2 cup corn kernels (optional)",
            "1/4 cup crumbled bacon (optional)"
        ],
        instructions: [
            "Preheat your oven to 450°F (230°C) with a pizza stone or baking sheet inside.",
            "Roll out the pizza dough on a lightly floured surface to about 12 inches in diameter.",
            "Brush the outer edge of the dough with olive oil for a golden, crispy crust.",
            "Spread BBQ sauce evenly over the dough, leaving a 1-inch border around the edges.",
            "Sprinkle about half of the mozzarella cheese over the BBQ sauce.",
            "Evenly distribute the cooked chicken and red onion slices over the cheese.",
            "Sprinkle the remaining mozzarella cheese over the top.",
            "If using, add corn kernels and crumbled bacon.",
            "Carefully transfer the pizza to the preheated oven and bake for 12-15 minutes until the crust is golden and cheese is melted and bubbly.",
            "Remove from oven and sprinkle with fresh cilantro.",
            "Drizzle with additional BBQ sauce if desired, and let cool for 2 minutes before slicing."
        ]
    },
    {
        id: 5,
        title: "Hawaiian",
        image: "https://placehold.co/600x400/FF9800/FFFFFF?text=Hawaiian+Pizza",
        description: "Sweet pineapple and savory ham create the perfect balance of flavors.",
        prepTime: "15 mins",
        cookTime: "12 mins",
        servings: "4 people",
        ingredients: [
            "Pizza dough (homemade or store-bought)",
            "1/2 cup pizza sauce",
            "1 1/2 cups shredded mozzarella cheese",
            "1 cup cooked ham, diced",
            "1 cup pineapple chunks (fresh or canned, drained)",
            "1/4 cup cooked bacon bits (optional)",
            "1 tbsp olive oil",
            "1/4 cup chopped green onions (for garnish)",
            "1 tsp dried oregano"
        ],
        instructions: [
            "Preheat your oven to 475°F (245°C) with a pizza stone or baking sheet inside.",
            "Roll out the pizza dough on a lightly floured surface to your desired thickness.",
            "Brush the outer edge of the dough with olive oil for a golden crust.",
            "Spread pizza sauce evenly over the dough, leaving a 1-inch border.",
            "Sprinkle about half of the mozzarella cheese over the sauce.",
            "Evenly distribute the diced ham and pineapple chunks over the cheese.",
            "Sprinkle the remaining mozzarella cheese over the top.",
            "If using, sprinkle bacon bits and dried oregano over the pizza.",
            "Carefully transfer the pizza to the preheated oven and bake for 10-12 minutes until the crust is golden and cheese is bubbly.",
            "Remove from oven and sprinkle with chopped green onions.",
            "Let cool for 2 minutes before slicing and serving."
        ]
    },
    {
        id: 6,
        title: "Four Cheese",
        image: "https://placehold.co/600x400/673AB7/FFFFFF?text=Four+Cheese+Pizza",
        description: "A cheese lover's dream with four different Italian cheeses and fresh rosemary.",
        prepTime: "15 mins",
        cookTime: "15 mins",
        servings: "4 people",
        ingredients: [
            "Pizza dough (homemade or store-bought)",
            "1/2 cup pizza sauce (optional, for a white pizza omit this)",
            "1 cup shredded mozzarella cheese",
            "1/2 cup crumbled gorgonzola cheese",
            "1/2 cup shredded fontina cheese",
            "1/4 cup grated Parmesan cheese",
            "2-3 fresh rosemary sprigs",
            "2 tbsp olive oil",
            "1 garlic clove, minced (optional)",
            "Freshly ground black pepper to taste"
        ],
        instructions: [
            "Preheat your oven to 475°F (245°C) with a pizza stone or baking sheet inside.",
            "Roll out the pizza dough on a lightly floured surface to your desired thickness.",
            "If making a traditional four cheese pizza, brush the entire surface with olive oil and sprinkle with minced garlic (if using). If making a red sauce version, spread pizza sauce evenly over the dough, leaving a 1-inch border.",
            "In a bowl, combine the mozzarella, gorgonzola, fontina, and Parmesan cheeses.",
            "Sprinkle the cheese mixture evenly over the dough (or sauce).",
            "Grind black pepper over the top to taste.",
            "Place rosemary sprigs on top of the cheese (they will infuse flavor as the pizza bakes).",
            "Carefully transfer the pizza to the preheated oven and bake for 12-15 minutes until the crust is golden and cheese is melted and bubbly.",
            "Remove from oven and let rest for 5 minutes before slicing (this allows the cheese to set slightly).",
            "Remove rosemary sprigs before serving, or leave them as a decorative element."
        ]
    }
];

// DOM Elements
const recipesGrid = document.getElementById('recipes-grid');
const recipeModal = document.getElementById('recipe-modal');
const closeModal = document.querySelector('.close');
const modalTitle = document.getElementById('modal-title');
const prepTimeValue = document.getElementById('prep-time-value');
const cookTimeValue = document.getElementById('cook-time-value');
const servingsValue = document.getElementById('servings-value');
const modalImage = document.getElementById('modal-image');
const modalIngredients = document.getElementById('modal-ingredients');
const modalInstructions = document.getElementById('modal-instructions');

// Load recipes
function loadRecipes() {
    recipesGrid.innerHTML = '';
    pizzaRecipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
            <div class="recipe-info">
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-desc">${recipe.description}</p>
                <div class="recipe-meta">
                    <span><i class="far fa-clock"></i> ${recipe.prepTime}</span>
                    <span><i class="fas fa-fire"></i> ${recipe.cookTime}</span>
                    <span><i class="fas fa-utensils"></i> ${recipe.servings}</span>
                </div>
                <button class="view-btn" data-id="${recipe.id}">View Recipe</button>
            </div>
        `;
        recipesGrid.appendChild(recipeCard);
    });

    // Add event listeners to view buttons
    document.querySelectorAll('.view-btn').forEach(button => {
        button.addEventListener('click', () => {
            const recipeId = parseInt(button.getAttribute('data-id'));
            showRecipeModal(recipeId);
        });
    });
}

// Show recipe modal
function showRecipeModal(recipeId) {
    const recipe = pizzaRecipes.find(r => r.id === recipeId);
    if (!recipe) return;

    modalTitle.textContent = recipe.title;
    prepTimeValue.textContent = recipe.prepTime;
    cookTimeValue.textContent = recipe.cookTime;
    servingsValue.textContent = recipe.servings;
    modalImage.src = recipe.image;
    modalImage.alt = recipe.title;

    // Clear previous ingredients
    modalIngredients.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        modalIngredients.appendChild(li);
    });

    // Clear previous instructions
    modalInstructions.innerHTML = '';
    recipe.instructions.forEach((instruction, index) => {
        const li = document.createElement('li');
        li.textContent = instruction;
        modalInstructions.appendChild(li);
    });

    recipeModal.style.display = 'block';
}

// Close modal when clicking the X
closeModal.addEventListener('click', () => {
    recipeModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === recipeModal) {
        recipeModal.style.display = 'none';
    }
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Scroll animations
function handleScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('appear');
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadRecipes();
    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations(); // Check on load
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
