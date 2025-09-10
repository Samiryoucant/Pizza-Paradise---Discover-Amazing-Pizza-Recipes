// script.js

// Sample pizza recipes data
const pizzaRecipes = [
    {
        id: 1,
        title: "Classic Margherita",
        image: "https://placehold.co/600x400/FF6B35/FFFFFF?text=Margherita+Pizza",
        description: "The iconic Italian pizza with fresh tomatoes, mozzarella, and basil.",
        prepTime: "20 mins",
        cookTime: "15 mins",
        servings: "4 people",
        ingredients: [
            "Pizza dough",
            "3 ripe tomatoes, sliced",
            "8 oz fresh mozzarella",
            "Fresh basil leaves",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Preheat oven to 475°F (245°C).",
            "Roll out pizza dough on a floured surface.",
            "Spread tomato slices evenly over the dough.",
            "Tear mozzarella into pieces and distribute over tomatoes.",
            "Drizzle with olive oil and season with salt and pepper.",
            "Bake for 12-15 minutes until crust is golden.",
            "Top with fresh basil leaves before serving."
        ]
    },
    {
        id: 2,
        title: "Pepperoni Delight",
        image: "https://placehold.co/600x400/D32F2F/FFFFFF?text=Pepperoni+Pizza",
        description: "Loaded with spicy pepperoni slices and melted cheese.",
        prepTime: "15 mins",
        cookTime: "12 mins",
        servings: "4 people",
        ingredients: [
            "Pizza dough",
            "1 cup tomato sauce",
            "2 cups shredded mozzarella",
            "50 slices pepperoni",
            "1 tsp dried oregano",
            "1/2 tsp red pepper flakes (optional)"
        ],
        instructions: [
            "Preheat oven to 475°F (245°C).",
            "Roll out pizza dough and place on baking sheet.",
            "Spread tomato sauce evenly over the dough.",
            "Sprinkle mozzarella cheese over the sauce.",
            "Arrange pepperoni slices in overlapping circles.",
            "Sprinkle with oregano and red pepper flakes.",
            "Bake for 10-12 minutes until cheese is bubbly.",
            "Let cool for 2 minutes before slicing."
        ]
    },
    {
        id: 3,
        title: "Vegetarian Supreme",
        image: "https://placehold.co/600x400/4CAF50/FFFFFF?text=Vegetarian+Pizza",
        description: "Packed with colorful vegetables and three types of cheese.",
        prepTime: "25 mins",
        cookTime: "18 mins",
        servings: "4 people",
        ingredients: [
            "Pizza dough",
            "3/4 cup tomato sauce",
            "1 cup shredded mozzarella",
            "1/2 cup crumbled feta cheese",
            "1/4 cup grated parmesan",
            "1 bell pepper, sliced",
            "1 small red onion, sliced",
            "1 cup mushrooms, sliced",
            "1/2 cup black olives",
            "2 tbsp olive oil"
        ],
        instructions: [
            "Preheat oven to 450°F (230°C).",
            "Roll out pizza dough and brush edge with olive oil.",
            "Spread tomato sauce evenly over the dough.",
            "Sprinkle mozzarella cheese over the sauce.",
            "Arrange vegetables in an attractive pattern.",
            "Sprinkle feta and parmesan over the top.",
            "Bake for 15-18 minutes until crust is golden.",
            "Let rest for 5 minutes before serving."
        ]
    },
    {
        id: 4,
        title: "BBQ Chicken",
        image: "https://placehold.co/600x400/F57C00/FFFFFF?text=BBQ+Chicken+Pizza",
        description: "Sweet and smoky BBQ sauce with tender chicken and red onions.",
        prepTime: "20 mins",
        cookTime: "15 mins",
        servings: "4 people",
        ingredients: [
            "Pizza dough",
            "3/4 cup BBQ sauce",
            "2 cups cooked chicken, shredded",
            "1 cup red onion, thinly sliced",
            "1 1/2 cups mozzarella cheese",
            "1/4 cup fresh cilantro",
            "1 tbsp olive oil"
        ],
        instructions: [
            "Preheat oven to 450°F (230°C).",
            "Roll out pizza dough and brush with olive oil.",
            "Spread BBQ sauce evenly over the dough.",
            "Sprinkle half the mozzarella over the sauce.",
            "Distribute chicken and red onions evenly.",
            "Top with remaining mozzarella.",
            "Bake for 12-15 minutes until crust is golden.",
            "Garnish with fresh cilantro before serving."
        ]
    },
    {
        id: 5,
        title: "Hawaiian",
        image: "https://placehold.co/600x400/FF9800/FFFFFF?text=Hawaiian+Pizza",
        description: "Sweet pineapple and savory ham create the perfect balance.",
        prepTime: "15 mins",
        cookTime: "12 mins",
        servings: "4 people",
        ingredients: [
            "Pizza dough",
            "1/2 cup tomato sauce",
            "1 1/2 cups mozzarella cheese",
            "1 cup cooked ham, diced",
            "1 cup pineapple chunks",
            "1/4 cup bacon bits (optional)",
            "1 tbsp olive oil"
        ],
        instructions: [
            "Preheat oven to 475°F (245°C).",
            "Roll out pizza dough and brush edge with olive oil.",
            "Spread tomato sauce evenly over the dough.",
            "Sprinkle cheese over the sauce.",
            "Distribute ham and pineapple evenly.",
            "Sprinkle bacon bits if using.",
            "Bake for 10-12 minutes until cheese is bubbly.",
            "Let cool for 2 minutes before slicing."
        ]
    },
    {
        id: 6,
        title: "Four Cheese",
        image: "https://placehold.co/600x400/795548/FFFFFF?text=Four+Cheese+Pizza",
        description: "A cheese lover's dream with four different Italian cheeses.",
        prepTime: "15 mins",
        cookTime: "15 mins",
        servings: "4 people",
        ingredients: [
            "Pizza dough",
            "1/2 cup tomato sauce (optional)",
            "1 cup mozzarella cheese",
            "1/2 cup gorgonzola cheese",
            "1/2 cup fontina cheese",
            "1/4 cup parmesan cheese",
            "Fresh rosemary (optional)",
            "1 tbsp olive oil"
        ],
        instructions: [
            "Preheat oven to 475°F (245°C).",
            "Roll out pizza dough and brush with olive oil.",
            "If using, spread a thin layer of tomato sauce.",
            "Combine all cheeses in a bowl.",
            "Sprinkle cheese mixture evenly over the dough.",
            "Add rosemary sprigs if desired.",
            "Bake for 12-15 minutes until crust is golden.",
            "Let rest for 5 minutes before serving."
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
    recipe.instructions.forEach(instruction => {
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
