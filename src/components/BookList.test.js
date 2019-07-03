import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import sinon from "sinon";
import BookList from "./BookList";

describe("<BookList />", () => {
    const books3 = [{
    author: "Ms. Remington Fahey",
    genre: "comedy",
    id: 1,
    price: 53.7,
    title: "Legacy Intelligent",
    _id: "5d19cd74a0c3e2c7f68ff800"
    },
    {
    author: "Isaac Steuber",
    genre: "thriller",
    id: 2,
    price: 20.99,
    title: "Incredible Incredible Plastic Computer",
    _id: "5d19cd74a0c3e2c7f68ff801"
    },
    {
    author: "Kennedy Howell",
    genre: "thriller",
    id: 3,
    price: 68.61,
    title: "compressing Soft mint green",
    _id: "5d19cd74a0c3e2c7f68ff802"
    }
    ];

    it("renders component when there are no books", () => {
    const books = [];
    const wrapper = render(
        <BookList books={books} handleEditClick={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
    });

    it("renders component when there are three books", () => {
    
    const wrapper = shallow(
        <BookList books={books3} handleEditClick={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
    });

    it("correctly formats the price to two decimal places", () => {
      const wrapper = mount(
        <BookList books={[books3[0]]} handleEditClick={() => {}} />
      );
      const text = wrapper.find(".price").text();
  
      expect(text).toEqual('$53.70');
    });

    it("contains the genre", () => {
      const wrapper = mount(
        <BookList books={[books3[0]]} handleEditClick={() => {}} />
      );
      const text = wrapper.find(".comedy").text();
      expect(text.includes('comedy')).toEqual(true);
    });

    it("contains the book title", () => {
      const wrapper = mount(
        <BookList books={[books3[0]]} handleEditClick={() => {}} />
      );
      const text = wrapper.find(".comedy").text();
      expect(text.includes('Legacy Intelligent')).toEqual(true);
    });


    it("calls the edit method on click", () => {
      const spy = sinon.spy();
      const wrapper = mount(
        <BookList books={[books3[0]]} handleEditClick={() => {spy()}} />
      );
      
      wrapper.find(".comedy").simulate("click");
      expect(spy.calledOnce).toBe(true);
    });
});