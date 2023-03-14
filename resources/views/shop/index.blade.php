@extends('partials.layout')
@section('title', 'Shop With Us')
@section('description', 'Hostar Services Offered')



@section('content')
    @include('partials.svg')
    <div class="page-wrapper layout-full">
        <div class="preloader">
            <div class="sk-folding-cube">
                <div class="sk-cube1 sk-cube"></div>
                <div class="sk-cube2 sk-cube"></div>
                <div class="sk-cube4 sk-cube"></div>
                <div class="sk-cube3 sk-cube"></div>
            </div>
        </div>
    <!-- end preloader -->
    <x-headbar />
    <!-- start wpo-page-title -->
    <section class="wpo-page-title   crumbs-area-6374b03cf14a5 " style="">
        <div class="container">
            <div class="row">
                <div class="col col-xs-12" style="">
                    <div class="title">
                        <h2>Shop</h2>
                    </div>
                </div>
            </div> <!-- end row -->
        </div> <!-- end container -->
    </section>
    <!-- end wpo-page-title -->
    <section class="shop-section section-padding">
        <div class="container">
            <div class="row">
                <div class="col col col-md-12">
                    <div class="row">
                        <div id="primary" class="content-area">
                            <main id="main" class="site-main" role="main">
                                <div class="col-md-12">
                                    <div class="shop_list_inner_area row m0">
                                        <div class="woocommerce-notices-wrapper"></div>
                                        <p class="woocommerce-result-count">
                                            Showing all 6 results</p>
                                    </div>
                                </div>

                                <ul class="products columns-3">
                                    <div class="wrop">
                                        <li class="product type-product post-366 status-publish first instock product_cat-best-hosting product_tag-best product_tag-tranding has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
                                            <a href="{{ route('services') }}" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                <img width="300" height="319" src="{{ asset('images/product-1.jpg') }}" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" />
                                                <h2 class="woocommerce-loop-product__title">Cloud Hosting</h2>
                                                <span class="price"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>
                                                <span class="woocommerce-Price-currencySymbol">&#36;</span>99.00</bdi></span></del><ins>
                                                <span class="woocommerce-Price-amount amount"><bdi>
                                                <span class="woocommerce-Price-currencySymbol">&#36;</span>75.00</bdi></span></ins>
                                                </span>
                                            </a>
                                            <a href="?add-to-cart=366" data-quantity="1"
                                                class="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                data-product_id="366" data-product_sku=""
                                                aria-label="Add &ldquo;Cloud Hosting&rdquo; to your cart" rel="nofollow">Add to cart
                                            </a>
                                        </li>
                                        <li
                                            class="product type-product post-370 status-publish instock product_cat-best-hosting product_tag-best product_tag-tranding has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
                                            <a href="{{ route('services') }}" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                <img width="300" height="319" src="{{ asset('images/product-2.jpg') }}" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" />
                                                <h2 class="woocommerce-loop-product__title">Dedicated Hosting</h2>
                                                <span class="price"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>
                                                    <span class="woocommerce-Price-currencySymbol">&#36;</span>79.00</bdi>
                                                </span></del> <ins>
                                                <span class="woocommerce-Price-amount amount"><bdi>
                                                    <span class="woocommerce-Price-currencySymbol">&#36;</span>57.00</bdi></span></ins>
                                                </span>
                                            </a>
                                            <a href="?add-to-cart=370" data-quantity="1" class="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="370" data-product_sku=""
                                                aria-label="Add &ldquo;Dedicated Hosting&rdquo; to your cart"
                                                rel="nofollow">Add to cart
                                            </a>
                                        </li>
                                        <li
                                            class="product type-product post-369 status-publish last instock product_cat-best-hosting product_tag-best product_tag-tranding has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
                                            <a href="{{ route('services') }}" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                <img width="300" height="319" src="{{ asset('images/product-3.jpg') }}" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" />
                                                <h2 class="woocommerce-loop-product__title">Reseller Hosting</h2>
                                                <span class="price"><del aria-hidden="true">
                                                    <span class="woocommerce-Price-amount amount"><bdi>
                                                        <span class="woocommerce-Price-currencySymbol">&#36;</span>85.00</bdi>
                                                    </span></del><ins>
                                                        <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>55.00</bdi></span></ins>
                                                    </span>
                                            </a>
                                            <a href="?add-to-cart=369" data-quantity="1" class="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="369" data-product_sku=""
                                                aria-label="Add &ldquo;Reseller Hosting&rdquo; to your cart"
                                                rel="nofollow">Add to cart
                                            </a>
                                        </li>
                                    </div>
                                    <div class="wrop">
                                        <li class="product type-product post-367 status-publish first instock product_cat-best-hosting product_tag-best product_tag-tranding has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
                                            <a href="{{ route('services') }}" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                <img width="300" height="319" src="{{ asset('images/product-6.jpg') }}" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" />
                                                <h2 class="woocommerce-loop-product__title">Shared Hosting</h2>
                                                <span class="price"><del aria-hidden="true">
                                                    <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>79.00</bdi></span></del>
                                                    <ins>
                                                        <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>59.00</bdi></span>
                                                    </ins>
                                                </span>
                                            </a>
                                            <a href="?add-to-cart=367" data-quantity="1" class="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                data-product_id="367" data-product_sku=""
                                                aria-label="Add &ldquo;Shared Hosting&rdquo; to your cart"
                                                rel="nofollow">Add to cart
                                            </a>
                                        </li>
                                        <li
                                            class="product type-product post-368 status-publish instock product_cat-best-hosting product_tag-best product_tag-tranding has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
                                            <a href="{{ route('services') }}" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                <img width="300" height="319" src="{{ asset('images/product-5.jpg') }}" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" />
                                                <h2 class="woocommerce-loop-product__title">VPS Hosting</h2>
                                                <span class="price"><del aria-hidden="true">
                                                    <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>88.00</bdi> </span></del><ins> 
                                                    <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>77.00</bdi></span></ins>
                                                </span>
                                            </a>
                                            <a href="?add-to-cart=368" data-quantity="1" class="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                data-product_id="368" data-product_sku=""
                                                aria-label="Add &ldquo;VPS Hosting&rdquo; to your cart" rel="nofollow">Add
                                                to cart
                                            </a>
                                        </li>
                                        <li
                                            class="product type-product post-371 status-publish last instock product_cat-best-hosting product_tag-best product_tag-tranding has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
                                            <a href="{{ route('services') }}" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                <img width="300" height="319" src="{{ asset('images/product-1.jpg') }}" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" />
                                                <h2 class="woocommerce-loop-product__title">WordPress Hosting</h2>
                                                <span class="price"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>
                                                    <span class="woocommerce-Price-currencySymbol">&#36;</span>59.00</bdi></span></del><ins>
                                                    <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>33.00</bdi></span></ins>
                                                </span>
                                            </a>
                                            <a href="?add-to-cart=371" data-quantity="1" class="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                data-product_id="371" data-product_sku=""
                                                aria-label="Add &ldquo;WordPress Hosting&rdquo; to your cart"
                                                rel="nofollow">Add to cart
                                            </a>
                                        </li>
                                    </div>
                                    
                                </ul>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Footer -->
    <x-footer />
    <!-- Footer -->
</div>
<!--hostar-theme-wrapper -->
@include('partials.scripts')
@endsection