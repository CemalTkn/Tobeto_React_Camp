import React from "react";
import { Dropdown, Label, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CartSummary() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <Menu.Item>
        <Dropdown pointing="top" inline text="Sepetiniz">
          <Dropdown.Menu>
            {cartItems.map((cartItem) => (
              <Dropdown.Item key={cartItem.product.id}>
                {cartItem.product.productName}
                <Label>
                  {cartItem.quantity}
                </Label>
              </Dropdown.Item>
            ))}
            <Dropdown.Divider />
            <Dropdown.Item as={NavLink} to="/cart">
              Sepete Git
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
