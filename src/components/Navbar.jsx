import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  Dropdown,
  DropdownItem,
  DropdownDivider
} from "flowbite-react";
import { NavLink } from "react-router-dom";

export default function MyNavbar() {
  const activeClass = ({ isActive }) => (isActive ? "text-primary mb-4 sm:mb-0 sm:text-xs" : "mb-4 sm:mb-0 sm:text-xs hover:text-primary");
  return (
    <nav className="bg-white shadow-sm py-0 sm:py-2 sticky top-0 z-50 transition-all duration-300">
      <Navbar fluid rounded className="container mx-auto max-w-7xl px-4 md:px-15 lg:px-10">
      <NavbarBrand href="/">
        <span className="self-center whitespace-nowrap text-xl text-primary font-bold uppercase">
          VegesFood
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="uppercase">
        <NavLink as={NavLink} to="/" className={activeClass}>
          Home
        </NavLink>
        <Dropdown
          inline
          arrowIcon={false}
          label={
            <span className={`${activeClass} flex items-center gap-1 text-md sm:text-xs hover:text-primary uppercase`}>
              Shop <i className="bi bi-chevron-down text-[10px]" />
            </span>
          }
        >

          <DropdownItem as={NavLink} to="/shop" >Shop</DropdownItem>
          <DropdownDivider />
          <DropdownItem as={NavLink} to="/wishlist" className={activeClass}>Wishlist</DropdownItem>
          <DropdownItem as={NavLink} to="/single" className={activeClass}>Single Product</DropdownItem>
          <DropdownItem as={NavLink} to="/cart" className={activeClass}>Cart</DropdownItem>
          <DropdownItem as={NavLink} to="/checkout" className={activeClass}>Checkout</DropdownItem>

        </Dropdown>
        <NavLink as={NavLink} to="/about"  className={activeClass}>About</NavLink>
        <NavLink as={NavLink} to="/blogs" className={activeClass}>Blog</NavLink>
        <NavLink as={NavLink} to="/contact" className={activeClass}>Contact</NavLink>
        <NavLink as={NavLink} to="/cart" className={activeClass}><i className="bi bi-cart-fill"/> [ 0 ]</NavLink>
      </NavbarCollapse>
    </Navbar>
    </nav>
  );
}
