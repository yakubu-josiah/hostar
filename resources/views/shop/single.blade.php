@extends('partials.layout')
@section('title', 'Order Placement')


@section('content')
@include('partials.svg')
<div class="page-wrapper layout-full">
	<!-- #hostar-theme-wrapper -->
	<!-- start preloader -->
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
	<section class="wpo-page-title   crumbs-area-637b9404896bc " style="">
		<div class="container">
			<div class="row">
				<div class="col col-xs-12" style="">
					<div class="title">
						<h2>Cloud Hosting</h2>
					</div>
				</div>
			</div> <!-- end row -->
		</div> <!-- end container -->
	</section>
	<!-- end wpo-page-title -->
	<div class="shop-details-section section-padding">
		<div class="container">
			<div class="row">
				<div id="primary" class="content-area">
					<main id="main" class="site-main" role="main">

						<div class="woocommerce-notices-wrapper"></div>
						<div id="product-366"
							class="product type-product post-366 status-publish first instock product_cat-best-hosting product_tag-best product_tag-tranding has-post-thumbnail sale shipping-taxable purchasable product-type-simple">


							<span class="onsale">Sale!</span>
							<div class="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images"
								data-columns="4" style="opacity: 0; transition: opacity .25s ease-in-out;">
								<figure class="woocommerce-product-gallery__wrapper">
									<div data-thumb="{{ asset('images/product-1-100x100.jpg') }}" data-thumb-alt="" class="woocommerce-product-gallery__image">
										<a href="#">
											<img width="600" height="600" src="{{ asset('images/product-1-600x600.jpg') }}" class="wp-post-image" alt="" decoding="async" loading="lazy" title="product-1" data-caption=""
												data-src="{{ asset('images/product-1.jpg') }}"
												data-large_image="{{ asset('images/product-1.jpg') }}" data-large_image_width="1000" data-large_image_height="1000"
												srcset="{{ asset('images/product-1-600x600.jpg') }}" />
										</a>
									</div>
								</figure>
							</div>

							<div class="summary entry-summary">
								<p class="price"><del aria-hidden="true"><span
											class="woocommerce-Price-amount amount"><bdi><span
													class="woocommerce-Price-currencySymbol">&#36;</span>99.00</bdi></span></del>
									<ins><span class="woocommerce-Price-amount amount"><bdi><span
													class="woocommerce-Price-currencySymbol">&#36;</span>75.00</bdi></span></ins>
								</p>
								<div class="woocommerce-product-details__short-description">
									<p>A collection of textile samples lay spread out on the table - Samsa was a
										travelling salesman - and above it there hung a picture that he had recently cut
										out of an illustrated magazine and housed in a nice, gilded frame. It showed a
										lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur
										muff that covered the whole of her lower arm towards the viewer. Gregor then
										turned to look out</p>
									<p>Waved about helplessly as he looked. “What's happened to me?” he thought. It
										wasn't a dream. His room, a proper human room although a little too small, lay
										peacefully between its four familiar walls.</p>
								</div>


								<form class="cart" action="{{ route('hosting') }}" method="post" enctype='multipart/form-data'>
									<div class="quantity">
										<label class="screen-reader-text" for="quantity_637b94048cfd8">Cloud Hosting quantity</label>
										<input type="number" id="quantity_637b94048cfd8" class="input-text qty text"
											step="1" min="1" max="" name="quantity" value="1" title="Qty" size="4"
											placeholder="" inputmode="numeric" autocomplete="off" 
										/>
									</div>

									<button type="submit" name="add-to-cart" value="366"
										class="single_add_to_cart_button button alt wp-element-button">Add to cart
									</button>

								</form>


								<div class="product_meta">
									<span class="posted_in">Category: 
										<a href="{{ route('hosting') }}" rel="tag">Best Hosting</a>
									</span>
									<span class="tagged_as">Tags: 
										<a href={{ route('about') }}" rel="tag">Best</a>,
										<a href="{{ route('services') }}" rel="tag">Tranding</a>
									</span>
								</div>
							</div>


							<div class="woocommerce-tabs wc-tabs-wrapper">
								<ul class="tabs wc-tabs" role="tablist">
									<li class="description_tab" id="tab-title-description" role="tab"
										aria-controls="tab-description">
										<a href="#tab-description">
											Description </a>
									</li>
									<li class="reviews_tab" id="tab-title-reviews" role="tab" aria-controls="tab-reviews">
										<a href="#tab-reviews"> Reviews (0) </a>
									</li>
								</ul>
								<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"
									id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">

									<h2>Description</h2>

									<p>Samsa was a travelling salesman - and above it there hung a picture that he had
										recently cut out of an illustrated magazine and housed in a nice, gilded frame.
										It showed a lady fitted out with a fur hat and fur boa who sat upright, raising
										a heavy fur muff that covered the whole of her lower arm towards the viewer.
										Gregor then turned to look out the window at the dull weather.</p>
									<p>waved about helplessly as he looked. “What's happened to me?” he thought. It
										wasn't a dream. His room, a proper human room although a little too small, lay
										peacefully between its four familiar walls</p>
								</div>
								<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab"
									id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews">
									<div id="reviews" class="woocommerce-Reviews">
										<div id="comments">
											<h2 class="woocommerce-Reviews-title">
												Reviews </h2>

											<p class="woocommerce-noreviews">There are no reviews yet.</p>
										</div>

										<div id="review_form_wrapper">
											<div id="review_form">
												<div id="respond" class="comment-respond">
													<span id="reply-title" class="comment-reply-title">Be the first to
														review &ldquo;Cloud Hosting&rdquo; <small><a rel="nofollow"
																id="cancel-comment-reply-link"
																href="/wp/hostar/product/cloud-hosting/#respond"
																style="display:none;">Cancel reply</a></small></span>
													<form action="#" method="post" id="commentform" class="comment-form">
														<p class="comment-notes"><span id="email-notes">Your email address will not be published.</span> 
															<span class="required-field-message">Required fields are marked <span class="required">*</span></span>
														</p>
														<p class="comment-form-author">
															<label for="author">Name&nbsp;<span class="required">*</span></label>
															<input id="author" name="author" type="text" value="" size="30" required />
														</p>
														<p class="comment-form-email"><label for="email">Email&nbsp;<span class="required">*</span></label>
															<input id="email" name="email" type="email" value="" size="30" required />
														</p>
														<p class="comment-form-cookies-consent">
															<input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" /> 
															<label for="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
														</p>
														<div class="comment-form-rating"><label for="rating">Your rating&nbsp; <span class="required">*</span></label>
															<select name="rating" id="rating" required>
																<option value="">Rate&hellip;</option>
																<option value="5">Perfect</option>
																<option value="4">Good</option>
																<option value="3">Average</option>
																<option value="2">Not that bad</option>
																<option value="1">Very poor</option>
															</select>
														</div>
														<p class="comment-form-comment"><label for="comment">Your review&nbsp; <span class="required">*</span></label>
															<textarea id="comment" name="comment" cols="45" rows="8" required></textarea>
														</p>
														<p class="form-submit"><input name="submit" type="submit" id="submit" class="submit" value="Submit" /> 
															<input type='hidden' name='comment_post_ID' value='366' id='comment_post_ID' />
															<input type='hidden' name='comment_parent' id='comment_parent' value='0' />
														</p>
													</form>
												</div><!-- #respond -->
											</div>
										</div>

										<div class="clear"></div>
									</div>
								</div>

							</div>

						</div>



					</main>
				</div>
			</div>
		</div>
	</div>

	<!-- Footer -->
		<!-- Footer -->
		<x-footer />
		<!-- Footer -->
</div>
<!--hostar-theme-wrapper -->
@include('partials.scripts')
@endsection