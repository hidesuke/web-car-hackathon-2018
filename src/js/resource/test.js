(function (cjs, an) {

  var p; // shortcut to reference prototypes
  var lib = {}; var ss = {}; var img = {};
  lib.ssMetadata = [];


  // symbols:



  (lib.background = function () {
    this.initialize(img.background);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 643, 962);// helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }


  (lib.tail = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // レイヤー 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#050505").s().p("AhfBiQhJgQgqgtQgVgWAtgSQAtgTAUAUQAaAbArALQAlAJApgGQAvgHAXgaQAXgZACgxQABgcAxgHQAwgIgBAgQgDBFg0AvQguAshJAQQglAJgjAAQgiAAghgIg");

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

  }).prototype = getMCSymbolPrototype(lib.tail, new cjs.Rectangle(-21.7, -10.5, 43.6, 21.2), null);


  (lib.shadow = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // レイヤー 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#415650").s().p("AlKBMQiKgfAAgtQAAgsCKgfQCJgfDBgBQDDABCIAfQCKAfAAAsQAAAtiKAfQiJAfjCABQjBgBiJgfg");

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

  }).prototype = getMCSymbolPrototype(lib.shadow, new cjs.Rectangle(-46.9, -10.7, 93.8, 21.5), null);


  (lib.leg_right = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // レイヤー 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#050505").s().p("AAIBTQgmgDgNg/QgGgcgBhAQAAgEAIgCQAIgCACADQARAVAFAEQAMAKASgGQAGgBACABQABAAAAAAQABABAAAAQABABAAAAQAAAAAAABQASAoACAmQACA1gnAAIgGAAgAgbgCQAHAvAVATQAUASAHgbQAFgVgDgUQgFgagLgaQgSADgOgHQgFgDgHgGQABAhACAQg");
    this.shape.setTransform(0.4, 13.2);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AgaAkQgPgqAAhGQAUAZAHAEQAOAJAVgHQAUApABAjQABApgaAFIgGAAQgWAAgPgpg");
    this.shape_1.setTransform(0.4, 13.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#050505").s().p("AhFC9QgQgngHhmQgFhEANhIQAMhGAZg9IACgFQABgEAEgDQAEgEAIgDIABAAQAYgKAJALIACADIAsBJQAPAZAAAwIgBBNQAFBBAKAuIAIAkQAFAVABAPQAAAcgNAVQgPAWgbAGQgPADgNAAQg4AAgZg7gAgWh3QgMA4gBA1QgBBNARBPIAFAbQAFAPAIAIQANAPAMgDQANgDgBgVQAAgbgLguQgMg1gCgVQgGg9gBhLQAAgXgEgOQgDgIgJgQIgKApg");

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FE4E49").s().p("AgYDTQgQgRgFgbQgYhsAGhTQACgoAOg/QAOhDAPgiIAzBXQAABVAFA4QAGBMAQA/QAJAhgFAWQgHAfgiADIgHABQgXAAgRgSg");
    this.shape_3.setTransform(0, 0.2);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

  }).prototype = getMCSymbolPrototype(lib.leg_right, new cjs.Rectangle(-9.4, -24.7, 18.9, 49.6), null);


  (lib.leg_left = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // レイヤー 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#050505").s().p("AgpAXIAChdQAAgFAIgCQAIgCADAEQAJANAHACQAJADALgKQAEgDAGgBQAGgBACAEQALAjgDAsQgFAzgaANIgFACQgGACgFAAQgfAAgFg4gAgVAHQADBBAUgFQAQgJACg5QABghgEgUQgMAHgJAAQgIAAgIgFIgBA5g");
    this.shape.setTransform(-0.2, 14.2);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AgdAcQgBgKABhaQAOAVAMABQAJABASgRQAJAYgDAyQgEA6gVAFQgFACgDAAQgVAAgFgtg");
    this.shape_1.setTransform(-0.2, 14.3);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#050505").s().p("AhGDPQgLgagCg/IgCh5QAAhEAGg1IAAgBIAAgBQAHgqATgcQAXgjAkgJQAdgGAEAMQAZBEAJBsIAJBSQAEAyAAAiQgCA1gRAhQgXAqguAGIgNABQgnAAgQgkgAACDUQAAAAAAAAQgBgBABAAQAAgBAAAAQABgBAAgBIAJgJQAJgSADgRQAEgdgBglIgFhCQgIhegEggQgGgygLgoQgJAUgFAfQgJBIABBzQACCaAdAEIAAAAg");

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FE4E49").s().p("AgLDjQgRgCgEgJQgOgcgEgtQgCgTgBhCQgDgbgBgcQgCg0AKhQQAHg3AcgbIAagQQAUA0ALBdQAGA0AHBfQAMB5guAhQgMAJgOAAIgHgBg");
    this.shape_3.setTransform(-0.1, 0.1);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

  }).prototype = getMCSymbolPrototype(lib.leg_left, new cjs.Rectangle(-8.6, -24.3, 17.2, 48.7), null);


  (lib.head = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // レイヤー 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#050505").s().p("AiYFoQhegKgYgBQg1gEgbAAQgxgBgfAKQgJADgMgCQgOgEACgLQADgSAAgYIgBgqQAAgSACgbIAEgsQAFhSgGhjQgLiuAPibQACgMARgGQAQgGAMAEQARAFAkAAQAeABASAFQChgUB3AXIA+AMQAiAGAegDQA1gFAugBIA8ACQAlABAWgDIAigFQAUgDANgBQAkgCAPAHQAXAJADAeQACARgEAaIgFArQgBAbADBiQACAogGBFQgHBPgBAfQAAAlAFBBQAGBIAAAdQAAALgQAGQgNAGgLgBQgPgBgjAIQggAGgSgDQgYgEgkAAIg8gBQgygEhCAFIhzAJIgdABQgmAAg0gGgAjpE5QCeAUAwgEIBGgIQAsgGAagCQAWgBAfACIA1AEQALAAAngCQAfgDATAFQAXAGAlgFIAUgDIgGhTQgFhAABgmIAJhpQAGhAgDgpQgFhLAJhwQACgggKgIQgJgIgfAEIg0AIQgYABhRAAQhBgBgoAEQgxAFgggEQgOgCgcgIQgbgHgQgCQiKgNhqAOIgEAAIgGABQgLAAgEgEQgRgEgdgBIgKAAQgGBKABBYQAAA9AFB9QAEBcgGA+QgCAUAAA6QAAAfgCAXQAggFAnAAQAsAAA2AHg");
    this.shape.setTransform(0, 7.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AhTFcQgegChDgIQg+gIgjgBIhKgCQg7AAgYAJQAGgXgCglQgCgrABgPQANhngMiuQgIiLAQiVQAQAHAmgBQAkgBARAIIA1gHQA3gGANABQAgAFBBADIAuAEQAbADATAHQAbAJAYABQARABAjgEQBEgHCHADQAPAAA5gJQAzgGAGAPQAHAPgDAkIgGA1QgDA8AEAzQAEAtgFA/IgJBtQgCAlAFBEQAHBPAAAjQgQgDgfAIQghAIgOgBQgJgBgQgEIgZgFQgLgBgTACQgVADgJAAIg5gEQgjgCgXAAIhhALQgzAHgkAAIgJAAg");
    this.shape_1.setTransform(0, 7.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#050505").s().p("ABfCEQgYgNgsgBQgwADgWgCIhXgHQgKABgFgDQgGgBACgEIgBgEQACgfAXgiQAcglAMgWQASgjANgSQASgbAVgTQAJgIARgEQAVgEAEALQAJAVAVAjQAYAlAIASQAJAVAYApQATAmABAeQAAAOgXAGQgKACgHAAQgKAAgGgEgABWBdQgFgRgJgTIglhDIgegyIgIgPIgDAGIgeA0QgMARgYAiQgQAagEAYIAzAFQAmAEAYgBQA0AAANABIAAAAg");
    this.shape_2.setTransform(24.7, -29.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FFFFFF").s().p("AA4BqQgzABgTgCIhrgIQgBgaASgdIAigvIAgg6QAUglAZgUQAFAOAaArQAcAuAHARQAIASAXApQAUAlgCAZQgVgPgtAAg");
    this.shape_3.setTransform(24.7, -29.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#050505").s().p("AgqBzQgugCgkgDQgJABgEgEIgCgBIgBgCQgNgSAPgdQAVgfAGgOQAZg4BEg3QAJgHATgGQAYgHADAKQAFAYAUAfIAhAzQAIAOAPAhQAOAcAOAQQAIAJgaAIQgXAHgKgCQgZgGgsAGQgsAGgTAAIgFgBgAgRgzQgTAYgVAkIgYAnQgMAWAIAPQBCAGAYAAQAOAAA3gGIABAAIgNgYIgZgyIghgyIgMgXIgJALg");
    this.shape_4.setTransform(-26.3, -32.1);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#FFFFFF").s().p("AhGBjIgpgEQgOgNAQgeQAWgiAEgLQAVg2BGg3QACARAVAhIAfAwIAeA4QAUAnAHAGQgWgHgnAFIg9AIQgWAAgtgEg");
    this.shape_5.setTransform(-26.3, -32);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-46.4, -43.7, 92.9, 87.4);


  (lib.hand_right = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // レイヤー 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#050505").s().p("Ag4AIQgBgaAdgNQAVgLAdAAQABAAABAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQgIAKABALIAHAVQAEAKAIAFIASAIQABABAAAAQAAAAAAAAQAAABAAAAQgBAAAAABIgDACQgjANgeAAQgsAAAAgjgAgYgYQgRAMAEAUQAGAZAbACQASADAVgHQgLgFgFgEQgIgGgFgMQgGgMAAgIQAAgJAFgKQgRACgMAJg");
    this.shape.setTransform(-7.3, 4.7, 1, 1, -15);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AgFAoQgagCgKgQQgNgUAOgSQAQgXApAAQgLAMAEAOQACAHAFAKQAEALAIAFQADACAQAHQgaALgWAAIgFAAg");
    this.shape_1.setTransform(-7.4, 4.8, 1, 1, -15);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#050505").s().p("AiNBbQgcgIgGgTQgSgyA3gfQAhgTA/gNQAjgHBFgYQBAgTArAGQANACgCAGQACAFgIAIQg+A+hkBAQg2Alg2AEIgLAAQgSAAgQgEgABEg0QgsARgUAFIgnAJIgoAKQgVAGgRASQgVAXAUAQQAdAXA8giQAggSAxgnQAdgYAWgVQgRACgWAHg");
    this.shape_2.setTransform(0.6, 0.5, 1, 1, -15);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FE4E49").s().p("AhsBOQgkgEgFgaQgFgYAWgYQAQgQAsgLIBIgRIBKgXQA2gPAXAFIgqAoQgxArgjAUIg6AlQgeAQgeAAIgPgBg");
    this.shape_3.setTransform(0.6, 0.4, 1, 1, -15);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

  }).prototype = getMCSymbolPrototype(lib.hand_right, new cjs.Rectangle(-15.9, -12.9, 31.9, 25.9), null);


  (lib.hand_left = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // レイヤー 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#050505").s().p("AgIAuQgfgMgbgaQgDgEAEgDQACgBAEgBQASgFAFgJQAGgKgGgQQgCgFAHgDQAGgCAEABQAjAMAeAWQAqAfgeAYQgPAMgUAAQgOAAgPgFgAgrAFQAPANAUAKQAQAIAPACQAXADACgSQABgVgggSQgOgIgQgHQABAYgfAMg");
    this.shape.setTransform(8.6, 5.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AgIAkQgegNgTgTQAYgGAHgLQAIgLgIgUQAkALAbAXQAhAagUATQgKAKgQAAQgOAAgSgJg");
    this.shape_1.setTransform(8.6, 5.1);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#050505").s().p("ABkB8Qg9gDgsgeQhVg4gTgQQg/g0gHguIAAgBIAAgBIAAgEIABgCQAKhJCXBMIB6A6QBQAugGAyQgGA2hCAAIgHAAgAhUghQAQAPArAeIAlAdQAXARARAJQAWALAbADQAkAEgZgfQgWgdgogWIhIgjIg9gfQgUgJgMgFQAJAWAWAWg");

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FE4E49").s().p("ABIBkQgfgJgegVIg2goQhphJgBguQgCgdBFAdQAmAQBFAkQAiANAgAWQAqAbALAZQARAkgfANQgNAFgPAAQgOAAgQgEg");
    this.shape_3.setTransform(0, 0.1);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

  }).prototype = getMCSymbolPrototype(lib.hand_left, new cjs.Rectangle(-17.9, -12.3, 36, 24.8), null);


  (lib.btn_surprise = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("AgeAlQgMgMAAgWIAAgGQAAgVAMgNQAMgLASAAQAUAAALAMQAMAMAAAVIAAAJIg6AAIAAADQAAAIAFAGQAFAFAGAAQAOAAACgLIAaAAQgCAMgJAJQgMALgTAAQgTAAgMgMgAAQgKQAAgIgEgFQgFgFgHAAQgGAAgEAFQgFAFAAAIIAfAAIAAAAg");
    this.shape.setTransform(90.3, 21.5);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#000000").s().p("AgeAoQgKgHAAgNIAcAAQAAAKAMAAQAOAAAAgJQAAgGgHgCIgQgEQgdgGAAgVQAAgPAMgIQAKgHAQAAQARAAAKAIQALAHAAAOIgYAAQgCgKgMAAQgLAAAAAJQAAAFAIADIAQADQAcAGAAAUQAAAPgLAIQgLAJgTAAQgTAAgLgJg");
    this.shape_1.setTransform(80.7, 21.5);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("AgNBCIAAhdIAbAAIAABdgAgKgpQgEgEAAgGQAAgGAEgEQAFgEAFAAQAGAAAFAEQAEAEAAAGQAAAGgEAEQgFAEgGAAQgFAAgFgEg");
    this.shape_2.setTransform(73.6, 19.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#000000").s().p("AgdAvIAAhcIAdAAIAAANIAAAAQACgFAFgFQAGgEAIAAIAJAAIAAAYIgLgBQgTAAAAAVIAAAxg");
    this.shape_3.setTransform(67.9, 21.5);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#000000").s().p("AgsA/IAAh8IAcAAIAAAPIABAAQAHgQATAAQAPAAAKALQAJAMAAAVIAAAIQAAAUgJALQgKAMgQAAQgSAAgHgPIgBAAIAAAtgAgMgiQgEAGAAALIAAAGQAAALAEAFQAFAHAHgBQAHAAAFgFQAEgGAAgLIAAgGQAAgXgQAAQgHAAgFAGg");
    this.shape_4.setTransform(58.8, 23);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#000000").s().p("AgdAvIAAhcIAdAAIAAANIAAAAQACgFAFgFQAGgEAIAAIAJAAIAAAYIgLgBQgTAAAAAVIAAAxg");
    this.shape_5.setTransform(50, 21.5);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#000000").s().p("AgiAnQgIgJAAgQIAAg9IAbAAIAAA2QABARAOAAQAHAAAEgEQAEgFAAgJIAAg1IAdAAIAABdIgcAAIAAgOIgBAAQgCAGgHAEQgGAGgLAAQgPAAgIgJg");
    this.shape_6.setTransform(40.7, 21.6);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#000000").s().p("AgeAoQgKgHAAgNIAcAAQAAAKAMAAQAOAAAAgJQAAgGgHgCIgQgEQgdgGAAgVQAAgPAMgIQAKgHAQAAQARAAAKAIQALAHAAAOIgYAAQgCgKgMAAQgLAAAAAJQAAAFAIADIAQADQAcAGAAAUQAAAPgLAIQgLAJgTAAQgTAAgLgJg");
    this.shape_7.setTransform(30.8, 21.5);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(4));

    // Layer_1
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#CCCCCC").s().p("ApXDcIAAm3ISvAAIAAG3g");
    this.shape_8.setTransform(60, 22);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#FFFFFF").s().p("ApXDcIAAm3ISvAAIAAG3g");
    this.shape_9.setTransform(60, 22);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#999999").s().p("ApXDcIAAm3ISvAAIAAG3g");
    this.shape_10.setTransform(60, 22);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_8 }] }).to({ state: [{ t: this.shape_9 }] }, 1).to({ state: [{ t: this.shape_10 }] }, 1).wait(2));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 120, 44);


  (lib.btn_smile = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("AgeAlQgMgMAAgWIAAgGQAAgVAMgNQAMgLASAAQAUAAALAMQAMAMAAAVIAAAJIg6AAIAAADQAAAIAFAGQAFAFAGAAQAOAAACgLIAaAAQgCAMgJAJQgMALgTAAQgTAAgMgMgAAQgKQAAgIgEgFQgFgFgHAAQgGAAgEAFQgFAFAAAIIAfAAIAAAAg");
    this.shape.setTransform(78.2, 21.5);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#000000").s().p("AgNA/IAAh9IAbAAIAAB9g");
    this.shape_1.setTransform(70.8, 19.9);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("AgNBCIAAhdIAbAAIAABdgAgKgpQgEgEAAgGQAAgGAEgEQAFgEAFAAQAGAAAFAEQAEAEAAAGQAAAGgEAEQgFAEgGAAQgFAAgFgEg");
    this.shape_2.setTransform(65.8, 19.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#000000").s().p("AApAwIAAg3QAAgRgNAAQgOAAAAASIAAA2IgaAAIAAg3QAAgRgOAAQgOAAAAARIAAA3IgdAAIAAhdIAcAAIAAAPIABAAQACgHAGgEQAHgGAKAAQAUAAAFARIABAAQADgHAHgEQAIgGALAAQAOAAAIAJQAIAIAAAOIAABAg");
    this.shape_3.setTransform(55.3, 21.4);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#000000").s().p("AgeAoQgKgHAAgNIAbAAQACAKALAAQAOAAAAgJQAAgGgHgCIgPgEQgegGAAgVQAAgPAMgIQALgHAPAAQARAAALAIQAKAHAAAOIgZAAQgBgKgMAAQgLAAAAAJQgBAFAJADIAPADQAdAGAAAUQAAAPgLAIQgLAJgTAAQgTAAgLgJg");
    this.shape_4.setTransform(42.7, 21.5);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(4));

    // Layer_1
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#CCCCCC").s().p("ApXDcIAAm3ISvAAIAAG3g");
    this.shape_5.setTransform(60, 22);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#FFFFFF").s().p("ApXDcIAAm3ISvAAIAAG3g");
    this.shape_6.setTransform(60, 22);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#999999").s().p("ApXDcIAAm3ISvAAIAAG3g");
    this.shape_7.setTransform(60, 22);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }] }).to({ state: [{ t: this.shape_6 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).wait(2));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 120, 44);


  (lib.btn_sad = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("AgjA0QgJgMAAgUIAAgIQAAgUAJgLQAJgMARAAQATAAAGAPIACAAIAAgvIAcAAIAAB+IgcAAIAAgPIgBAAQgIAQgSAAQgRAAgJgMgAgKgDQgGAFABALIAAAGQgBALAGAGQAEAGAHAAQAHAAAEgGQAGgGAAgLIAAgGQAAgLgGgFQgEgGgIAAQgGAAgEAGg");
    this.shape.setTransform(70.1, 19.9);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#000000").s().p("AggApQgJgIAAgNQAAgNAJgHQAJgHAQAAIAVAAIAAgIQAAgMgNAAQgLAAgBALIgaAAQAAgNAJgJQAKgKAUAAQASAAAKAJQAMAIAAARIAAA9IgbAAIAAgLIgBAAQgGANgSAAQgNAAgJgIgAgNARQAAAGAEADQAEADAFAAQAFAAAFgEQAEgDAAgGIAAgJIgOAAQgNAAAAAKg");
    this.shape_1.setTransform(59.8, 21.5);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("AgeAoQgKgHAAgNIAbAAQACAKAMAAQANAAAAgJQAAgGgIgCIgPgEQgdgGAAgVQAAgPAMgIQAKgHARAAQARAAAKAIQAKAHAAAOIgYAAQgCgKgMAAQgMAAAAAJQAAAFAJADIAQADQAcAGAAAUQAAAPgLAIQgLAJgTAAQgTAAgLgJg");
    this.shape_2.setTransform(50.4, 21.5);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(4));

    // Layer_1
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#CCCCCC").s().p("ApXDcIAAm3ISvAAIAAG3g");
    this.shape_3.setTransform(60, 22);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#FFFFFF").s().p("ApXDcIAAm3ISvAAIAAG3g");
    this.shape_4.setTransform(60, 22);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#999999").s().p("ApXDcIAAm3ISvAAIAAG3g");
    this.shape_5.setTransform(60, 22);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }] }).to({ state: [{ t: this.shape_4 }] }, 1).to({ state: [{ t: this.shape_5 }] }, 1).wait(2));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 120, 44);


  (lib.btn_normal = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("AgNA/IAAh9IAbAAIAAB9g");
    this.shape.setTransform(86.8, 19.9);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#000000").s().p("AggApQgJgIAAgNQAAgNAJgHQAJgHAQAAIAVAAIAAgIQAAgMgNAAQgLAAgBALIgaAAQAAgNAJgJQAKgKAUAAQASAAAKAJQAMAIAAARIAAA9IgbAAIAAgLIgBAAQgGANgSAAQgNAAgJgIgAgNARQAAAGAEADQAEADAFAAQAFAAAFgEQAEgDAAgGIAAgJIgOAAQgNAAAAAKg");
    this.shape_1.setTransform(79.2, 21.5);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("AApAwIAAg3QAAgRgNAAQgOAAAAASIAAA2IgaAAIAAg3QAAgRgOAAQgOAAAAARIAAA3IgdAAIAAhdIAcAAIAAAPIABAAQACgHAGgEQAHgGAKAAQAUAAAFARIABAAQADgHAHgEQAIgGALAAQAOAAAIAJQAIAIAAAOIAABAg");
    this.shape_2.setTransform(66.5, 21.4);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#000000").s().p("AgdAvIAAhcIAdAAIAAANIAAAAQACgFAFgFQAGgEAIAAIAJAAIAAAYIgLgBQgTAAAAAVIAAAxg");
    this.shape_3.setTransform(55.4, 21.5);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#000000").s().p("AggAkQgMgMABgVIAAgFQgBgVAMgMQAMgNAUAAQAVAAAMANQAMAMgBAUIAAAFQABAWgMAMQgMANgVAAQgUAAgMgNgAgPgDIAAAGQAAAYAPAAQAQAAAAgYIAAgGQAAgYgQAAQgPAAAAAYg");
    this.shape_4.setTransform(46.4, 21.5);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#000000").s().p("AAQAwIAAg1QAAgSgQAAQgGAAgEAFQgEAFAAAIIAAA1IgdAAIAAhdIAcAAIAAAOIABAAQACgGAHgEQAGgGALAAQAPAAAIAJQAJAJAAARIAAA8g");
    this.shape_5.setTransform(36, 21.4);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(4));

    // Layer_1
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#CCCCCC").s().p("ApXDcIAAm3ISvAAIAAG3g");
    this.shape_6.setTransform(60, 22);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#FFFFFF").s().p("ApXDcIAAm3ISvAAIAAG3g");
    this.shape_7.setTransform(60, 22);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#999999").s().p("ApXDcIAAm3ISvAAIAAG3g");
    this.shape_8.setTransform(60, 22);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_6 }] }).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_8 }] }, 1).wait(2));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 120, 44);


  (lib.btn_angry = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("AgpA+IAAgTIAJABQAPAAABgMIAAgCIgfhcIAfAAIAQBFIABAAIARhFIAeAAIgdBYIgCAGQgHARgKAHQgKAIgRAAQgJgBgFgBg");
    this.shape.setTransform(79.9, 23.2);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#000000").s().p("AgdAvIAAhcIAdAAIAAANIAAAAQACgFAFgFQAGgEAIAAIAJAAIAAAYIgLgBQgTAAAAAVIAAAxg");
    this.shape_1.setTransform(71.9, 21.5);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("AggA4QgKgIAAgNIAaAAQADAKANAAQARAAAAgSIAAgNIgBAAQgDAGgGAFQgHAEgJAAQgRAAgIgLQgKgMAAgVIAAgEQAAgWAKgLQAIgMARAAQAJAAAHAFQAGAEADAHIACAAIAAgPIAbAAIAABcQAAATgPAJQgMAIgSAAQgUAAgMgJgAgPgTIAAAGQAAALAFAFQAEAGAHAAQAHAAAEgGQAFgFAAgLIAAgGQAAgLgFgGQgEgGgHAAQgQAAAAAXg");
    this.shape_2.setTransform(62.4, 23.2);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#000000").s().p("AAQAwIAAg1QAAgSgQAAQgGAAgEAFQgEAFAAAIIAAA1IgdAAIAAhdIAcAAIAAAOIABAAQACgGAHgEQAGgGALAAQAPAAAIAJQAJAJAAARIAAA8g");
    this.shape_3.setTransform(51.9, 21.4);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#000000").s().p("AggApQgJgIAAgNQAAgNAJgHQAJgHAQAAIAVAAIAAgIQAAgMgNAAQgLAAgBALIgaAAQAAgNAJgJQAKgKAUAAQASAAAKAJQAMAIAAARIAAA9IgbAAIAAgLIgBAAQgGANgSAAQgNAAgJgIgAgNARQAAAGAEADQAEADAFAAQAFAAAFgEQAEgDAAgGIAAgJIgOAAQgNAAAAAKg");
    this.shape_4.setTransform(41.5, 21.5);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(4));

    // Layer_1
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#CCCCCC").s().p("ApXDcIAAm3ISvAAIAAG3g");
    this.shape_5.setTransform(60, 22);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#FFFFFF").s().p("ApXDcIAAm3ISvAAIAAG3g");
    this.shape_6.setTransform(60, 22);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#999999").s().p("ApXDcIAAm3ISvAAIAAG3g");
    this.shape_7.setTransform(60, 22);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }] }).to({ state: [{ t: this.shape_6 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).wait(2));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 120, 44);


  (lib.body = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // レイヤー 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#050505").s().p("AhfEAQg+gsgGhRQgIhfAfhlQAfhnA6hKIAAAAQADgKAUgEIBwgbQALgDAIABQAMACADAIQAIAbgBAxQgCA5ADAUQADAUAOA6QALAvADAeIAJBaQABA4gTAfQgiA2hEAQQgYAGgWAAQgzAAgsgegAgFjjQhYB2gLC9QgGBfAtAoQAeAcApAGQAwAHAageQAXgaACgqQABgIgEhDQgFhGgQg9QgPg4AAgjIABg9QAAgZgEgTg");

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FE4E49").s().p("AAMEMQg8gBgogkQgrgmgDhFQgBgkAIg6QAGgvAKgrQAbhrA8hJIBxgbQAHARgBA1IAABIQACAWARBAQAOA3ADA8IAEBAQABAmgLAXQggBDhQAAIgBAAg");

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));

  }).prototype = getMCSymbolPrototype(lib.body, new cjs.Rectangle(-16.5, -28.6, 33.2, 57.3), null);


  (lib.face_surprise = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // レイヤー 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("ACnB/QgggLgSgYQgQgXgEggQgCgUABgnQAAgfAEgOQAGgaASgLQAIgGAWgFIA8gNQAcgHAPgBQAaAAAXAOQAYAOALAYQAJASAFAjQAGAogDAZQgDAmgTAXQgSAXggAKQgYAJgjAAQgjgBgZgJgADhhaIhBAPQgOADgEAFQgDADgCAJQgBAJAAATIAAApQABAhAJAQQAMAUAbAIQASAHAggBQAWgBAOgEQATgGALgNQAGgHAFgJIAFgNQADgIgBgMQgBgpgGgcQgDgPgGgLQgLgRgSgFQgGgCgJAAQgOAAgUAFgAklCAQgSgDgKgHQgKgHgGgNQgKgPgDgQQgEgPgCgfQgCggABgNQABgaALgRQAPgWAigNQARgFArgHQAdgEANAEQAJADANAJQATANAKAJQAOANAHAPQAHAQABAbQABAWgDALQgEAPgMARQgdAogpATQghAPgiAAQgMAAgMgCgAjlhKIgZAEQgQACgJADQgeAJgHAXQgDAJABANIADAWIAAAbQABAPAEAKIAIAOIAFAIIAHACQAlAIAkgSQAjgRAVghIAFgKQADgIgBgQQgBgYgHgKQgFgHgJgHIgTgNQgKgGgGgBIgFAAIgNABg");
    this.shape.setTransform(0.7, -6.3);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#050505").s().p("AAAEDQgZgEgWgRQgRgNAAgPIgGAAQgdAAgQgaQgQgcAYgTQAGgEARgCQARgCgFAEQgOALADAQQADAOAOAJQAHAFAHACQAGgDAKgBIAHAAQALgIAKgVQADgGAOgEQAQgEAEAFQAIAKAYAPQAZARAEgFQANgNAHgNQALgUgQgEQgHgCAQgHQAQgHAHACQAbAGgUAfQgRAbgVAJQgLAFgMABQABAUgZATQgaAUgZAAIgIAAgAgLDDIgPAHQAAAJAMAKQANALAOAFQAIADAEgCQAEgCAGgIQANgRgIgPIAAgCQgRgHgNgKQgJAKgMAIgADOAhQgegcAVgcQAWgeAwAQQAbAIABASQACAPgRAQQgRAQgVAFQgGABgGAAQgPAAgJgJgAjvAjQgYgIgGgSQgGgPAJgQQAJgQAQgEQATgEASAOQAlAcgMAbQgHASgWAAQgNAAgSgGgABHjYQgJgXAQABIAgAJQAWAHAZgEIBDgIQA5gGAwAHQATACgHAMQgHAMgQgCQgpgFhBAJQhQALgaAAIgBAAQgaAAgIgWgAkxjSIgcgDQgOgBAIgQQAJgRALAAIAcAEQAQACAMgBIAdgEQASgCALAAQASAAAoAEQAkACATgMQAQgKgCAPQgCAQgLAGQgUAOgeABQgJABgtgDQgQAAgZACIgpADIgFAAIgXgBg");
    this.shape_1.setTransform(-1.2, -5.9);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));

    // Layer_2
    this.instance = new lib.head("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(0, -13);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

  }).prototype = getMCSymbolPrototype(lib.face_surprise, new cjs.Rectangle(-46.4, -56.7, 92.9, 87.4), null);


  (lib.face_smile = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // レイヤー 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#050505").s().p("AAADpQgOgCgcgiQgdglgHgIQgJgJgGgNQgFgNABgHIgJAAQgmAAgWgbQgWgcAhgSQAIgEAWgCQAYgCgIAEQgSAKAEAQQAEAPASAJQAKAFAKACQAHgDAOgBIAJAAQAPgIAMgWQAEgGAVgDQAUgEAGAFQALAKAfAPQAhAQAHgEQAQgOAKgMQAPgVgWgEQgJgBAVgHQAWgHAJABQAkAHgaAeQgXAbgcAKQgOAFgRABQAAAHgIAMQgMAQgEAKQgNAcgVAbQgYAhgRAAIAAAAgAgaBeIgVAIQABAGAVAkQAXAlAHADQALACAQgoQAQgpgGgKIgBgCQgWgGgRgKQgMAKgQAHgADIgSQgjgPAZgQQAagQA5AJQAfAEACAKQACAIgUAJQgUAIgYADIgQABQgRAAgLgFgAkMgRQgjgFgKgJQgJgJANgIQAOgIAZgCQAbgDAcAIQA2AOgQAPQgMAKgiAAQgTAAgagDgABki0QgMgGgDgQQgCgPAQAJQATAKAkgEQAogIARAAQAMgBASAAIAeABQALABAQgEIAcgGQAKgBAKAQQAKAQgOACQgHAAgUAFQgSAEgKAAIgpAAQgagBgQACIg1AGIgFAAQgbAAgTgKgAiWi3Ig2gGQgPgCgaABIgpAAQgKAAgRgEQgVgFgHAAQgOgCAJgQQALgQALABIAbAGQAQAEAMgBIAdgBQASAAALABQARAAApAIQAkAEATgKQAQgJgDAPQgCAQgLAGQgUAKgbAAIgFAAg");
    this.shape.setTransform(1.6, 0.6);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // Layer_2
    this.instance = new lib.head("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(0, -8.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

  }).prototype = getMCSymbolPrototype(lib.face_smile, new cjs.Rectangle(-46.4, -52.2, 92.9, 87.4), null);


  (lib.face_sad = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // レイヤー 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#00CCFF").s().p("AjzByQgOgDgIgOQgIgKABgOQACgKAFgJQAHgJAKgFQAJgEALABQALAAAIAGQAIAGAGAKQAEAKgBALQgBAKgGAJQgHAJgJAEQgJAEgIAAQgFAAgGgCgADdA/QgKgBgIgGQgJgGgDgJQgJgQAGggIAIguIgCgNQgBgKAEgHQACgGAJgJIANgMQARgJATAHQARAHAFATQACAHAAAOIgBAoQgBASgLAdQgFASgGAIQgMAPgSAAIgGAAgAkIAJQgPgLgBgSIADgeQAEgTARgIQASgJARAJQARAIAEATQABAFAAAKQAAAUgFAMQgJAPgSAEIgJABQgMAAgMgIg");
    this.shape.setTransform(2.7, 13.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#050505").s().p("AAnDXQgbgLgMgBQgIgBgkAKQgeAIgJgJQgJgJgFgNQgGgNABgHIgJAAQgmAAgVgbQgWgcAggSQAIgEAWgCQAYgCgIAEQgSAKAEAQQAEAPASAJQAKAFAKACQAHgDAOgBIAJAAQAPgIANgWQAEgGAVgDQAUgEAFAFQALAKAfAPQAiAQAGgEQARgOAJgMQAPgVgWgEQgJgBAWgHQAVgHAJABQAkAHgaAeQgXAbgcAKQgOAFgRABQAAAHgIAMQgMAQgEAKQgGAMgOAAIgLgBgAgfCZIgUAIQAAAGA1AIQALADAPgHQAPgIgGgJIgBgCQgWgGgQgKQgNAKgQAHgAkmAtQgKgHAKgLQALgMAYgHQAagJAdAAQA4AAgNARQgNAUhJAKQgPACgLAAQgOAAgHgDgADDAsQgbgEgOgLQgegYAdgIQAdgIA0AVQAeANgBAKQAAAIgWAEIgVABQgMAAgNgCgAlIhIQABgTAKgEIAagKQAQgEAKgGIAZgQIAagOQAPgIAmgOQAigOALgTQAKgPAFAOQAFAPgGALQgNAUgbAPIgxAVQgPAGgVAOIgkAUQgJAGgRAFIgbAJIgFABQgHAAAAgOgAE9hDIgbgIQgQgGgJgFQgJgEgbgRQgWgOgPgFIgxgWQgbgOgMgUQgHgMAFgOQAFgOAKAPQALATAiAOQAnAOAPAIQAKAEAPAKIAZAQQAKAGAQAEIAbAJQAKAFAAATQAAAOgHAAIgFgCg");
    this.shape_1.setTransform(2, -5.3);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));

    // Layer_2
    this.instance = new lib.head("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(0, -10);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

  }).prototype = getMCSymbolPrototype(lib.face_sad, new cjs.Rectangle(-46.4, -53.7, 92.9, 87.4), null);


  (lib.face_normal = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // レイヤー 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#050505").s().p("AAAC4QgZgEgWgRQgRgOAAgOIgGAAQgdAAgQgaQgQgcAYgTQAGgEARgCQARgCgFAEQgOALADAQQADAOAOAJQAHAFAHACQAGgDAKgBIAHAAQALgIAKgVQADgGAOgEQAQgEAEAFQAIAKAYAPQAZARAEgFQANgNAHgNQALgUgQgEQgHgCAQgHQAQgHAHACQAbAGgUAfQgRAbgVAJQgLAFgMABQABAUgZATQgaAUgZAAIgIAAgAgLB4IgPAHQAAAJAMAKQANALAOAFQAIADAEgCQAEgCAGgIQANgRgIgPIAAgDQgRgGgNgKQgJAKgMAIgADWgLQgegcAVgeQAWgeAwAQQAbAJABASQACAPgRARQgRAPgVAFQgGACgGAAQgPAAgJgJgAj9gJQgYgIgGgSQgGgQAJgQQAJgQAQgEQATgEASAOQAlAcgMAcQgHASgWAAQgNAAgSgGgABHiNQgJgXAQABIAgAJQAWAHAZgEIBDgIQA5gGAwAHQATACgHAMQgHAMgQgCQgpgFhBAJQhQALgaAAIgBAAQgaAAgIgWgAkxiHIgcgDQgOgBAIgQQAJgRALAAIAcAEQAQACAMgBIAdgEQASgCALAAQASAAAoAEQAkACATgMQAQgKgCAPQgCAQgLAGQgUAOgeABQgJABgtgDQgQAAgZACIgpADIgFAAIgXgBg");
    this.shape.setTransform(0.8, 1.6);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // Layer_2
    this.instance = new lib.head("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(0, -10);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

  }).prototype = getMCSymbolPrototype(lib.face_normal, new cjs.Rectangle(-46.4, -53.7, 92.9, 87.4), null);


  (lib.face_angry = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // レイヤー 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#050505").s().p("AAIDIQgZgEgWgRQgRgOAAgOIgGAAQgdAAgQgaQgQgcAYgTQAGgEARgCQARgCgFAEQgOALADAQQADAOAOAJQAHAFAHACQAGgDAKgBIAHAAQALgIAKgVQACgGAPgEQAQgEAEAFQAIAKAYAPQAZARAEgFQANgNAHgNQALgUgQgEQgHgCAQgHQAQgHAHACQAbAGgUAfQgRAbgVAJQgLAFgMABQABAUgZATQgaAUgZAAIgIAAgAgDCIIgPAHQAAAJAMAKQAMALAPAFQAIADAEgCQAEgCAGgIQANgRgIgPIAAgDQgRgGgNgKQgJAKgMAIgADeAEQgegbAVgeQAWgeAwAQQAbAJABASQACAPgRARQgRAOgVAFQgHACgGAAQgOAAgJgJgAj1AGQgYgHgGgSQgGgQAJgQQAJgQAQgEQATgEASAOQAlAcgMAcQgHARgWAAQgNAAgSgGgAgsgpQgUgOgIgdIgLg0QgBgGATgFQAUgFABAFIAKAzQAIAdASAOQAEACgRAIQgLAEgGAAQgEAAgCgCgAhsgyQgYgBgagQIgrggQgNgJgWgNIgkgUQgJgGgNgLIgVgTQgMgIARgJQAQgJAJAHIAVASQAMAMAKAFIAaAOQAQAIAKAHQAOAJAfAbQAdAWAWAAQATABgKALQgKAMgMAAIgBAAgAAwhOQgVgTgMgbQgFgMAUgFQATgGAFAMQAOAiAWAEQASAEAhgOIA/gZQA1gVAwgGQATgCgEANQgDANgQACQgpAGg9AaQhLAfgYAHQgGACgHAAQgTAAgUgRg");

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // Layer_2
    this.instance = new lib.head("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(0, -10);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

  }).prototype = getMCSymbolPrototype(lib.face_angry, new cjs.Rectangle(-46.4, -53.7, 92.9, 87.4), null);


  (lib.character = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, { normal: 0, smile: 28, sad: 56, angry: 84, surprise: 112 });

    // timeline functions:
    this.frame_27 = function () {
      this.stop();
    }
    this.frame_55 = function () {
      this.stop();
    }
    this.frame_83 = function () {
      this.stop();
    }
    this.frame_111 = function () {
      this.stop();
    }
    this.frame_139 = function () {
      this.stop();
    }

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).wait(27).call(this.frame_27).wait(28).call(this.frame_55).wait(28).call(this.frame_83).wait(28).call(this.frame_111).wait(28).call(this.frame_139).wait(1));

    // face
    this.instance = new lib.face_normal("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(44.9, 53.4);

    this.instance_1 = new lib.face_smile("synched", 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(44.9, 53.4);
    this.instance_1._off = true;

    this.instance_2 = new lib.face_sad("synched", 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(45.2, 84.5, 1, 1, 0, 0, 0, 0.3, 31.1);
    this.instance_2._off = true;

    this.instance_3 = new lib.face_angry("synched", 0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(44.9, 53.4);
    this.instance_3._off = true;

    this.instance_4 = new lib.face_surprise("synched", 0);
    this.instance_4.parent = this;
    this.instance_4.setTransform(44.9, 53.4);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance }] }).to({ state: [{ t: this.instance_1 }] }, 28).to({ state: [{ t: this.instance_1 }] }, 8).to({ state: [{ t: this.instance_1 }] }, 4).to({ state: [{ t: this.instance_1 }] }, 6).to({ state: [{ t: this.instance_2 }] }, 10).to({ state: [{ t: this.instance_2 }] }, 16).to({ state: [{ t: this.instance_2 }] }, 5).to({ state: [{ t: this.instance_2 }] }, 6).to({ state: [{ t: this.instance_3 }] }, 1).to({ state: [{ t: this.instance_3 }] }, 17).to({ state: [{ t: this.instance_3 }] }, 4).to({ state: [{ t: this.instance_3 }] }, 6).to({ state: [{ t: this.instance_4 }] }, 1).to({ state: [{ t: this.instance_4 }] }, 27).wait(1));
    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({ _off: false }, 0).wait(8).to({ startPosition: 0 }, 0).to({ rotation: 8, x: 49.4, y: 32.2 }, 4).to({ rotation: 0, x: 44.9, y: 53.4 }, 6, cjs.Ease.get(0.98)).to({ _off: true }, 10).wait(84));
    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(56).to({ _off: false }, 0).wait(16).to({ startPosition: 0 }, 0).to({ rotation: -48.7, x: 25.2 }, 5).to({ startPosition: 0 }, 6).to({ _off: true }, 1).wait(56));
    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84).to({ _off: false }, 0).wait(17).to({ startPosition: 0 }, 0).to({ rotation: 8, x: 49.4, y: 32.2 }, 4).to({ rotation: 0, x: 44.9, y: 53.4 }, 6, cjs.Ease.get(0.98)).to({ _off: true }, 1).wait(28));

    // rightleg
    this.instance_5 = new lib.leg_left("synched", 0);
    this.instance_5.parent = this;
    this.instance_5.setTransform(52.8, 121.7, 1, 1, 0, 0, 0, -3.3, -16.7);

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(28).to({ startPosition: 0 }, 0).wait(8).to({ rotation: -0.6, y: 120.8 }, 0).to({ regX: -3.4, rotation: -15, x: 52.7, y: 101.7 }, 4).to({ regX: -3.3, rotation: 0, x: 52.8, y: 121.7 }, 6, cjs.Ease.get(1)).wait(10).to({ startPosition: 0 }, 0).wait(16).to({ startPosition: 0 }, 0).to({ regY: -16.6, rotation: -15, x: 49.6, y: 121.8 }, 5).to({ startPosition: 0 }, 6).wait(1).to({ regY: -16.7, rotation: 0, x: 52.8, y: 121.7 }, 0).wait(17).to({ rotation: -0.6, y: 120.8 }, 0).to({ regX: -3.4, rotation: -15, x: 52.7, y: 101.7 }, 4).to({ regX: -3.3, rotation: 0, x: 52.8, y: 121.7 }, 6, cjs.Ease.get(1)).wait(1).to({ startPosition: 0 }, 0).wait(27).to({ startPosition: 0 }, 0).wait(1));

    // righthand
    this.instance_6 = new lib.hand_left("synched", 0);
    this.instance_6.parent = this;
    this.instance_6.setTransform(53.5, 92.4, 1, 1, 0, 0, 0, -17.2, -6.4);

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({ startPosition: 0 }, 0).wait(8).to({ rotation: -0.6, y: 91.4 }, 0).to({ rotation: -15, x: 53.6, y: 72.3 }, 4).to({ rotation: 0, x: 53.5, y: 92.4 }, 6, cjs.Ease.get(1)).wait(10).to({ regX: -13.5, regY: -8.9, x: 55.2, y: 89.9, mode: "independent" }, 0).wait(16).to({ regX: -13.4, rotation: 50.2, x: 33.8, y: 85.9 }, 5).wait(7).to({ regX: -17.2, regY: -6.4, rotation: 0, x: 53.5, y: 92.4, mode: "synched", startPosition: 0 }, 0).wait(17).to({ rotation: -0.6, y: 91.4 }, 0).to({ rotation: -15, x: 53.6, y: 72.3 }, 4).to({ rotation: 0, x: 53.5, y: 92.4 }, 6, cjs.Ease.get(1)).wait(1).to({ startPosition: 0 }, 0).wait(27).to({ startPosition: 0 }, 0).wait(1));

    // body
    this.instance_7 = new lib.body("synched", 0);
    this.instance_7.parent = this;
    this.instance_7.setTransform(45.2, 104.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(28).to({ startPosition: 0 }, 0).wait(8).to({ y: 103.9 }, 0).to({ y: 84.8 }, 4).to({ y: 104.8 }, 6, cjs.Ease.get(1)).wait(10).to({ startPosition: 0 }, 0).wait(16).to({ startPosition: 0 }, 0).to({ rotation: -30, x: 33.2 }, 5).to({ startPosition: 0 }, 6).wait(1).to({ rotation: 0, x: 45.2 }, 0).wait(17).to({ y: 103.9 }, 0).to({ y: 84.8 }, 4).to({ y: 104.8 }, 6, cjs.Ease.get(1)).wait(1).to({ startPosition: 0 }, 0).wait(27).to({ startPosition: 0 }, 0).wait(1));

    // leftleg
    this.instance_8 = new lib.leg_right("synched", 0);
    this.instance_8.parent = this;
    this.instance_8.setTransform(37.1, 126.7, 1, 1, 0, 0, 0, 0, -12.2);

    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(28).to({ startPosition: 0 }, 0).wait(8).to({ regX: 0.1, rotation: 0.6, y: 125.7 }, 0).to({ regX: 0, rotation: 15, y: 106.7 }, 4).to({ rotation: 0, y: 126.7 }, 6, cjs.Ease.get(1)).wait(10).to({ startPosition: 0 }, 0).wait(16).to({ startPosition: 0 }, 0).to({ startPosition: 0 }, 5).to({ startPosition: 0 }, 6).wait(1).to({ startPosition: 0 }, 0).wait(17).to({ regX: 0.1, rotation: 0.6, y: 125.7 }, 0).to({ regX: 0, rotation: 15, y: 106.7 }, 4).to({ rotation: 0, y: 126.7 }, 6, cjs.Ease.get(1)).wait(1).to({ startPosition: 0 }, 0).wait(27).to({ startPosition: 0 }, 0).wait(1));

    // lefthand
    this.instance_9 = new lib.hand_right("synched", 0);
    this.instance_9.parent = this;
    this.instance_9.setTransform(33.4, 92.9, 1, 1, 0, 0, 0, 10.3, -8.3);

    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(28).to({ startPosition: 0 }, 0).wait(8).to({ rotation: 0.6, y: 92 }, 0).to({ rotation: 15, y: 72.9 }, 4).to({ rotation: 0, y: 92.9 }, 6, cjs.Ease.get(1)).wait(10).to({ startPosition: 0 }, 0).wait(16).to({ startPosition: 0 }, 0).to({ rotation: -45, x: 22.2 }, 5).to({ startPosition: 0 }, 6).wait(1).to({ rotation: 0, x: 33.4 }, 0).wait(17).to({ rotation: 0.6, y: 92 }, 0).to({ rotation: 15, y: 72.9 }, 4).to({ rotation: 0, y: 92.9 }, 6, cjs.Ease.get(1)).wait(1).to({ startPosition: 0 }, 0).wait(27).to({ startPosition: 0 }, 0).wait(1));

    // tail
    this.instance_10 = new lib.tail("synched", 0);
    this.instance_10.parent = this;
    this.instance_10.setTransform(58.3, 121.7, 1, 1, 0, 0, 0, -16.2, 0);

    this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(28).to({ startPosition: 0 }, 0).wait(8).to({ rotation: 0.6, y: 120.8 }, 0).to({ rotation: 15, y: 101.7 }, 4).to({ rotation: 0, y: 121.7 }, 6, cjs.Ease.get(1)).wait(10).to({ startPosition: 0 }, 0).wait(16).to({ startPosition: 0 }, 0).to({ startPosition: 0 }, 5).to({ startPosition: 0 }, 6).wait(1).to({ startPosition: 0 }, 0).wait(17).to({ rotation: 0.6, y: 120.8 }, 0).to({ rotation: 15, y: 101.7 }, 4).to({ rotation: 0, y: 121.7 }, 6, cjs.Ease.get(1)).wait(1).to({ startPosition: 0 }, 0).wait(27).to({ startPosition: 0 }, 0).wait(1));

    // shadow
    this.instance_11 = new lib.shadow("synched", 0);
    this.instance_11.parent = this;
    this.instance_11.setTransform(47.4, 160.3);

    this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(28).to({ startPosition: 0 }, 0).wait(8).to({ startPosition: 0 }, 0).to({ scaleX: 0.8, scaleY: 0.8 }, 4).to({ scaleX: 1, scaleY: 1 }, 6, cjs.Ease.get(1)).wait(10).to({ startPosition: 0 }, 0).wait(16).to({ startPosition: 0 }, 0).to({ startPosition: 0 }, 5).to({ startPosition: 0 }, 6).wait(1).to({ startPosition: 0 }, 0).wait(17).to({ startPosition: 0 }, 0).to({ scaleX: 0.8, scaleY: 0.8 }, 4).to({ scaleX: 1, scaleY: 1 }, 6, cjs.Ease.get(1)).wait(1).to({ startPosition: 0 }, 0).wait(27).to({ startPosition: 0 }, 0).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1.6, -0.3, 97.9, 171.3);


  // stage content:
  (lib.test = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // btn_normal
    this.btn_normal = new lib.btn_normal();
    this.btn_normal.name = "btn_normal";
    this.btn_normal.parent = this;
    this.btn_normal.setTransform(279.5, 214.6, 1, 1, 0, 0, 0, 60, 22);
    new cjs.ButtonHelper(this.btn_normal, 0, 1, 2, false, new lib.btn_normal(), 3);

    this.timeline.addTween(cjs.Tween.get(this.btn_normal).wait(1));

    // btn_surprise
    this.btn_surprise = new lib.btn_surprise();
    this.btn_surprise.name = "btn_surprise";
    this.btn_surprise.parent = this;
    this.btn_surprise.setTransform(443.6, 214.6, 1, 1, 0, 0, 0, 60, 22);
    new cjs.ButtonHelper(this.btn_surprise, 0, 1, 2, false, new lib.btn_surprise(), 3);

    this.timeline.addTween(cjs.Tween.get(this.btn_surprise).wait(1));

    // btn_angry
    this.btn_angry = new lib.btn_angry();
    this.btn_angry.name = "btn_angry";
    this.btn_angry.parent = this;
    this.btn_angry.setTransform(279.5, 282.6, 1, 1, 0, 0, 0, 60, 22);
    new cjs.ButtonHelper(this.btn_angry, 0, 1, 2, false, new lib.btn_angry(), 3);

    this.timeline.addTween(cjs.Tween.get(this.btn_angry).wait(1));

    // btn_sad
    this.btn_sad = new lib.btn_sad();
    this.btn_sad.name = "btn_sad";
    this.btn_sad.parent = this;
    this.btn_sad.setTransform(443.6, 285.6, 1, 1, 0, 0, 0, 60, 22);
    new cjs.ButtonHelper(this.btn_sad, 0, 1, 2, false, new lib.btn_sad(), 3);

    this.timeline.addTween(cjs.Tween.get(this.btn_sad).wait(1));

    // btn_smile
    this.btn_smile = new lib.btn_smile();
    this.btn_smile.name = "btn_smile";
    this.btn_smile.parent = this;
    this.btn_smile.setTransform(361.5, 354.5, 1, 1, 0, 0, 0, 60, 22);
    new cjs.ButtonHelper(this.btn_smile, 0, 1, 2, false, new lib.btn_smile(), 3);

    this.timeline.addTween(cjs.Tween.get(this.btn_smile).wait(1));

    // chara
    this.chara = new lib.character();
    this.chara.name = "chara";
    this.chara.parent = this;
    this.chara.setTransform(78, 247, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.chara).wait(1));

    // bg
    this.instance = new lib.background();
    this.instance.parent = this;
    this.instance.setTransform(-1, -42, 0.871, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(274, 158, 560, 481);
  // library properties:
  lib.properties = {
    id: '201AC58DD1BC448C9DEE4EE6DB4E5BF1',
    width: 550,
    height: 400,
    fps: 24,
    color: "#FFFFFF",
    opacity: 1.00,
    manifest: [
      { src: "images/background.jpg?1516082609151", id: "background" }
    ],
    preloads: []
  };

  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  }
  p.play = function () { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
  p.stop = function (ms) { if (ms) this.seek(ms); this.tickEnabled = false; }
  p.seek = function (ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
  p.getDuration = function () { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

  p.getTimelinePosition = function () { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions['201AC58DD1BC448C9DEE4EE6DB4E5BF1'] = {
    getStage: function () { return exportRoot.getStage(); },
    getLibrary: function () { return lib; },
    getSpriteSheet: function () { return ss; },
    getImages: function () { return img; }
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  }

  an.getComposition = function (id) {
    return an.compositions[id];
  }

})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;