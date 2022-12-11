import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 's4c10oo0',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
  token: "skNryl4shGan7BDj5oLInsHvsg9EWf1wN1flwhZMN1xEZ5pYgrk4fQPJeVYEhN49ejdwTsY3g6TDLS8H2vT6AXxQQfkhZ8WsXXORp0QPyKV18Wc5Pf37ywilPD6VQ1RZY3t5Qh07oI9k3MEythESX002yipUtunvrJg1wzHZqDFtGAihvplL",
  ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
