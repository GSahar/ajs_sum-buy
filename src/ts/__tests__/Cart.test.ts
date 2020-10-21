import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});


test('card add item', () => {
  const cart = new Cart();
  cart.add(new Movie(1001, 'Мстители',250 ,'MARVEL', 'IMAX', 2012, 'USA', 'Avengers Assemble!',['фантастика','боевики','фэнтези','приключения'],137));

  expect(cart.items.length).toBe(1);
});

test('card sum item', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'Мстители',250 ,'MARVEL', 'IMAX', 2012, 'USA', 'Avengers Assemble!',['фантастика','боевики','фэнтези','приключения'],137));

  expect(cart.sumBuy(cart.items)).toBe(3150);
});

test('card sum item with discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'Мстители',250 ,'MARVEL', 'IMAX', 2012, 'USA', 'Avengers Assemble!',['фантастика','боевики','фэнтези','приключения'],137));

  expect(cart.sumBuy(cart.items,90)).toBe(315);
});

test('card sum item with invalid discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'Мстители',250 ,'MARVEL', 'IMAX', 2012, 'USA', 'Avengers Assemble!',['фантастика','боевики','фэнтези','приключения'],137));

  expect(cart.sumBuy(cart.items,1000)).toBe(0);
});

test('card delete item', () => {
  const cart = new Cart();
  cart.add(new Movie(1001, 'Мстители',250 ,'MARVEL', 'IMAX', 2012, 'USA', 'Avengers Assemble!',['фантастика','боевики','фэнтези','приключения'],137));
  cart.add(new Movie(1008, 'Мстители',250 ,'MARVEL', 'IMAX', 2012, 'USA', 'Avengers Assemble!',['фантастика','боевики','фэнтези','приключения'],137));
  cart.delete(1008);
  expect(cart.items.length).toBe(1);
});