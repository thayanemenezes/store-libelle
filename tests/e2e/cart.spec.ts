import { test, expect } from '@playwright/test';

test('should add item to the shopping cart, update the icon, and navigate to the cart page', async ({ page }) => {
  await page.goto('/');

  const cartItemCount = page.locator('[data-testid="cart-item-count"]');
  
  await expect(cartItemCount).toHaveText('0');
  
  await page.click('text=Adicionar');

  await expect(cartItemCount).toHaveText('1');

  await cartItemCount.click();

  await expect(page).toHaveURL('/checkout/carrinho');

  await expect(page.locator('text=Tênis Plataforma Ramarim')).toBeVisible(); 
});
