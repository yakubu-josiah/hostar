<div class="main-body" {{$attributes->merge(['class' => ' ', 'style' => ' '])}}>
    <div class="page-wrapper">
        <div class="row">
            <div class="col-md-12 col-xl-12">
                <div class="card yearly-sales m-5">
                    <div class="card-block">
                        {{ $slot }}
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="progress m-t-30" style="height: 7px;">
        <div class="progress-bar progress-c-theme" role="progressbar" style="width: 100%;"
            aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</div>