@extends('partials.layout')
@section('title', 'Hostings')

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
		<section class="wpo-page-title   crumbs-area-6374af6858e60 " style="">
			<div class="container">
				<div class="row">
					<div class="col col-xs-12" style="">
						<div class="title">
							<h2>Hosting</h2>
						</div>
					</div>
				</div> <!-- end row -->
			</div> <!-- end container -->
		</section>
		<!-- end wpo-page-title -->
		<div data-elementor-type="wp-page" data-elementor-id="23" class="elementor elementor-23">
			<div class="elementor-inner">
				<div class="elementor-section-wrap">
					<section
						class="elementor-section elementor-top-section elementor-element elementor-element-c7e33ef elementor-section-boxed elementor-section-height-default elementor-section-height-default"
						data-id="c7e33ef" data-element_type="section">
						<div class="elementor-container elementor-column-gap-no">
							<div class="elementor-row">
								<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-20d58ee"
									data-id="20d58ee" data-element_type="column">
									<div class="elementor-column-wrap elementor-element-populated">
										<div class="elementor-widget-wrap">
											<div class="elementor-element elementor-element-ea53d41 elementor-widget elementor-widget-tmx-hostar_title"
												data-id="ea53d41" data-element_type="widget"
												data-widget_type="tmx-hostar_title.default">
												<div class="elementor-widget-container">
													<div class="col col-lg-12">
														<div class="section-title">
															<h2>Our Services</h2>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
																sed do eiusmod tempor incididunt .

															</p>
														</div>
													</div>
												</div>
											</div>
											<div class="elementor-element elementor-element-991582a elementor-widget elementor-widget-tmx-hostar_service"
												data-id="991582a" data-element_type="widget"
												data-widget_type="tmx-hostar_service.default">
												<div class="elementor-widget-container">
													<div class="wpo-service-area">
														<div class="container">
															<div class="row">
																<div class="col-lg-4 col-sm-6 col-12 custom-grid">
																	<div class="wpo-service-item">
																		<div class="wpo-service-icon">
																			<img decoding="async"
																				src="{{ asset('images/server.png') }}"
																				alt="">
																		</div>
																		<div class="wpo-service-text">
																			<h2><a
																					href="{{ route('services') }}">WordPress
																					Hosting</a></h2>
																			<p>Web hosting is a service that allows
																				organizations and individuals to post a
																				website or web page.</p>
																		</div>
																	</div>
																</div>
																<div class="col-lg-4 col-sm-6 col-12 custom-grid">
																	<div class="wpo-service-item">
																		<div class="wpo-service-icon">
																			<img decoding="async"
																				src="{{ asset('images/refresh.png') }}"
																				alt="">
																		</div>
																		<div class="wpo-service-text">
																			<h2><a
																					href="{{ route('services') }}">Dedicated
																					Hosting</a></h2>
																			<p>Web hosting is a service that allows
																				organizations and individuals to post a
																				website or web page.</p>
																		</div>
																	</div>
																</div>
																<div class="col-lg-4 col-sm-6 col-12 custom-grid">
																	<div class="wpo-service-item">
																		<div class="wpo-service-icon">
																			<img decoding="async"
																				src="{{ asset('images/database.png') }}"
																				alt="">
																		</div>
																		<div class="wpo-service-text">
																			<h2><a
																					href="{{ route('services') }}">Reseller
																					Hosting</a></h2>
																			<p>Web hosting is a service that allows
																				organizations and individuals to post a
																				website or web page.</p>
																		</div>
																	</div>
																</div>
																<div class="col-lg-4 col-sm-6 col-12 custom-grid">
																	<div class="wpo-service-item">
																		<div class="wpo-service-icon">
																			<img decoding="async"
																				src="{{ asset('images/web.png') }}"
																				alt="">
																		</div>
																		<div class="wpo-service-text">
																			<h2><a
																					href="{{ route('services') }}">Cloud
																					Hosting</a></h2>
																			<p>Web hosting is a service that allows
																				organizations and individuals to post a
																				website or web page.</p>
																		</div>
																	</div>
																</div>
																<div class="col-lg-4 col-sm-6 col-12 custom-grid">
																	<div class="wpo-service-item">
																		<div class="wpo-service-icon">
																			<img decoding="async"
																				src="{{ asset('images/technology.png') }}"
																				alt="">
																		</div>
																		<div class="wpo-service-text">
																			<h2><a
																					href="{{ route('services') }}">VPS
																					Hosting</a></h2>
																			<p>Web hosting is a service that allows
																				organizations and individuals to post a
																				website or web page.</p>
																		</div>
																	</div>
																</div>
																<div class="col-lg-4 col-sm-6 col-12 custom-grid">
																	<div class="wpo-service-item">
																		<div class="wpo-service-icon">
																			<img decoding="async"
																				src="{{ asset('images/server-1.png') }}"
																				alt="">
																		</div>
																		<div class="wpo-service-text">
																			<h2><a
																					href="{{ route('services') }}">Shared
																					Hosting</a></h2>
																			<p>Web hosting is a service that allows
																				organizations and individuals to post a
																				website or web page.</p>
																		</div>
																	</div>
																</div>

															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
		<!-- Footer -->
		<x-footer />
		<!-- Footer -->
	</div>
	<!--hostar-theme-wrapper -->
	@include('partials.scripts')
@endsection