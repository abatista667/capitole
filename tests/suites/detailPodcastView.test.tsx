import React from 'react';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from "@capitole/App"

describe('Podcast List', () => {
  it('Renders correctly podcast detail correctly', async () => {
    render(
      <App />
    );

    const podcastButton = await screen.findByRole("button", { name: /The Joe Budden Podcast/i});

    await userEvent.click(podcastButton);

    expect(await screen.findByText("By The Joe Budden Network")).toBeInTheDocument();
    expect(await screen.findByText("Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.")).toBeInTheDocument();

    expect(await screen.findByText("Episodes: 21")).toBeInTheDocument();

    const episodeList = await screen.findByRole("generic", { name: /Episode list/i});

    expect(episodeList.childElementCount).toBe(21)
  });
});