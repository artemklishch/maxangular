import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListAtions from "./shopping-list.actions";

export interface ShoppingListInitialState {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

export interface AppState {
  shoppingList: ShoppingListInitialState;
}

const initialState: ShoppingListInitialState = {
  ingredients: [new Ingredient("Apples", 5), new Ingredient("Tomatoes", 10)],
  editedIngredient: null,
  editedIngredientIndex: -1,
};

export function shoppingListReducer(
  state: ShoppingListInitialState = initialState,
  action: ShoppingListAtions.ShoppingListActions
) {
  switch (action.type) {
    case ShoppingListAtions.ADD_INGREDIENT: {
      return { ...state, ingredients: [...state.ingredients, action.payload] };
    }
    case ShoppingListAtions.ADD_INGREDIENTS: {
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload],
      };
    }
    case ShoppingListAtions.UPDATE_INGREDIENT: {
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updatedIngredient = { ...ingredient, ...action.payload };
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[state.editedIngredientIndex] = updatedIngredient;
      return {
        ...state,
        ingredients: updatedIngredients,
        editedIngredient: null,
        editedIngredientIndex: -1,
      };
    }
    case ShoppingListAtions.DELETE_INGREDIENT: {
      const updatedIngredients = state.ingredients.filter(
        (_, index) => index !== state.editedIngredientIndex
      );
      return {
        ...state,
        ingredients: updatedIngredients,
        editedIngredient: null,
        editedIngredientIndex: -1,
      };
    }
    case ShoppingListAtions.START_EDIT: {
      return {
        ...state,
        editedIngredient: { ...state.ingredients[action.payload] },
        editedIngredientIndex: action.payload,
      };
    }
    case ShoppingListAtions.STOP_EDIT: {
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1,
      };
    }
    default: {
      return state;
    }
  }
}
