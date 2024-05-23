@props(['url'])
<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'MAMERI SARL')
<img src="https://mameribj.org/assets/img/logo.png" class="logo" alt="MAMERI Logo">
@else
{{ $slot }}
@endif
</a>
</td>
</tr>
