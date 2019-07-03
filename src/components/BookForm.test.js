import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import sinon from "sinon";

import BookForm from "./BookForm";

const books3 = [{
    author: "Ms. Remington Fahey",
    genre: "comedy",
    id: 1,
    price: '53.7',
    title: "Legacy Intelligent",
    _id: "5d19cd74a0c3e2c7f68ff800"
    },
    {
    author: "Isaac Steuber",
    genre: "thriller",
    id: 2,
    price: '20.99',
    title: "Incredible Incredible Plastic Computer",
    _id: "5d19cd74a0c3e2c7f68ff801"
    },
    {
    author: "Kennedy Howell",
    genre: "thriller",
    id: 3,
    price: '68.61',
    title: "compressing Soft mint green"
    }
];

describe('<BookForm /> rendering', () => {
    it("renders component when there is no book data", () => {
        const wrapper = render(
            <BookForm 
                bookHandler={() => {}} 
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it("renders component when there is valid book data", () => {
        const wrapper = render(
            <BookForm 
                bookHandler={() => {}} 
                title={books3[1].title} 
                author={books3[1].author} 
                genre={books3[1].genre} 
                price={books3[1].price} 
                id={books3[1].id} 
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it("renders component when there is partial book data", () => {
        const wrapper = render(
            <BookForm 
                bookHandler={() => {}} 
                title={books3[1].title} 
                author={books3[1].author} 
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});

describe('<BookForm /> validation', () => {
  it("Does call add book when there is valid book data", () => {
      const spy = sinon.spy();
      const wrapper = mount(
          <BookForm 
              bookHandler={() => {spy()}} 
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
            bookHandler={() => {spy()}} 
            author={books3[0].author} 
            genre={books3[0].genre} 
            price={books3[0].price} 
          />
    );
        
    wrapper.find("button").first().simulate("click");
    expect(spy.calledOnce).toBe(false);
  });

  it("Does not call add book when there is a missing author", () => {
    const spy = sinon.spy();
    const wrapper = mount(
        <BookForm 
            bookHandler={() => {spy()}} 
            title={books3[0].title} 
            genre={books3[0].genre} 
            price={books3[0].price} 
          />
    );
        
    wrapper.find("button").first().simulate("click");
    expect(spy.calledOnce).toBe(false);
  });

  it("Does not call add book when there is a missing genre", () => {
    const spy = sinon.spy();
    const wrapper = mount(
        <BookForm 
            bookHandler={() => {spy()}} 
            title={books3[0].title} 
            author={books3[0].author} 
            price={books3[0].price} 
          />
    );
        
    wrapper.find("button").first().simulate("click");
    expect(spy.calledOnce).toBe(false);
  });

  it("Does not call add book when there is a missing price", () => {
    const spy = sinon.spy();
    const wrapper = mount(
        <BookForm 
            bookHandler={() => {spy()}} 
            title={books3[0].title} 
            author={books3[0].author} 
            genre={books3[0].genre} 
          />
    );
        
    wrapper.find("button").first().simulate("click");
    expect(spy.calledOnce).toBe(false);
  });

  it("Does not call add book when there is an invalid price", () => {
    const spy = sinon.spy();
    const wrapper = mount(
        <BookForm 
            bookHandler={() => {spy()}} 
            title={books3[0].title} 
            author={books3[0].author} 
            genre={books3[0].genre} 
            price={'10e'} 
          />
    );
        
    wrapper.find("button").first().simulate("click");
    expect(spy.calledOnce).toBe(false);
  });

  it("Does not call add book when there is a negative price", () => {
    const spy = sinon.spy();
    const wrapper = mount(
        <BookForm 
            bookHandler={() => {spy()}} 
            title={books3[0].title} 
            author={books3[0].author} 
            genre={books3[0].genre} 
            price={'-10.00'} 
          />
    );
        
    wrapper.find("button").first().simulate("click");
    expect(spy.calledOnce).toBe(false);
  });
});