<?php

test('theme model exist in database', function () {
    expect(\Illuminate\Support\Facades\Schema::hasTable('themes'))->toBeTrue();
});
