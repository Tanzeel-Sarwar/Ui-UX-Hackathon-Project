import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Layout from "@/components/Layout"
import { ShoppingCart } from "lucide-react"


const products = [
  {
    id: "1",
    name: "Library Stool Chair",
    price: 20.00,
    image: "/images/card.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipisicing"
  },
  {
    id: "2",
    name: "Luxury Rest Chair",
    price: 99.00,
    image: "/images/Library-Stool-Chair 1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipisicing"
  },
  {
    id: "3",
    name: "Modern Office Chair",
    price: 89.00,
    image: "/images/Library-Stool-Chair 3.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipisicing"
  },
  {
    id: "4",
    name: "Comfort Plus Chair",
    price: 129.00,
    image: "/images/Library-Stool-Chair 4.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipisicing"
  },
  {
    id: "5",
    name: "Executive Chair",
    price: 149.00,
    image: "/images/Wooden Chair.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipisicing"
  },
  {
    id: "6",
    name: "Modern Office Chair",
    price: 149,
    image: "/images/Library-Stool-Chair 6.png",  
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipisicing"
  },
  {
    id: "7",
    name: "Library Stool Chair",
    price: 99,
    image: "/images/Library-Stool-Chair 7.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipisicing"
  },
  {
    id: "8",
    name: "Luxury Rest Chair",
    price: 129,
    image: "/images/card.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipisicing"
  },
  {
    id: "9",
    name: "Modern Office Chair",
    price: 149,
    image: "/images/Library-Stool-Chair 5.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipisicing"
  },
  {
    id: "10",
    name: "Library Stool Chair",
    price: 99,
    image: "/images/Library-Stool-Chair 1.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipisicing"
  },
  {
  id: "11",
  name: "Luxury Rest Chair",
  price: 129,
  image: "/images/Library-Stool-Chair 3.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipisicing"
  },
  {
  id: "12",
  name: "Modern Office Chair",
  price: 149,
  image: "/images/Desk Chair.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipisicing"
  },
]

type PageProps = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

async function getProduct(id: string) {
  // Simulate an API call or database query
  await new Promise(resolve => setTimeout(resolve, 100))
  return products.find(p => p.id === id) || null
}

async function getFeaturedProducts(id: string) {
  // Simulate an API call or database query
  await new Promise(resolve => setTimeout(resolve, 100))
  return products.filter(p => p.id !== id)
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params

  const [product, featuredProducts] = await Promise.all([
    getProduct(id),
    getFeaturedProducts(id)
  ])

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <Layout>

      {/* Product Details Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden group">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col mt-14">
            <h1 className="text-[3rem] font-extrabold  mb-4 text-[#272343]">{product.name}</h1>
            <div className="w-28 inline-block bg-[#007580] text-primary-foreground pl-4 py-3 rounded-full text-sm mb-6">
              ${product.price.toFixed(2)} USD
            </div>
            <br />
            <hr />
            <br />
            <p className="text-gray-600 mb-10 ">
              {product.description}
            </p>
            <Button 
              className="w-fit py-6 px-8 transition-all duration-300 hover:scale-105 bg-[#007580]"
            >
              <ShoppingCart/>
              Add To Cart
            </Button>
          </div>
        </div>

        {/* Featured Products Section */}
        <section className="mt-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Link 
              href="/products" 
              className="font-bold text-primary hover:underline transition-colors duration-300"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {featuredProducts.map((item) => (
              <Link 
                key={item.id}
                href={`/product/${item.id}`}
                className="group"
              >
                <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden mb-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-gray-900 transition-colors duration-300 group-hover:text-primary">
                  {item.name}
                </h3>
                <p className="text-gray-600">
                  ${item.price.toFixed(2)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}

