# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'json_helper/version'

Gem::Specification.new do |spec|
  spec.name          = "json_helper"
  spec.version       = JsonHelper::VERSION
  spec.authors       = ["Dave Wexler"]
  spec.license       = 'MIT'
  spec.summary       = %q{A gem that takes form entries in key-value form and converts to a JSON string.}
  spec.description   = %q{A gem that will pop up a modal with a form when you click on a textarea in which you want a stringified JSON object. Simply fill in the form's keys and values and click save, and it will populate the corresponding textarea with a stringified JSON object. Ideal for quick preparation of JSON payload params for POST requests.}
  spec.homepage      = "https://github.com/DaveWexler/json-helper."

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the 'allowed_push_host'
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  if spec.respond_to?(:metadata)
    spec.metadata['allowed_push_host'] = "TODO: Set to 'http://mygemserver.com'"
  else
    raise "RubyGems 2.0 or newer is required to protect against " \
      "public gem pushes."
  end

  spec.files         = `git ls-files -z`.split("\x0").reject do |f|
    f.match(%r{^(test|spec|features)/})
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.13"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "rspec", "~> 3.0"
end
