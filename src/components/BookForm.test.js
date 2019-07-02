import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import sinon from "sinon";

import BookForm from "./BookForm";



describe('<BookForm />', () => {
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
  title: "compressing Soft mint green"
}
];
    it("renders component when there is no book data", () => {
        const wrapper = render(
            <BookForm 
                addNewBook={() => {}} 
             />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it("renders component when there is valid book data", () => {
        const wrapper = render(
            <BookForm 
                addNewBook={() => {}} 
                title={books3[0].title} 
                author={books3[0].author} 
                genre={books3[0].genre} 
                price={books3[0].price} 
             />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it("renders component when there is partial book data", () => {
        const wrapper = render(
            <BookForm 
                addNewBook={() => {}} 
                title={books3[0].title} 
                author={books3[0].author} 
             />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it("Does call add book when there is valid book data", () => {
        const spy = sinon.spy();
        const wrapper = mount(
            <BookForm 
                addNewBook={() => {spy()}} 
                title={books3[0].title} 
                author={books3[0].author} 
                genre={books3[0].genre} 
                price={books3[0].price} 
             />
        );
            
        wrapper.find("button").first().simulate("click");
        expect(spy.calledOnce).toBe(true);
    });

    it("Does not call add book when there is a missing title", () => {
        const spy = sinon.spy();
        const wrapper = mount(
            <BookForm 
                addNewBook={() => {spy()}} 
                author={books3[0].author} 
                genre={books3[0].genre} 
                price={books3[0].price} 
             />
        );
            
        wrapper.find("button").first().simulate("click");
        expect(spy.calledOnce).toBe(false);
    });

    it("Does not call add book when there is a missing author", () => {
        // add test
    });

    it("Does not call add book when there is a missing genre", () => {
        // add test
    });

    it("Does not call add book when there is a missing price", () => {
        // add test
    });

    it("Does not call add book when there is an invalid price", () => {
        // add test eg: 10e
    });

    it("Does not call add book when there is a negative price", () => {
        // add test 
    });
});
  