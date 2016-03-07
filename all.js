var BasePresenter, HomePresenter,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

BasePresenter = (function() {
  function BasePresenter() {
    $(document).ready((function(_this) {
      return function() {
        return _this.onCreate();
      };
    })(this));
  }

  BasePresenter.prototype.onCreate = function() {};

  return BasePresenter;

})();

HomePresenter = (function(superClass) {
  extend(HomePresenter, superClass);

  function HomePresenter() {
    return HomePresenter.__super__.constructor.apply(this, arguments);
  }

  HomePresenter.prototype.onCreate = function() {
    return HomePresenter.__super__.onCreate.apply(this, arguments);
  };

  return HomePresenter;

})(BasePresenter);
