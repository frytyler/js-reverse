const Library = require('../js-reverse/reverse-library');

describe("JS Reverse", function () {
    let urls;
    let lib

    beforeEach(function () {
        urls = {
          base: '/',
          test: '/my/test/path',
          'with-slash': '/path/',
          param: '/<foo>',
          multipleParams: '/<foo>/<id>',
          empty: '',
          special: '/my-ürl'
        };
        lib = new Library('test.com');
        lib.register(urls);
    });

    it('should be able to register urls', function () {
      lib = new Library('test.com');

      expect(typeof lib.register).toEqual('function');
      expect(lib.register.bind(urls)).not.toThrow();
    });
    it('should provide a get function', function () {
      expect(typeof lib.get).toEqual('function');
    });
    it('should get urls by key', function () {
      expect(lib.get('test')).toEqual('test.com/my/test/path/');
      expect(lib.get('base')).toEqual('test.com/');
      expect(lib.get('with-slash')).toEqual('test.com/path/');
      expect(lib.get('empty')).toEqual('test.com/');
    });
    it('should handle invalid keys in get', function () {
      expect(lib.get.bind(14)).toThrow();
      expect(lib.get.bind(14)).toThrow();
      expect(lib.get.bind('invalid')).toThrow();
    });
    it('should handle get calls without registered urls', function () {
      lib = new Library('test.com');
      expect(lib.get.bind('test')).toThrow();

      lib.register({});
      expect(lib.get.bind('test')).toThrow();
    })

    it('should be able to provide the namespace', function () {
      lib = new Library('example.com');
      lib.register(urls);
      expect(lib.get('test')).toEqual('example.com/my/test/path/');

      lib = new Library('another.com');
      lib.register(urls);
      expect(lib.get('test')).toEqual('another.com/my/test/path/');
    });
    it('should be able to handle params', function () {
      expect(lib.get('param', {foo: 'bar'})).toEqual('test.com/bar/');
      expect(lib.get('multipleParams', {foo: 'bar', id: 9000})).toEqual('test.com/bar/9000/');
    });
    it('should handle not given params', function () {
      expect(lib.get.bind('param', {})).toThrow();
      expect(lib.get.bind('multipleParams', {id: 9000})).toThrow();
      expect(lib.get('multipleParams', {foo: 'bar', id: 9000, other: 'test'})).toEqual('test.com/bar/9000/');
    });
    it('should be able to handle query params', function () {
      expect(lib.get('test', {}, {foo: 'bar'})).toEqual('test.com/my/test/path/?foo=bar');
      expect(lib.get('test', {}, {paginateBy: 20, foo: 'bar'})).toEqual('test.com/my/test/path/?paginateBy=20&foo=bar');
      expect(lib.get('test', {}, {foo: 'my value'})).toEqual('test.com/my/test/path/?foo=my%20value');
    });
    it('should be able to handle params and query params at the same time', function () {
      expect(lib.get('param', {foo: 'bar'}, {test: 'success'})).toEqual('test.com/bar/?test=success');
      expect(lib.get('multipleParams', {foo: 'bar', id: 9000}, {paginateBy: 20, foo: 'bar'})).toEqual('test.com/bar/9000/?paginateBy=20&foo=bar');
    });
    it('encodes the URL correctly', function () {
      expect(lib.get('special', {}, { param: 'my param', 'späcial key': 'bar'})).toEqual('test.com/my-%C3%BCrl/?param=my%20param&sp%C3%A4cial%20key=bar');
    });
});
