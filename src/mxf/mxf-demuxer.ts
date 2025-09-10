/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Demuxer } from '../demuxer';
import { Input } from '../input';
import { InputTrack } from '../input-track';
import { MetadataTags } from '../tags';

/**
 * Stub demuxer for the Material eXchange Format (MXF).
 *
 * This is a placeholder implementation that currently does not parse MXF
 * structures. The methods return minimal defaults so that the format can be
 * detected without crashing the application. Proper MXF demuxing is left as a
 * TODO.
 */
export class MxfDemuxer extends Demuxer {
        constructor(input: Input) {
                super(input);
        }

        /** @internal */
        async computeDuration(): Promise<number> {
                // TODO: Implement MXF duration calculation
                return 0;
        }

        /** @internal */
        async getTracks(): Promise<InputTrack[]> {
                // TODO: Parse MXF tracks
                return [];
        }

        /** @internal */
        async getMimeType(): Promise<string> {
                return 'application/mxf';
        }

        /** @internal */
        async getMetadataTags(): Promise<MetadataTags> {
                // TODO: Extract MXF metadata
                return {};
        }
}
