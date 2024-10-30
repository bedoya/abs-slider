/**
 * @function default_options
 * Set options that can be overridden
 * when creating the ABCarousel instance.
 */
const default_options = () => {
    return {
        slide_speed: 6000,
        is_active: true,
        direction: true,
        transition: 'ABSlide',
        slide_class: 'ab-carousel-slide',
        slide_image_class: 'ab-carousel-slide-background',
        buttons: {
            prev: { class: 'ab-carousel-button-prev' },
            next: { class: 'ab-carousel-button-next' },
        },
    };
};

export default default_options;
