import Cart from './service/Cart';
import Book from './domain/Book';
import Movie from './domain/Movie';
import MusicAlbum from './domain/MusicAlbum';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1010, 'Мстители',250 ,'MARVEL', 'IMAX', 2012, 'USA', 'Avengers Assemble!',['фантастика','боевики','фэнтези','приключения'],137));

console.log(cart.sumBuy(cart.items));
//скидка в процентах
console.log(cart.sumBuy(cart.items,90));

console.log(cart.items);

cart.delete(1001);
console.log(cart.items);

