import React from "react";
import { shallow, mount, render } from "enzyme";
import ImageCollection from "./image-collection.component.jsx";

it("expect to render ImageCollection component", () => {
  const mockCategories = [
    {
      id: 1,
      name: "nature",
      images: [
        {
          id: 2,
          published_at: "2020-05-04",
          rating: 0,
          img: {
            url: "/uploads/photo_1567608480147_6c13e707a043_37540d0b90.jpeg",
          },
        },
      ],
    },
  ];
  expect(
    shallow(<ImageCollection categories={mockCategories} />)
  ).toMatchSnapshot();
});
