document.getElementById('btnMenu').addEventListener('click', function() {
var x = document.getElementById('ply3');
var y = document.getElementById('close');
var z = document.getElementById('menus');

if (x.style.display === 'none') {
    x.style.display = 'block';
    y.style.display = 'none';
    z.style.display = 'none';
} else {
    x.style.display = 'none';
    y.style.display = 'block';
    z.style.display = 'block';
}
});

var d_product = document.getElementById('d_product');
var dm_product = document.getElementById('dm_product');
var ds_product = document.getElementById('ds_product');

var d_company = document.getElementById('d_company');
var dm_company = document.getElementById('dm_company');
var ds_company = document.getElementById('ds_company');

var d_connect = document.getElementById('d_connect');
var dm_connect = document.getElementById('dm_connect');
var ds_connect = document.getElementById('ds_connect');

d_product.addEventListener('click', function() {
    dm_company.style.display = 'none';
    d_company.classList.remove('opacity-100', 'underline');
    ds_company.classList.remove('transform', 'rotate-180');
    dm_connect.style.display = 'none';
    d_connect.classList.remove('opacity-100', 'underline');
    ds_connect.classList.remove('transform', 'rotate-180');

    if (dm_product.style.display != 'block') {
        dm_product.style.display = 'block';
        d_product.classList.add('opacity-100', 'underline');
        ds_product.classList.add('transform', 'rotate-180');
    } else {
        dm_product.style.display = 'none';
        d_product.classList.remove('opacity-100', 'underline');
        ds_product.classList.remove('transform', 'rotate-180');
    }
});

d_company.addEventListener('click', function() {
    dm_product.style.display = 'none';
    d_product.classList.remove('opacity-100', 'underline');
    ds_product.classList.remove('transform', 'rotate-180');
    dm_connect.style.display = 'none';
    d_connect.classList.remove('opacity-100', 'underline');
    ds_connect.classList.remove('transform', 'rotate-180');

    if (dm_company.style.display != 'block') {
        dm_company.style.display = 'block';
        d_company.classList.add('opacity-100', 'underline');
        ds_company.classList.add('transform', 'rotate-180');
    } else {
        dm_company.style.display = 'none';
        d_company.classList.remove('opacity-100', 'underline');
        ds_company.classList.remove('transform', 'rotate-180');
    }
});

d_connect.addEventListener('click', function() {
    dm_product.style.display = 'none';
    d_product.classList.remove('opacity-100', 'underline');
    ds_product.classList.remove('transform', 'rotate-180');
    dm_company.style.display = 'none';
    d_company.classList.remove('opacity-100', 'underline');
    ds_company.classList.remove('transform', 'rotate-180');

    if (dm_connect.style.display != 'block') {
        dm_connect.style.display = 'block';
        d_connect.classList.add('opacity-100', 'underline');
        ds_connect.classList.add('transform', 'rotate-180');
    } else {
        dm_connect.style.display = 'none';
        d_connect.classList.remove('opacity-100', 'underline');
        ds_connect.classList.remove('transform', 'rotate-180');
    }
});

var m_product = document.getElementById('m_product');
var mm_product = document.getElementById('mm_product');
var ms_product = document.getElementById('ms_product');

var m_company = document.getElementById('m_company');
var mm_company = document.getElementById('mm_company');
var ms_company = document.getElementById('ms_company');

var m_connect = document.getElementById('m_connect');
var mm_connect = document.getElementById('mm_connect');
var ms_connect = document.getElementById('ms_connect');

m_product.addEventListener('click', function() {
    mm_company.style.display = 'none';
    m_company.classList.remove('opacity-100', 'underline');
    ms_company.classList.remove('transform', 'rotate-180');
    mm_connect.style.display = 'none';
    m_connect.classList.remove('opacity-100', 'underline');
    ms_connect.classList.remove('transform', 'rotate-180');

    if (mm_product.style.display != 'block') {
        mm_product.style.display = 'block';
        m_product.classList.add('opacity-100', 'underline');
        ms_product.classList.add('transform', 'rotate-180');
    } else {
        mm_product.style.display = 'none';
        m_product.classList.remove('opacity-100', 'underline');
        ms_product.classList.remove('transform', 'rotate-180');
    }
});

m_company.addEventListener('click', function() {
    mm_product.style.display = 'none';
    m_product.classList.remove('opacity-100', 'underline');
    ms_product.classList.remove('transform', 'rotate-180');
    mm_connect.style.display = 'none';
    m_connect.classList.remove('opacity-100', 'underline');
    ms_connect.classList.remove('transform', 'rotate-180');

    if (mm_company.style.display != 'block') {
        mm_company.style.display = 'block';
        m_company.classList.add('opacity-100', 'underline');
        ms_company.classList.add('transform', 'rotate-180');
    } else {
        mm_company.style.display = 'none';
        m_company.classList.remove('opacity-100', 'underline');
        ms_company.classList.remove('transform', 'rotate-180');
    }
});

m_connect.addEventListener('click', function() {
    mm_product.style.display = 'none';
    m_product.classList.remove('opacity-100', 'underline');
    ms_product.classList.remove('transform', 'rotate-180');
    mm_company.style.display = 'none';
    m_company.classList.remove('opacity-100', 'underline');
    ms_company.classList.remove('transform', 'rotate-180');

    if (mm_connect.style.display != 'block') {
        mm_connect.style.display = 'block';
        m_connect.classList.add('opacity-100', 'underline');
        ms_connect.classList.add('transform', 'rotate-180');
    } else {
        mm_connect.style.display = 'none';
        m_connect.classList.remove('opacity-100', 'underline');
        ms_connect.classList.remove('transform', 'rotate-180');
    }
});