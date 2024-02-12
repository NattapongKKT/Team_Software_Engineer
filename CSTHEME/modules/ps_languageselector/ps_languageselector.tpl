{**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 *}
 
<div id="_desktop_language_selector">
  <div class="language-selector-wrapper">
    <span id="language-selector-label" class="hidden-md-up">
      {l s='Language:' d='Shop.Theme.Global'}
    </span>
    <div class="language-selector dropdown js-dropdown">
      <button class="hidden-sm-down btn-unstyle" language-button current" data-iso-code="{$current_language.iso_code}">
      <img alt="{$language.iso_code}" height="11" src="/img/flags/{$language.iso_code}.jpg" width="16"style="margin-right: 2px;"/>
        {$current_language.name_simple}
      </button>
      {foreach from=$languages item=language}
        {if $language.id_lang != $current_language.id_lang}
          <button class="btn btn-sm language-button" data-iso-code="{$language.iso_code}">
          <img alt="{$language.iso_code}" height="11" src="/img/flags/{$language.iso_code}.jpg" width="16"style="margin-right: 2px;"/>
          <a href="{url entity='language' id=$language.id_lang}"</a>
            {$language.name_simple}
          </button>
        {/if}
      {/foreach}

    </div>
  </div>
</div>