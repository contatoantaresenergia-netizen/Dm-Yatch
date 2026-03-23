import React, { useRef } from 'react';
import ProductCard from '../ProductCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const featuredProducts = [
  {
    id: '1',
    name: 'Harken 40.2 Radial Self-Tailing Winch',
    price: 845.00,
    image: 'https://images.unsplash.com/photo-1599240813974-61041f487160?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    brand: 'Harken',
    rating: 5,
    isNew: true
  },
  {
    id: '2',
    name: 'Spinlock Deckvest 6D Lifejacket',
    price: 225.00,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    brand: 'Spinlock',
    rating: 4,
    isNew: false
  },
  {
    id: '3',
    name: 'Raymarine Axiom 9 Chartplotter',
    price: 1295.00,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    brand: 'Raymarine',
    rating: 5,
    isNew: true
  },
  {
    id: '4',
    name: 'Marlow Excel Racing Dyneema Rope',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1516515429572-1f9f3b859894?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    brand: 'Marlow',
    rating: 4,
    isNew: false
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-off-white">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-3 block">Selecionados para si</span>
            <h2 className="text-4xl font-bold text-primary uppercase tracking-tight">Produtos em Destaque</h2>
            <div className="w-20 h-1.5 bg-accent mt-4"></div>
          </div>
          <Link to="/shop" className="text-primary font-bold flex items-center gap-2 hover:text-accent transition-colors group">
            Ver Todos os Produtos <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
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
