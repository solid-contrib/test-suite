=pod

=encoding utf-8

=head1 PURPOSE

Testing basic functionality of a Solid server

=head1 AUTHOR

Kjetil Kjernsmo E<lt>kjetilk@cpan.orgE<gt>.

=head1 COPYRIGHT AND LICENCE

This software is Copyright (c) 2019 by Inrupt Inc.

This is free software, licensed under:

  The MIT (X11) License


=cut


use strict;
use warnings;

use Test::More;
use Test::FITesque;
use Test::FITesque::Test;

my $file = '/opt/fixture-tables/basic.ttl';

use Test::FITesque::RDF;

BAIL_OUT("Set SOLID_REMOTE_BASE to the URL of the base of the server you are testing") unless $ENV{SOLID_REMOTE_BASE};

my $suite = Test::FITesque::RDF->new(source => $file, base_uri => $ENV{SOLID_REMOTE_BASE})->suite;

$suite->run_tests;

done_testing;
  

