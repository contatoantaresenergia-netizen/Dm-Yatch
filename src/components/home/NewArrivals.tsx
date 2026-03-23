import React, { useRef } from 'react';
import ProductCard from '../ProductCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const newArrivals = [
  {
    id: '5',
    name: 'Musto MPX Offshore Jacket 2.0',
    price: 595.00,
    image: 'https://images.unsplash.com/photo-1544473403-43904d4b67bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    brand: 'Musto',
    rating: 5,
    isNew: true
  },
  {
    id: '6',
    name: 'Garmin Quatix 7 Marine Smartwatch',
    price: 649.00,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    brand: 'Garmin',
    rating: 5,
    isNew: true
  },
  {
    id: '7',
    name: 'Lewmar Delta Anchor 10kg',
    price: 185.00,
    image: 'https://images.unsplash.com/photo-1599240813974-61041f487160?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    brand: 'Lewmar',
    rating: 4,
    isNew: true
  },
  {
    id: '8',
    name: 'Helly Hansen Salt Coastal Jacket',
    price: 280.00,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    brand: 'Helly Hansen',
    rating: 4,
    isNew: true
  }
];

export default function NewArrivals() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-3 block">Acabados de Chegar</span>
            <h2 className="text-4xl font-bold text-primary uppercase tracking-tight">Novidades</h2>
            <div className="w-20 h-1.5 bg-accent mt-4"></div>
          </div>
          <Link to="/new-arrivals" className="text-primary font-bold flex items-center gap-2 hover:text-accent transition-colors group">
            Explorar Novo Equipamento <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map((product) => (
            <ProductCard 
              key={product.id} 
              id={product.id} 
              name={product.name}
              price={product.price}
              image={product.image}
              brand={product.brand}
              rating={product.rating}
              isNew={product.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
