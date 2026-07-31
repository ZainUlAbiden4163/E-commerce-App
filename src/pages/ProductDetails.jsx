import Breadcrumb from "../components/product/product-details/Breadcrumb";
import ProductGallery from "../components/product/product-details/ProductGallery";
import ProductInfo from "../components/product/product-details/ProductInfo";
import ProductMeta from "../components/product/product-details/ProductMeta";
import ProductActions from "../components/product/product-details/ProductActions";
import ProductSpecifications from "../components/product/product-details/ProductSpecifications";
import ProductReviews from "../components/product/product-details/ProductReviews";
import RelatedProducts from "../components/product/product-details/RelatedProducts";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct, getProductsByCategory } from "../services/productService";
import Spinner from "../components/ui/Spinner";
import ErrorMessage from "../components/ui/ErrorMessage";

export default function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });
  const { data: related = [] } = useQuery({
    queryKey: ["related-products", product?.category],
    queryFn: () => getProductsByCategory(product.category),
    enabled: !!product,
  });
  const relatedProducts = related.filter((p) => p.id !== product.id);
  if (isLoading) return <Spinner />;

  if (isError) return <ErrorMessage />;
  const specs = [
    { label: "Brand", value: product.brand },
    { label: "Category", value: product.category },
    { label: "SKU", value: product.sku },
    { label: "Weight", value: `${product.weight} g` },
    { label: "Stock", value: product.stock },
  ];

  return (
    <>
      {isLoading && <Spinner />}
      {isError && <ErrorMessage />}

      {!isLoading && !isError && (
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-10">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Shop", to: "/products" },
              { label: product.category, to: "/products" },
              { label: product.title },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <ProductGallery images={product.images} />

            <div className="space-y-5">
              <ProductInfo
                title={product.title}
                brand={product.brand}
                category={product.category}
                rating={product.rating}
                reviewCount={product.reviews.length}
                description={product.description}
                price={product.price}
                discountPercentage={product.discountPercentage}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ProductMeta
                  availabilityStatus={product.availabilityStatus}
                  shippingInformation={product.shippingInformation}
                  returnPolicy={product.returnPolicy}
                  warrantyInformation={product.warrantyInformation}
                />
                <ProductActions
                  availabilityStatus={product.availabilityStatus}
                  minimumOrderQuantity={product.minimumOrderQuantity}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
            <ProductSpecifications specs={specs} tags={product.tags} />
            <ProductReviews rating={product.rating} reviews={product.reviews} />
          </div>

          <RelatedProducts products={relatedProducts} />
        </div>
      )}
    </>
  );
}
