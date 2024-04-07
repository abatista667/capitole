import React from 'react';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from "@capitole/App"

describe('Podcast List', () => {

  beforeEach(() =>{
    localStorage.clear();
  })

  it('Renders correctly podcastList', async () => {
    render(
      <App />
    );
    const spinner = await screen.findByRole("progressbar");
    expect(spinner).toBeInTheDocument();

    const list = await screen.findByRole("region", { name: "Podcast List"});
    expect(list).toBeInTheDocument();

    await waitFor(() => expect(spinner).not.toBeInTheDocument())

    expect(list.childElementCount).toBe(100)
  });
  it('filter correctly podcast by title and author', async () => {
    render(
      <App />
    );

    const list = await screen.findByRole("region", { name: "Podcast List"});
    expect(list.childElementCount).toBe(100)

    const TextField = await screen.findByRole("generic", { name: "Filter podcast"});
    const input = await within(TextField).findByRole("textbox");

    await userEvent.type(input, "The Joe Budden Podcast");

    expect(list.childElementCount).toBe(1);

    await userEvent.clear(input)
    expect(list.childElementCount).toBe(100);

    await userEvent.type(input, "Podcast");
    expect(list.childElementCount).toBe(26);

    await userEvent.clear(input);
    await userEvent.type(input, "HOT 97");
    expect(list.childElementCount).toBe(1);
  });
});