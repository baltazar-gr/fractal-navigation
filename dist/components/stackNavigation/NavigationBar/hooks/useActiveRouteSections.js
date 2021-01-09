import { useLocation } from '../../../../react-router';
import { useIsRouteActive } from '../../../../hooks/useIsRouteActive';
export function useActiveRouteSections(path) {
    var pathname = useLocation().pathname;
    var isRouteActive = useIsRouteActive(path, false);
    if (isRouteActive) {
        return pathname.substring(1).split('/').length;
    }
    else {
        return 0;
    }
}
//# sourceMappingURL=useActiveRouteSections.js.map