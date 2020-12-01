export {ItemMixin};


/**
 * A mixin providing `focused`, `focus-ring`, `active`, `disabled` and `selected`.
 *
 * `focused`, `active` and `focus-ring` are set as only as attributes.
 */
declare function ItemMixin<T extends new (...args: any[]) => {}>(base: T): T & ItemMixinConstructor;

interface ItemMixinConstructor {
  new(...args: any[]): ItemMixin;
}

export {ItemMixinConstructor};

interface ItemMixin {
  value: string;

  /**
   * Used for mixin detection because `instanceof` does not work with mixins.
   * e.g. in VaadinListMixin it filters items by using the
   * `element._hasVaadinItemMixin` condition.
   */
  _hasVaadinItemMixin: boolean;

  /**
   * If true, the user cannot interact with this element.
   */
  disabled: boolean;

  /**
   * If true, the item is in selected state.
   */
  selected: boolean;
  ready(): void;
  disconnectedCallback(): void;
  _setFocused(focused: boolean): void;
  _setActive(active: boolean): void;
  _onKeydown(event: KeyboardEvent): void;
  _onKeyup(event: KeyboardEvent): void;
}
